//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,remove}=require("./agreement.services");

/********************************
 ********************************
 ********************************/


 //when print reequest done data insert into the database and generate the pdf link

 const AddAgreement=(req,res)=>{
    data=req.body;
if(data.customer_id==undefined){
    res.status(400).json({
        message:"invalid data"
        });
}
else{
    find(data.customer_id,(err,result)=>{
        if(err)
           res.status(500).json({ message:"internal server error"});
           else if(result.length)
           res.status(200).json(result[0]);
           else{

            //pdf genarate logic implement here......

            data.file_url="mypdf.pdf";
            data.verified=0;
            data.printed_on=new Date().toISOString().slice(0,19).replace('T',' ');

            add(data,(err,result)=>{
                if(err)
                res.status(500).json({ message:"internal server error"});
                else{
                    res.status(200).json(data);
                }
            });
           }
    });
}



}

const UpdateAgreement=(req,res)=>{
data=req.body; 
if(req.files==undefined){  
    if(data.verified==undefined || data.customer_id==undefined ){
        res.status(500).json({
            message:"invalid request"
        });
    }
    else{
        //update only verify
        update(data,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                });
            }
            else{
                if(result.affectedRows)
                return res.status(200).json({message:"updated"});
                return res.status(200).json({message:"invalid data"});
            }
        });
    }
}
else{
    data.verified=0;
    data.upload_on=new Date().toISOString().slice(0,19).replace('T',' ');
    /**
     * store upload file
     */
     agreementfile = req.files.agreement;
     originalname= agreementfile.name;
     fileExt=originalname.split('.').at(-1);
     newName=Date.now()+''+Math.floor(Math.random()*100000000)+'.'+fileExt;
     uploadPath = __dirname+'../../../' + '/documents/pdf/agreement/' + newName;

     data.file_url=newName;

     agreementfile.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).json({
            message:"file not uploaded"
        });
        else{
            data.file_url=newName;
            update(data,(err,result)=>{
                if(err){
                    return res.status(500).json({
                        message:"internal server error"
                    });
                }
                else{
                    return res.status(200).json({
                        message:"agreement uploaded thank you"
                    });
                }
             });
           
        }
        
    });

     

}

}

const FindAgreement=(req,res)=>{
if(req.params.id==undefined || isNaN(req.params.id)){
    res.status(400).json({
        message:"invalid data"
        });
}
else{
    find(req.params.id,(err,result)=>{
        if(err)
                res.status(500).json({ message:"internal server error"});
                else if(result.length==0)
                res.status(400).json({ message:"no data found"});
                else 
                res.status(200).json(result[0]);
    });
}
}

const DeleteAgreement=(req,res)=>{
    if(req.params.id==undefined || isNaN(req.params.id)){
        res.status(400).json({
            message:"invalid data"
            });
    }
    else{
        remove(req.params.id,(err,result)=>{
            if(err)
                    res.status(500).json({ message:"internal server error"});
                    else if(result.affectedRows==0)
                    res.status(400).json({ message:"invalid request"});
                    else 
                    res.status(200).json({message:"data deleted"});
        });
    }
}

module.exports={AddAgreement,UpdateAgreement,FindAgreement,DeleteAgreement}