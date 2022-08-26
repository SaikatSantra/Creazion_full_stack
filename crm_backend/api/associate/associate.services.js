const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

/****************************
 Associate Model:
 full_name
 phone_no 
 email 
 commission_rate 
 account_no 
 document_id 
 pass 
 status 
 image
 ***********************/
const add = (data, callBack) => {
    dbcon.query('INSERT INTO associate(full_name,phone_no,email,commission_rate,pass,status) VALUES (?,?,?,?,?,?)',
        [data.full_name, data.phone_no, data.email, 0, data.pass, 1], (err, result, fields) => {
            if (err)
                return callBack(err);
            return callBack(null, result);
        });
}


const associateexist = (data, callBack) => {
    dbcon.query('SELECT * FROM associate WHERE phone_no=? OR email=?', [data.phone_no, data.email], (err, result, fields) => {
        if (err)
            return callBack(err);
        return callBack(null, result);
    });

}


/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const update = (data, callBack) => {
    dbcon.query('UPDATE associate SET full_name=,phone_no=,email=,commission_rate=,account_no=,document_id=,pass=,status=,image=? WHERE id=?',
        [data.full_name, data.phone_no, data.email, data.commission_rate, data.account_no, data.document_id, data.pass, data.status, data.image, data.id], (err, result, fields) => {
            if (err)
                return callBack(err);
            return callBack(null, result);
        });
}



/**
 * 
 * @param {*} id 
 * @param {*} callBack 
 */

const find = (id, callBack) => {
    dbcon.query('SELECT * FROM associate WHERE phone_no=? OR email=?', [id, id], (err, result, fields) => {
        if (err)
            return callBack(err);
        return callBack(null, result);
    });
}

const findbyid = (id, callBack) => {
    dbcon.query('SELECT * FROM associate WHERE id=?', [id], (err, result, fields) => {
        if (err)
            return callBack(err);
        return callBack(null, result);
    });
}


//data.account_no data.id data.ifsc_code,data.bank_name
const updateaccount = (data, callBack) => {
    dbcon.query('UPDATE associate SET account_no=? WHERE id=?', [data.account_no, data.id], (err, result, fields) => {
        if (err)
            return callBack(err);
        else {
            dbcon.query('INSERT INTO bank_acccount(account_no,ifsc_code,bank_name) VALUES (?,?,?)', [data.account_no, data.ifsc_code, data.bank_name], (err, result, fileds) => {
                if (err)
                    callBack(err);
                else
                    callBack(null, result);
            });
        }

    });
}


//data contain 
const updatedocument = (data, callBack) => {
    dbcon.query('UPDATE associate SET document_id=? WHERE id=?', [data.document_id, data.id], (err, result, fields) => {
        if (err)
            return callBack(err);
        return callBack(null, result);
    });
}

const updatepassword = (data, callBack) => {
    dbcon.query('UPDATE associate SET pass=? WHERE id=?', [data.new_pass, data.id], (err, result, fields) => {
        if (err)
            return callBack(err);
        return callBack(null, result[0]);
    });
}
/**
 * 
 * @param {*} id 
 * @param {*} callBack 
 */

const remove = (id, callBack) => {
    dbcon.query('DELETE FROM associate WHERE id=?', [id], (err, result, fields) => {
        if (err)
            return callBack(err);
        return callBack(null, result);
    });
}
module.exports = { add, update, find, remove, associateexist, findbyid, updateaccount, updatedocument, updatepassword }