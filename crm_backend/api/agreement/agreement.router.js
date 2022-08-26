const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddAgreement,UpdateAgreement,FindAgreement,DeleteAgreement}=require("./agreement.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 
 router.post("/",AddAgreement);
 router.post("/update",UpdateAgreement);
 router.get("/:id",FindAgreement);
 router.get("/delete/:id",DeleteAgreement);

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
