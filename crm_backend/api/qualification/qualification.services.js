const dbcon = require("../../config/mysql_db_config");


const add = (data, callBack) => {
    dbcon.query('INSERT INTO qualification(employee_id,degree_name,year_of_complete,degree_form,marks,document_url) VALUES (?,?,?,?,?,?)',
     [data.employee_id,data.degree_name,data.year_of_complete,data.degree_form,data.marks,data.document_url], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}


//update qualification information by id

const update = (data, callBack) => {
    if(data.document_url){
        dbcon.query('UPDATE qualification SET degree_name=?,year_of_complete=?,degree_form=?,marks=?,document_url=? WHERE id=?',[data.degree_name,data.year_of_complete,data.degree_form,data.marks,data.document_url,data.id], (err, result, fields) => {
            if(err)
            return callBack(err);
            return callBack(null,result);
        });
    }
    else{
        dbcon.query('UPDATE qualification SET degree_name=?,year_of_complete=?,degree_form=?,marks=? WHERE id=?',[data.degree_name,data.year_of_complete,data.degree_form,data.marks,data.id], (err, result, fields) => {
            if(err)
            return callBack(err);
            return callBack(null,result);
        });
    }
    
}


//get signle qualification record
const find = (id, callBack) => {
    dbcon.query('SELECT * FROM qualification WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}

//a signle employee all qualification 
const findall = (id, callBack) => {
    dbcon.query('SELECT * FROM qualification WHERE employee_id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}



//remove by qualification id
const remove = (id, callBack) => {
    dbcon.query('DELETE FROM qualification WHERE id=?', [id], (err, result, fields) => {
        if(err)
        return callBack(err);
        return callBack(null,result);
    });
}
module.exports={add,update,find,findall,remove}