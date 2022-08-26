const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddTransaction,UpdateTransaction,TransactionInfo,userTransactions}=require("./payment.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 

 router.post("/",AddTransaction);
 router.post("/update",UpdateTransaction);
 router.get("/:id",TransactionInfo);
 router.get("/user/:id",userTransactions);



  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
