require('dotenv').config();

const express=require("express");
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app=express();
const {INVALID_REQ_MSG}=require("./locale/en")

app.use(fileUpload());

/***************************
 * Import router of all Models
 ****************************/
const AdminRouter=require("./api/admin/admin.router");
const AgreementRouter=require("./api/agreement/agreement.router");
const AssociateRouter=require("./api/associate/associate.router");
const BankAccountRouter=require("./api/bank_acccount/bank_account.router");
const CustomerRouter=require("./api/associate/associate.router");
const DesignationRouter=require("./api/designation/designation.router");
const DocumentRouter=require("./api/document/document.router");
const EmployeeRouter=require("./api/employee/employee.router");
const EmployeeDocRouter=require("./api/employee_documents/employee_documents.router");
const Nominirouter=require("./api/nominee/nominee.router");
const Paymentrouter=require("./api/payment/payment.router");
const QualificationRouter=require("./api/qualification/qualification.router");
const SalaryRouter=require("./api/salary/salary.router");
const WorkReportRouter=require("./api/work_report/work_report.router");


/**
 * Middleware for js object to json data
 */

 app.use(cors())
app.use(express.json());



/********************************************
 * Define all the valid routes for api calls
 ********************************************/


app.use("/api/admin",AdminRouter);
app.use("/api/agreement",AgreementRouter);
app.use("/api/associate",AssociateRouter);
app.use("/api/bank_account",BankAccountRouter);
app.use("/api/customer",CustomerRouter);
app.use("/api/designation",DesignationRouter);
app.use("/api/document",DocumentRouter);
app.use("/api/employee",EmployeeRouter);
app.use("/api/emp_doc",EmployeeDocRouter);
app.use("/api/nominee",Nominirouter);
app.use("/api/payment",Paymentrouter);
app.use("/api/qualification",QualificationRouter);
app.use("/api/salary",SalaryRouter);
app.use("/api/work_repo",WorkReportRouter);





/************************
 * Api Documentaion Url
 *************************/
 app.get("/",(request,response)=>{
    response.send("API Documentation");
});

/****************************
 * To handle all invalid request
 * ***************************/

 app.all("*",(request,response)=>{
    response.status(500).json({
        message:INVALID_REQ_MSG
    });
    });


/*Server Initilization */
    app.listen(process.env.APP_PORT,()=>{
        console.log(`Api Server Running on Port No : ${process.env.APP_PORT}`);
    });
