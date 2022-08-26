//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,remove,associateexist,findbyid,updateaccount,updatedocument,updatepassword}=require("./associate.services");

const {add:addbankaccount,find:findbank}=require("../bank_acccount/bank_account.services");
const {add:adddocument,find:finddocument}=require('../document/document.services');
const bcrypt=require('bcrypt');
const saltRound=10;

/********************************
 ********************************
 ********************************/
//full_name phone_no email account_no document_id pass status image
 const AddAssociate=(req,res)=>{
 data=req.body;
if(data.full_name==undefined||data.phone_no==undefined||data.email==undefined||data.pass==undefined)
res.json({message:"invalid data" });
else{
    data.status=1;

    associateexist(data,(err,result)=>{
        if(err)
         res.status(500).json({ message:"internal server error" });
         else if(result.length) {
            res.status(200).json({message:"Email/phone already used"});
         }
         else{

            bcrypt.genSalt(saltRound, (err, salt) => {
                bcrypt.hash(data.pass, salt, (err, encpass) => {
                    data.pass = encpass;
                    add(data, (err, result) => {
                        if (err)
                            res.status(500).json({ message: "internal server error" });
                        else {
                            data.id = result.insertId;
                            delete data.pass;
                            res.status(200).json(data);
                        }
                    });
                })
            }); 
         }
    });
   
}
}


const UpdateAssociate=(req,res)=>{
    data=req.body;

    if(data.id==undefined)
    res.status(400).json({message:"invalid data" });
    else{
        findbyid(data.id,(err,result)=>{
            if(err)
            res.status(500).json({ message:"internal server error" });
            else if(result.length==0)
            res.status(500).json({ message:"invalid info" });
            else 
            {
                if(data.account_no!=undefined && data.ifsc_code!=undefined && data.bak_name!=undefined){
                    
                }
            }
        });
    }


}


const updateBankInfo=(req,res)=>{
    if(result.account_no!=data.account_no)
    {
        findbank(data.account_no,(err,result)=>{
            if(err)
            res.json(err);
            else if(result.length!=0)
            res.status(400).json({message:"bank account already used"});
            else if(data.ifsc_code==undefined || data.bank_name==undefined)
            res.status(400).json({message:"bank Information not valid"});
            addbankaccount(data,(err,result2)=>{
                if(err)
                res.status(500).json({message:"internal server error"});
                else
                res.status(200).json({message:"bank updated"});
            });
        });
    }
}



const FindAssociate=(req,res)=>{
    if(req.params.id==undefined){
        res.status(400).json({message:"invalid data" }); 
    }
    else{
        findbyid(req.params.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else if (result.length == 0) {
                find(req.params.id, (err, result) => {
                    if (err)
                        res.status(500).json({ message: "internal server error" });
                    else if (result.length == 0) {
                        res.status(400).json({ message: "no data found" }); 
                    }
                    else {
                        result = result[0];
                        delete result['pass']
                        return res.status(200).json({ data: result });
                    }
                });
            }
            else {
                result = result[0];
                delete result['pass']
                return res.status(200).json({ data: result });
            }
        });
    }
    
}

const DeleteAssociate=(req,res)=>{
res.status(400).json({message:"sorry this service not allowed"})
}

const UpdatePassword=(req,res)=>{
    if(req.body.old_pass==undefined || req.body.new_pass==undefined || req.body.id==undefined)
    res.status(400).json({ message:"invalid data"});
else{
    data=req.body;
    findbyid(data.id,(err,result)=>{
        if(err)
             res.status(500).json({message:"internal server error"});       
        else if(result.length==0)
             res.status(500).json({message:"invalid data" });      
        else{
            bcrypt.compare(data.old_pass,result[0].pass,(err,resl)=>{
                if(err)
                 res.status(200).json({message:"something wrong try again later" });
                else if(!resl)
                 res.status(400).json({message:"invalid Old Password"});
                else{
                    bcrypt.genSalt(saltRound,(err,salt)=>{
                        bcrypt.hash(data.new_pass,salt,(err,encpass)=>{
                            data.new_pass=encpass;
                            data.id=result[0].id;
                            updatepassword(data,(err,result)=>{
                                if(err)
                                 res.status(500).json({message:"internal server error"}); 
                                 res.status(200).json({message:"password reset"});
                            });
                            
                           
                        });
                    });
                    
                }
            });

            
        }
    });
}
}


//data contain ,new_pass,email_phone

const ForgetPassword = (req, res) => {
    data = req.body;
    if (data.email_phone == undefined || data.new_pass == undefined)
        res.status(400).json({ message: "invalid data" });
    else {
        find(data.email_phone, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else if (result.length == 0) {
                res.status(400).json({ message: "no data found" });
            }
            else {
                bcrypt.genSalt(saltRound, (err, salt) => {
                    bcrypt.hash(data.new_pass, salt, (err, encpass) => {
                        data.new_pass = encpass;
                        data.id = result[0].id;
                        updatepassword(data, (err, result) => {
                            if (err)
                                res.status(500).json({ message: "internal server error" });
                            res.status(200).json({ message: "password reset" });
                        });
                    });
                });
            }
        });
    }
}


module.exports={AddAssociate,UpdateAssociate,FindAssociate,DeleteAssociate,UpdatePassword,ForgetPassword}