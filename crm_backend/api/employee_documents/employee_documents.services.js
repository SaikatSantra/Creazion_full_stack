const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const add = (data, callBack) => {
    dbcon.query('INSERT INTO employee_documents(employee_id,adhar_no,pan_no,address,joining_date,acceptance_file_url,id_card,status) VALUES (?,?,?,?,?,?,?,?,?)', 
    [data.employee_id,data.adhar_no,data.pan_no,data.address,data.joining_date,data.acceptance_file_url,data.id_card,data.status], (err, result, fields) => {
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


/**
 * 
 * data 
 * 
 */
const update = (data, callBack) => {
    dbcon.query('UPDATE employee_documents SET adhar_no=?,pan_no=?,address=?,joining_date=?,acceptance_file_url=?,id_card=?,status=? WHERE employee_id=?',
     [data.adhar_no,data.pan_no,data.address,data.joining_date,data.acceptance_file_url,data.id_card,data.status,data.employee_id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}



const find = (id, callBack) => {
    dbcon.query('SELECT * FROM employee_documents WHERE employee_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const adharExist=(adharno, callBack) => {
    dbcon.query('SELECT * FROM employee_documents WHERE adhar_no=?', [adharno], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const panExist=(panno, callBack) => {
    dbcon.query('SELECT * FROM employee_documents WHERE pan_no=?', [panno], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


const remove = (id, callBack) => {
    dbcon.query('DELETE FROM employee_documents WHERE employee_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,adharExist,panExist,remove}