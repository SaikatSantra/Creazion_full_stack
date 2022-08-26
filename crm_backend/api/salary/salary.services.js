const dbcon = require("../../config/mysql_db_config");


const add = (data, callBack) => {
    dbcon.query('INSERT INTO salary(basic,hra,conveyance,medical,special,epf,insurance,tax) VALUES (?,?,?,?,?,?,?,?)', 
    [data.basic,data.hra,data.conveyance,data.medical,data.special,data.epf,data.insurance,data.tax], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}



const update = (data, callBack) => {
    dbcon.query('UPDATE salary SET basic=?,hra=?,conveyance=?,medical=?,special=?,epf=?,insurance=?,tax=? WHERE id=?', [data.bassic,data.hra,data.conveyance,data.medical,data.special,data.epf,data.insurance,data.tax,data.id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}



const find = (id, callBack) => {
    dbcon.query('SELECT * FROM salary WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const findall = (callBack) => {
    dbcon.query('SELECT * FROM salary WHERE 1', [], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}



const remove = (id, callBack) => {
    dbcon.query('DELETE FROM salary WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


module.exports={add,update,find,findall,remove}