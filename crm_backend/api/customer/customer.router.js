const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddCustomer,UpdateCustomer,FindCustomer,DeleteCustomer,UpdatePassword,ForgetPassword}=require("./customer.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 router.post("/",AddCustomer);
 router.post("/update",UpdateCustomer);
 router.get("/:id",FindCustomer);
 router.post("/updatepass",UpdatePassword);
 router.get("/forgetpass:id",ForgetPassword);
 router.get("/delete/:id",DeleteCustomer);

 

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
