const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddSalary,UpdateSalary,FindSalary,AllSalary,DeleteSalary}=require("./salary.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 
 router.post("/",AddSalary);
 router.post("/update",UpdateSalary);
 router.get("/:id",FindSalary);
 router.get("/",AllSalary);
 router.get("/delete/:id",DeleteSalary);



  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
