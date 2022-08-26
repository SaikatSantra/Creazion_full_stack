//import all the response message
const {INVALID_REQ_MSG,ERVERERROR,NOTFOUND,UPDATEMSG,PHONEXIST,EMAILEXIST,DATADELETE,DATAADD,DATAINVALID}=require("../../locale/en");
//import all the work report services
const {add,update,find,findall,remove}=require("./designation.services");

/********************************
 ********************************
 ********************************/
 const AddDesignation=(req,res)=>{
    data=req.body;
    if(data.name==undefined ||data.salary_id==undefined)
         res.status(400).json({message:"invalid data" }); 
    else{
        add(data,(err,result)=>{
            if(err) 
            res.status(500).json({ message:"internal server error"});
            else{
                data.id=result.insertId;
                return res.status(200).json(data);
            }
        });
    }
}
const UpdateDesignation=(req,res)=>{
    data=req.body;
    if(data.name==undefined ||data.salary_id==undefined ||data.id==undefined)
         res.status(400).json({message:"invalid data" }); 
    else{
        update(data,(err,result)=>{
            if(err)
                 res.status(500).json({ message:"internal server error" });            
            else if(result.affectedRows)
                 res.status(200).json({message:"data updated" });            
            else
                res.status(400).json({message:"invalid data" }); 
        });
    }
}
const FindDesignation=(req,res)=>{
    if(req.params.id==undefined){
        res.status(400).json({message:"invalid data" }); 
    }
    else{
        find(req.params.id,(err,result)=>{
            if(err)
                 res.status(500).json({ message:"internal server error"}); 
            
            else if(result.length==0) 
                res.status(400).json({ message:"No data Found" });  

            else{
                result=result[0];
                res.status(200).json({ data:result });
            }
            
        });
    }
}
const AllDesignation=(req,res)=>{
findall((err,result)=>{
    if (err)
            res.status(500).json({ message: "internal server error" });
        else if (result.length == 0)
            res.status(400).json({ message: "No data Found" });
        else
            res.status(200).json(result);
});

}
const DeleteDesignation=(req,res)=>{
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

module.exports={AddDesignation,UpdateDesignation,FindDesignation,AllDesignation,DeleteDesignation}