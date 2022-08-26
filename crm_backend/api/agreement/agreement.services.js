const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const add = (data, callBack) => {
    dbcon.query('INSERT INTO agreement(customer_id, printed_on,upload_on,file_url,verified) VALUES (?,?,?,?,?)', 
    [data.customer_id,data.printed_on,data.upload_on,data.file_url,data.verified], (err, result, fields) => {
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

    if(data.verified==1){
        dbcon.query('UPDATE agreement SET verified=? WHERE customer_id=?', 
        [data.verified,data.customer_id], (err, result, fields) => {
            if(err)
            return callBack(err);
            return callBack(null,result);
        });   
    }
    else{
        dbcon.query('UPDATE agreement SET upload_on=?,file_url=? WHERE customer_id=?', 
        [data.upload_on,data.file_url,data.customer_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
    }
}

/**
 * 
 * @param {*} id 
 * @param {*} callBack 
 */

const find = (id, callBack) => {
    dbcon.query('SELECT * FROM agreement WHERE customer_id=?', [id], (err, result, fields) => {
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
    dbcon.query('DELETE FROM agreement WHERE customer_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,remove}