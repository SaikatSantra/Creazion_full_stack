const router=require("express").Router();
const {INVALID_REQ_MSG}=require("../../locale/en");
//import all the function from controller
const {AddWorkReport,UpdateWorkReport,DeleteWorkReport,DayWorkReport,DurationWorkReport,EmployeeWorkReport}=require("./work_report.controller");


/*******************************************
 * To handle all Valid Request
 *******************************************/
   
    router.post("/",AddWorkReport);
    router.post("/update",UpdateWorkReport);
    router.get("/delete/:id",DeleteWorkReport);
    router.get("/report/:wdate",DayWorkReport);
    router.post("/report",DurationWorkReport);
    router.get("/empid",EmployeeWorkReport);

    

  /*To handle all invalid request */  
  router.all("*",(request,response)=>{
    response.status(500).json({
        status:"failed",
        message:INVALID_REQ_MSG
    });
    });  

module.exports=router;
