//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {findbyempid,empdurationreport,add,update,findbydate,remove}=require("./work_report.services");

/************************************************
 * ***********************************************
 ************************************************/

const AddWorkReport=(req,res)=>{
    let data=req.body;
    if(req.body.empid==undefined){
        res.status(400).json({
            message:"invalid data"
            });
    }
    else{
        let today=new Date();
        data.report_date=today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate();
        data.start_time=today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        add(data,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                });
            }
            else{
                data.id=result.insertId;
                return res.status(200).json(data);
            }
        });
       
    }
    

}

const UpdateWorkReport=(req,res)=>{
let data=req.body;
if(data.empid==undefined ||data.report==undefined )
    res.status(400).json({ message:"invalid data ..."});
else{
    if(req.files==undefined){
        data.document_url="";
        let today=new Date();
        data.report_date=today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate();
        data.submit_time=today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
        update(data,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                });
            }
            else if(result.affectedRows==0){
                res.status(400).json({
                    messgae:"invalid data"
                });
            }
            else{
                return res.status(200).json({
                    message:"data updated"
                });
            }
        });
    }
    
    else{
    workrepofile = req.files.document;
    originalname= workrepofile.name;
    fileExt=originalname.split('.').at(-1);
    newName=Date.now()+'wr'+'.'+fileExt;
    uploadPath = __dirname+'../../../' + '/documents/pdf/work_report/' + newName;
    workrepofile.mv(uploadPath, function(err) {
        if (err)
          return res.status(500).json({
              message:"file not uploaded"
          });
          else{
              data.document=newName;
             let today=new Date();
             data.report_date=today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate();
             data.submit_time=today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
             update(data,(err,result)=>{
                if(err){
                    return res.status(500).json({
                        message:"internal server error"
                    });
                }
                else if(result.affectedRows==0){
                    res.status(400).json({
                        messgae:"invalid data",
                        data,
                    });
                }
                else{
                    return res.status(200).json({
                        message:"data updated",
                        data,
                    });
                }
            });
          }
          
      });
    }
    
} 


}

const DayWorkReport=(req,res)=>{
if(req.params.wdate==undefined){
    res.status(400).json({
        message:"invalid data"
        });
}
else{
    findbydate(req.params.wdate,(err,result)=>{
        if(err){
            return res.status(500).json({
                message:"internal server error"
            }); 
        }
        else{
            if(result.length==0){
                return res.status(400).json({
                    message:"No data Found"
                });  
            }
            return res.status(200).json({
                data:result
            });
        }
    });
}

}

const DurationWorkReport=(req,res)=>{
let data=req.body;
    if(data.id==undefined||data.start_date==undefined||data.end_date==undefined)
        res.status(400).json({ message:"invalid data"});
        else{
            res.json({data,});
            }
    



}

const EmployeeWorkReport=(req,res)=>{
    if(req.params.empid==undefined){
        res.status(400).json({
            message:"invalid data"
            }); 
    }
    else{
        findbyempid(req.params.empid,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                }); 
            }
            else{
                if(result.length==0){
                    return res.status(400).json({
                        message:"No data Found"
                    });  
                }
                result=result[0];
                return res.status(200).json({
                    data:result
                });
            }
        });
    }
}

const DeleteWorkReport=(req,res)=>{
    if(req.params.id==undefined || isNaN(req.params.id)){
        res.status(400).json({
            message:"invalid data"
            });
    }
    else{
        remove(req.params.id,(err,result)=>{
            if(err)
                    res.status(500).json({ message:"internal server error"});
                    else if(result.affectedRows==0)
                    res.status(400).json({ message:"invalid request"});
                    else 
                    res.status(200).json({message:"data deleted"});
        });
    }
}

module.exports={AddWorkReport,UpdateWorkReport,DeleteWorkReport,DayWorkReport,DurationWorkReport,EmployeeWorkReport}