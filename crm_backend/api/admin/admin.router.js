const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
//import all the controller to call specifice request
const {AddAdmin,UpdateAdmin,FindAdmin,DeleteAdmin,UpdatePassword,ForgetPassword}=require("./admin.controller");


/*******************************************
 * To handle all Valid Request
 *******************************************/

 router.post("/",AddAdmin);
 router.post("/update",UpdateAdmin);
 router.get("/:id",FindAdmin);
 router.post("/updatepass",UpdatePassword);
 router.get("/forgetpass:id",ForgetPassword);
 router.get("/delete/:id",DeleteAdmin);


  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
