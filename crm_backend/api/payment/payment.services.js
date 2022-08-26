const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const add = (data, callBack) => {
    dbcon.query('INSERT INTO payment(transaction_id,credit_to,debit_from,ammount,payment_mode,status,transaction_time=CURRENT_TIMESTAMP) VALUES ()', [], (err, result, fields) => {
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
    dbcon.query('UPDATE payment SET payment_mode=?,status=? WHERE transaction_id=?', [data.payment_mode,data.status,data.transaction_id], (err, result, fields) => {
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

const findusertransaction = (account_no, callBack) => {
    dbcon.query('SELECT * FROM payment WHERE debit_from=? OR credit_to =? ORDER BY transaction_time', [account_no], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const find = (transaction_id, callBack) => {
    dbcon.query('SELECT * FROM payment WHERE transaction_id=? ', [transaction_id], (err, result, fields) => {
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


module.exports={add,update,find,findusertransaction}