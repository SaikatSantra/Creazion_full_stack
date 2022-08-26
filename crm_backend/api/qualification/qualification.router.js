const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en")
const {AddQualification,UpdateQualification,QualificationById,EmployeeQualifications,DeleteQualification}=require("./qualification.controller");

/*******************************************
 * To handle all Valid Request
 *******************************************/
 router.post("/",AddQualification);
 router.post("/update",UpdateQualification);
 router.get("/:id",QualificationById);
 router.get("/employee/:id",EmployeeQualifications);
 router.get("/delete/:id",DeleteQualification);

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
