const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddAccount,UpdateAccount,FindAccount,DeleteAccount}=require("./bank_account.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 router.post("/",AddAccount);
 router.post("/update",UpdateAccount);
 router.get("/:id",FindAccount);
 router.get("/delete/:id",DeleteAccount);

 

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
