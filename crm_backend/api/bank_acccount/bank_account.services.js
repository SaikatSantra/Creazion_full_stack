const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const add = (data, callBack) => {
    dbcon.query('INSERT INTO bank_acccount(account_no,ifsc_code,bank_name) VALUES (?,?,?)', [data.account_no,data.ifsc_code,data.bank_name], (err, result, fields) => {
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
    dbcon.query('UPDATE bank_acccount SET account_no=?,ifsc_code=?,bank_name=? WHERE account_no=?', [data.update_account_no,data.ifsc_code,data.bank_name,data.old_account_no], (err, result, fields) => {
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

const find = (accountno, callBack) => {
    dbcon.query('SELECT * FROM bank_acccount WHERE account_no=?', [accountno], (err, result, fields) => {
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

const remove = (accountno, callBack) => {
    dbcon.query('DELETE FROM bank_acccount WHERE account_no=?', [accountno], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,remove}