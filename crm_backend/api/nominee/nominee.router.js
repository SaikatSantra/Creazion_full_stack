const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddNominee,UpdateByCutomerId,FindNominee,DeleteNominee}=require("./nominee.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/


 router.post("/",AddNominee);
 router.post("/update",UpdateByCutomerId);
 router.get("/:id",FindNominee);
 router.get("/delete/:id",DeleteNominee);

 

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
