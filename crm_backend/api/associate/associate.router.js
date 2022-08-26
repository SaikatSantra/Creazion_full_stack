const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddAssociate,UpdateAssociate,FindAssociate,DeleteAssociate,UpdatePassword,ForgetPassword}=require("./associate.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 router.post("/",AddAssociate);
 router.post("/update",UpdateAssociate);
 router.get("/:id",FindAssociate);
 router.post("/updatepass",UpdatePassword);
 router.post("/forgetpass",ForgetPassword);
 router.get("/delete/:id",DeleteAssociate);
 

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
