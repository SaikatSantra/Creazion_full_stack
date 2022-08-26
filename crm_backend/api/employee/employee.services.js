const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const add = (data, callBack) => {
    dbcon.query('INSERT INTO employee(designation_id, salary_id, emp_document_id, name, dob, email, phone, pass, report_to, status) VALUES (?,?,?,?,?,?,?,?,?,?)', 
    [data.designation_id,data.salary_id,data.emp_document_id,data.name,data.dob,data.email,data.phone,data.pass,data.report_to,1], (err, result, fields) => {
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
    dbcon.query('UPDATE employee SET designation_id=?,salary_id=?,emp_document_id=?,account_no=?,name=?,dob=?,email=?,phone=?,pass=?,img=?,report_to=?,status=? WHERE id=?',
     [data.designation_id,data.salary_id,data.emp_document_id,data.account_no,data.name,data.dob,data.email,data.phone,data.pass,data.img,data.report_to,data.status,data.id], (err, result, fields) => {
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

const find = (id, callBack) => {
    dbcon.query('SELECT * FROM employee WHERE id=?', [id], (err, result, fields) => {
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
    dbcon.query('DELETE FROM employee WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,remove}