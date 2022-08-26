//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,findusertransaction}=require("./payment.services");

/********************************
 ********************************
 ********************************/
 const AddTransaction=(req,res)=>{

}
const UpdateTransaction=(req,res)=>{

}
const TransactionInfo=(req,res)=>{
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
const userTransactions=(req,res)=>{
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
                return res.status(200).json({
                    data:result
                });
            }
        });
    }
}
module.exports={AddTransaction,UpdateTransaction,TransactionInfo,userTransactions}