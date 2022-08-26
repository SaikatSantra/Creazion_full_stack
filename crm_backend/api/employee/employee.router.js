const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddEmployee,UpdateEmployee,FindEmployee,DeleteEmployee,UpdatePassword}=require("./employee.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/



 router.post("/",AddEmployee);
 router.post("/update",UpdateEmployee);
 router.get("/:id",FindEmployee);
 router.get("/delete/:id",DeleteEmployee);
 router.post("/updatepass",UpdatePassword);
 
 

 
  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
