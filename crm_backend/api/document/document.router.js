const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddDocument,UpdateDocument,FindDocument,DeleteDocument}=require("./document.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 
 router.post("/",AddDocument);
 router.post("/update",UpdateDocument);
 router.get("/:id",FindDocument);
 router.get("/delete/:id",DeleteDocument);


  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
