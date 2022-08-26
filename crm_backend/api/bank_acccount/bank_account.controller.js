//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,remove}=require("./bank_account.services");

/********************************
 ********************************

 **********************************
 ********************************/

 const AddAccount=(req,res)=>{
    data=req.body;
        if(data.account_no==undefined|| data.ifsc_code==undefined|| data.bank_name==undefined)
            res.json({message:"invalid data" });
        else {
            find(data.account_no,(err,result)=>{
                if(err)
                 res.status(500).json({ message:"internal server error" });
                else if(result.length)
                res.status(400).json({ message:"bank account already used" });
                else{
                    add(data,(err,result)=>{
                        if(err)
                        res.status(500).json({ message:"internal server error" });
                        else
                            res.status(200).json({message:"data saved"});                       
                    });
                }
            })
        }

}
const UpdateAccount=(req,res)=>{
    data=req.body;
    if(data.update_account_no==undefined|| data.ifsc_code==undefined|| data.bank_name==undefined || data.old_account_no==undefined)
        res.json({message:"invalid data" });
        else{
            update(data,(err,result)=>{
                if(err)
                res.status(500).json({ message:"internal server error" });
            
            else if(result.affectedRows)
                res.status(200).json({message:"data updated" });
            
            else
                res.status(400).json({message:"invalid data" });
            });
        }
}
const FindAccount=(req,res)=>{
    if(req.params.id==undefined)
        res.status(400).json({ message:"invalid data" }); 
    
    else{
        find(req.params.id,(err,result)=>{
            if(err)
                 res.status(500).json({message:"internal server error"}); 
            
            else if(result.length==0)
                     res.status(400).json({message:"No data Found"});  
                
                else{
                    result=result[0];
                    res.status(200).json({data:result });
                }
            
        });
    }
}
const DeleteAccount=(req,res)=>{
    if(req.params.id==undefined){
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
module.exports={AddAccount,UpdateAccount,FindAccount,DeleteAccount}