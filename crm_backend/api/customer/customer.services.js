const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const add = (data, callBack) => {
    dbcon.query('INSERT INTO customer(full_name,phone_no,email,account_no,document_id,pass,img_url,status) VALUES (?,?,?,?,?,?,?,?)',
     [data.full_name,data.phone_no,data.email,data.account_no,data.document_id,data.pass,data.img_url,data.status], (err, result, fields) => {
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
    dbcon.query('UPDATE customer SET full_name=?,phone_no=?,email=?,account_no=?,document_id=?,pass=?,img_url=?,status=? WHERE id=?', [data.full_name,data.phone_no,data.email,data.account_no,data.document_id,data.pass,data.img_url,data.status,data.id], (err, result, fields) => {
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

const find = (emailorphone, callBack) => {
    dbcon.query('SELECT * FROM customer WHERE phone_no=? OR email=?', [emailorphone,emailorphone], (err, result, fields) => {
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
    dbcon.query('DELETE FROM customer WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,remove}