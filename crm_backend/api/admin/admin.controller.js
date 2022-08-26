//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,remove,changepass}=require("./admin.services");
const bcrypt=require('bcrypt');
const saltRound=10;
/********************************
 ********************************
 ********************************/


/**
 * 
 *Request Body Contain :


 */ 

const AddAdmin=(req,res)=>{
let data=req.body;
if(data.full_name==undefined || data.email==undefined || data.phone==undefined || data.pass==undefined){
res.status(400).json({
message:"invalid data"
});
}
//if no image upload then default.jpg
if(req.files==undefined){
   data.image="default.jpg"
}
else{
    adminimg = req.files.image;
    originalname= adminimg.name;
    fileExt=originalname.split('.').at(-1);
    newName=Date.now()+''+data.phone+'.'+fileExt;

    uploadPath = __dirname+'../../../' + '/documents/images/admin/' + newName;
    
    adminimg.mv(uploadPath, function(err) {
      if (err)
        return res.status(500).json({
            message:"file not uploaded"
        });
        else{
            data.image=newName;
            //to solve time problem
            data.last_login=new Date().toISOString().slice(0,19).replace('T',' ');
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
        
    });

    
}


}
const UpdateAdmin=(req,res)=>{
    data=req.body;
if(data.full_name==undefined|| data.email==undefined ||data.phone==undefined|| data.id==undefined)
    res.status(400).json({message:"invalid data" });
//if no image upload then default.jpg
if(req.files==undefined){
    update(data,(err,result)=>{
        if(err){
            res.status(500).json({
                messgae:SERVERERROR
            });
        } 
        else if(result.affectedRows){
            res.status(200).json({
                messgae:UPDATEMSG
            });
        }
        else{
            res.status(400).json({
                messgae:NOTFOUND
            }); 
        }
       });
 }
 else{
     adminimg = req.files.image;
     originalname= adminimg.name;
     fileExt=originalname.split('.').at(-1);
     newName=Date.now()+''+data.phone+'.'+fileExt;
 
     uploadPath = __dirname+'../../../' + '/documents/images/admin/' + newName;
     adminimg.mv(uploadPath, function(err) {
       if (err)
         return res.status(500).json({
             message:"file not uploaded"
         });
         else{
             data.image=newName;
             //to solve time problem
             data.last_login=new Date().toISOString().slice(0,19).replace('T',' ');
           update(data,(err,result)=>{
            if(err){
                res.status(500).json({
                    messgae:SERVERERROR
                });
            } 
            else if(result.affectedRows){
                res.status(200).json({messgae:UPDATEMSG });
            }
            else{
                res.status(400).json({ messgae:NOTFOUND }); 
            }
           });


             
         }
         
     });
 }

}

const FindAdmin=(req,res)=>{
    if(req.params.id==undefined){
        res.status(400).json({
            message:"invalid data"
            }); 
    }
    else{
        find(req.params.id,(err,result)=>{
            if(err){
                 res.status(500).json({message:"internal server error" }); 
            }
            else{
                if(result.length==0)
                 res.status(400).json({ message:"No data Found" });  
                
                result=result[0];
                delete result['pass']
                 res.status(200).json({ data:result });
            }
        });
    }
    
}
const DeleteAdmin=(req,res)=>{
    if(req.params.id==undefined){
        res.status(400).json({
            message:"invalid data"
            }); 
    }
    else if(isNaN(req.params.id)){
        res.status(400).json({
            message:"invalid data"
            }); 
    }
    else{
        remove(req.params.id,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                }); 
            }
            else if(result.affectedRows){
                res.status(200).json({
                    message:"data deleted"
                });
            }
            else{
                res.status(400).json({
                    message:"invalid data"
                    });   
            }
        })
    }
}

//rquest body contain old_pass,new_pass,email_phone
const UpdatePassword=(req,res)=>{

    if(req.body.old_pass==undefined || req.body.new_pass==undefined || req.body.email_phone==undefined)
        res.status(400).json({ message:"invalid data"});
    else{
        data=req.body;
        find(data.email_phone,(err,result)=>{
            if(err){
                return res.status(500).json({
                    message:"internal server error"
                });
            }
            else if(result.length==0){
                return res.status(500).json({
                    message:"invalid data"
                });
            }
            else{
                bcrypt.compare(data.old_pass,result[0].pass,(err,resl)=>{
                    if(err)
                    return res.status(200).json({
                        message:"something wrong try again later"
                    });
                    else if(!resl)
                    return res.status(500).json({message:"invalid Old Password"});
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
const ForgetPassword=(req,res)=>{
//



}

module.exports={AddAdmin,UpdateAdmin,FindAdmin,DeleteAdmin,UpdatePassword,ForgetPassword}