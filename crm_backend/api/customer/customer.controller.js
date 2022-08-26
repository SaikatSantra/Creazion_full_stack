//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,remove}=require("./customer.services");

/********************************
 ********************************
 ********************************/
 const AddCustomer=(req,res)=>{

}
const UpdateCustomer=(req,res)=>{

}
const FindCustomer=(req,res)=>{
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
                return res.status(200).json({
                    data:result
                });
            }
        });
    }
}
const DeleteCustomer=(req,res)=>{
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
const UpdatePassword=(req,res)=>{

}
const ForgetPassword=(req,res)=>{

}
module.exports={AddCustomer,UpdateCustomer,FindCustomer,DeleteCustomer,UpdatePassword,ForgetPassword}