const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddDesignation,UpdateDesignation,FindDesignation,AllDesignation,DeleteDesignation}=require("./designation.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 router.post("/",AddDesignation);
 router.post("/update",UpdateDesignation);
 router.get("/:id",FindDesignation);
 router.get("/",AllDesignation);
 router.get("/delete/:id",DeleteDesignation);

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
