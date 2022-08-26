const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const add = (data, callBack) => {
    dbcon.query('INSERT INTO admin(full_name, email,phone,pass,image,last_login) VALUES (?,?,?,?,?,?)', [data.full_name,data.email,data.phone,data.pass,data.image,data.last_login], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const update = (data, callBack) => {

    if(data.image)
    {
        dbcon.query('UPDATE admin SET full_name=?,email=?,phone=?,image=? WHERE id=?', 
        [data.full_name,data.email,data.phone,data.image,data.id],(err, result, fields) => {
            if(err)
            return callBack(err);
            return callBack(null,result);
        });
    }
    else{
        dbcon.query('UPDATE admin SET full_name=?,email=?,phone=? WHERE id=?', 
        [data.full_name,data.email,data.phone,data.id],(err, result, fields) => {
            if(err)
            return callBack(err);
            return callBack(null,result);
        });
    }
    
}


const changepass=(data,callBack)=>{
    dbcon.query('UPDATE admin SET pass=? WHERE id=?',[data.new_pass,data.id],(err,result,fields)=>{
        if(err)
        return callBack(err);
        return callBack(null,result);
    })
}
/**
 * 
 * @param {*} id 
 * @param {*} callBack 
 */

const find = (id, callBack) => {
    dbcon.query('SELECT * FROM admin WHERE email=? OR phone=?', [id,id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

/**
 * 
 * @param {*} id 
 * @param {*} callBack 
 */

const remove = (id, callBack) => {
    dbcon.query('DELETE FROM admin WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,remove,changepass}