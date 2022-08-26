//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,remove}=require("./employee.services");
const bcrypt=require('bcrypt');
const saltRound=10;


/********************************
 ********************************
 `id``designation_id``salary_id``emp_document_id``account_no``name``dob``email``phone``pass``img``report_to` status
 ********************************/
const AddEmployee = (req, res) => {
    data = req.body;
    if (data.designation_id == undefined || data.salary_id == undefined || data.emp_document_id == undefined || data.name == undefined || data.dob == undefined || data.email == undefined || data.phone == undefined || data.pass == undefined || data.report_to == undefined)
        res.status(400).json({ message: "invalid data" });
       else{
        bcrypt.genSalt(saltRound,(err,salt)=>{
            bcrypt.hash(data.pass,salt,(err,encpass)=>{
                data.pass=encpass;
                add(data,(err,result)=>{
                    if(err){
                        return res.status(500).json({message:"internal server error"});
                    }
                    else{
                        data.id=result.insertId;
                        delete data.pass;
                        return res.status(200).json(data);
                    }
    
                });
            });
        });
       }
}





const UpdateEmployee=(req,res)=>{

}


const FindEmployee=(req,res)=>{
    if(req.params.id==undefined){
        res.status(400).json({
            message:"invalid data"
            }); 
    }
    else{
        find(req.params.id,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                }); 
            }
            else if(result.length==0) 
            res.status(400).json({ message:"No data Found" }); 
            else 
            res.status(200).json(result[0]);
            
        });
    }
}



const DeleteEmployee=(req,res)=>{
    if(req.params.id==undefined || isNaN(req.params.id))
        res.status(400).json({ message:"invalid data"});
    
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

const UpdatePassword=(req,res)=>{

    if(req.body.old_pass==undefined || req.body.new_pass==undefined || req.body.id==undefined)
        res.status(400).json({ message:"invalid data"});
    else{
        data=req.body;
        find(data.id,(err,result)=>{
            if(err){
                 res.status(500).json({message:"internal server error" });
            }
            else if(result.length==0){
                 res.status(500).json({message:"invalid data"});
            }
            else{
                bcrypt.compare(data.old_pass,result[0].pass,(err,resl)=>{
                    if(err)
                     res.status(200).json({
                        message:"something wrong try again later"
                    });
                    else if(!resl)
                     res.status(500).json({message:"invalid Old Password"});
                    else{
                        bcrypt.genSalt(saltRound,(err,salt)=>{
                            bcrypt.hash(data.new_pass,salt,(err,encpass)=>{
                                data.new_pass=encpass;
                                data.id=result[0].id;
                                res.status(200).json({
                                    message:"password reset"
                                });
                               
                            });
                        });
                        
                    }
                });

                
            }
        });
    }
}



module.exports={AddEmployee,UpdateEmployee,FindEmployee,DeleteEmployee,UpdatePassword}