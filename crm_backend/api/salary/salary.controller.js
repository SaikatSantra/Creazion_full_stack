//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,findall,remove}=require("./salary.services");



/************************************************
 * ***********************************************
 ************************************************/


const AddSalary=(req,res)=>{
    let data=req.body;
    if(isNaN(data.basic) || isNaN(data.hra)|| isNaN(data.conveyance)|| isNaN(data.medical) || isNaN(data.special) || isNaN(data.epf) || isNaN(data.insurance)||isNaN(data.tax) )   
    res.json({message:"invalid data" });
    else{
        add(data,(err,result)=>{
            if(err){
                return res.status(500).json({ message:"internal server error" });
            }
            else{
                data.id=result.insertId;
                return res.status(200).json(data);
            }
        });
    }
   

}

const UpdateSalary=(req,res)=>{
    let data=req.body;
    if(isNaN(data.basic) || isNaN(data.hra)|| isNaN(data.conveyance)|| isNaN(data.medical) || isNaN(data.special) || isNaN(data.epf) || isNaN(data.insurance)||isNaN(data.tax) ||isNaN(data.id) )   
    res.status(400).json({message:"invalid data" });
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

const FindSalary=(req,res)=>{

    if(req.params.id==undefined){
        res.status(400).json({
            message:"invalid data"
            }); 
        
    }
    else{
        find(req.params.id,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                }); 
            }
            else{
                if(result.length==0){
                    return res.status(400).json({
                        message:"No data Found"
                    });  
                }
                result=result[0];
                return res.status(200).json(result);
            }
        });  
    }


  

}

const AllSalary=(req,res)=>{
    findall((err,result)=>{
        if (err)
            res.status(500).json({ message: "internal server error" });
        else if (result.length == 0)
            res.status(400).json({ message: "No data Found" });
        else
            res.status(200).json(result);
    }); 

 

  
}

const DeleteSalary=(req,res)=>{
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

module.exports={AddSalary,UpdateSalary,FindSalary,AllSalary,DeleteSalary}