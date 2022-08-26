const dbcon = require("../../config/mysql_db_config");
/**
 * 
 * @param {*} data 
 * @param {*} callBack 
 */

const findbyempid=(id,callBack)=>{
    dbcon.query('SELECT * FROM work_report WHERE employee_id', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

/**
 * 
 * @param {*} data data.id,data.start_date,data.end_date
 * @param {*} callBack 
 */


const empdurationreport=(data,callBack)=>{
    dbcon.query('SELECT * FROM work_report WHERE employee_id', [data.id,data.start_date,data.end_date], (err, result, fields) => {
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

const add = (data, callBack) => {
    dbcon.query('INSERT INTO work_report(employee_id,report_date,start_time) VALUES (?,?,?)', [data.empid,data.report_date,data.start_time], (err, result, fields) => {
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
    dbcon.query('UPDATE work_report SET submit_time=?,report=?,document_url=?,status=0 WHERE employee_id=? AND report_date=?', [data.submit_time,data.report,data.document,data.empid,data.report_date], (err, result, fields) => {
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

const findbydate = (id, callBack) => {
    dbcon.query('SELECT * FROM work_report WHERE report_date=?', [id], (err, result, fields) => {
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
    dbcon.query('DELETE FROM work_report WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

module.exports={findbyempid,empdurationreport,add,update,findbydate,remove}