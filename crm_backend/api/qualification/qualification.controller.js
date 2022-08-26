const fs = require("fs");
//import all the response message
const { INVALID_REQ_MSG, ERVERERROR, NOTFOUND, UPDATEMSG, PHONEXIST, EMAILEXIST, DATADELETE, DATAADD, DATAINVALID } = require("../../locale/en");
//import all the work report services
const { add, update, find, findall, remove } = require("./qualification.services");

const AddQualification = (req, res) => {
    let data = req.body;
    if (data.employee_id == undefined || data.degree_name == undefined || data.year_of_complete == undefined || data.degree_form == undefined || data.marks == undefined)
        res.json({ message: "invalid data" });
    else if (req.files == undefined)
        res.json({ message: "invalid data" });
    else {

        certificate = req.files.document;
        originalname = certificate.name;
        fileExt = originalname.split('.').at(-1);
        newName = Date.now() + '' + 'certificate' + '.' + fileExt;
        uploadPath = __dirname + '../../../' + '/documents/pdf/certificates/' + newName;
        certificate.mv(uploadPath, function (err) {
            if (err)
                return res.status(500).json({
                    message: "file not uploaded"
                });
            else {
                data.document_url = newName;
                add(data, (err, result) => {
                    if (err) 
                         res.status(500).json({ message: "internal server error" });
                    
                    else {
                        data.id = result.insertId;
                        res.status(200).json(data);
                    }

                });
            }
        });

    }

}


//data.degree_name,data.year_of_complete,data.degree_form,data.marks,data.document_url,data.id

const UpdateQualification = (req, res) => {
    let data = req.body;
    if (data.degree_name == undefined || data.year_of_complete == undefined || data.degree_form == undefined || data.marks == undefined || data.id === undefined)
        res.json({ message: "invalid data" });
    else if (req.files == undefined) {
        update(data, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });

            else if (result.affectedRows)
                res.status(200).json({ message: "data updated" });

            else
                res.status(400).json({ message: "invalid data" });
        });

    }

    else {
        find(data.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else {
                oldfile = __dirname + '../../../' + '/documents/pdf/certificates/' + result[0].document_url;
                if (fs.existsSync(oldfile)) {
                    fs.unlinkSync(oldfile);
                }
                certificate = req.files.document;
                originalname = certificate.name;
                fileExt = originalname.split('.').at(-1);
                newName = Date.now() + '' + 'certificate' + '.' + fileExt;
                uploadPath = __dirname + '../../../' + '/documents/pdf/certificates/' + newName;
                certificate.mv(uploadPath, function (err) {
                    if (err)
                        res.status(500).json({ message: "file not uploaded" });
                    else {
                        data.document_url = newName;
                        update(data, (err, result) => {
                            if (err)
                                res.status(500).json({ message: "internal server error" });
                            else if (result.affectedRows)
                                res.status(200).json({ message: "data updated" });
                            else
                                res.status(400).json({ message: "invalid data" });
                        });
                    }
                });
            }
        });
    }
}


const QualificationById = (req, res) => {
    if (req.params.id == undefined)
        res.status(400).json({ message: "invalid data" });

    else {
        find(req.params.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });

            else if (result.length == 0)
                res.status(400).json({ message: "No data Found" });
            else
                res.status(200).json(result[0]);

        });
    }
}



const EmployeeQualifications = (req, res) => {
    if (req.params.id == undefined) {
        res.status(400).json({
            message: "invalid data"
        });
    }
    else {
        findall(req.params.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });

            else if (result.length == 0)
                res.status(400).json({ message: "No data Found" });
            else
                res.status(200).json(result);
        });
    }
}


const DeleteQualification = (req, res) => {
    if (req.params.id == undefined || isNaN(req.params.id))
        res.status(400).json({ message: "invalid data" });
    else {
        remove(req.params.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else if (result.affectedRows == 0)
                res.status(400).json({ message: "invalid data" });
            else
                res.status(200).json({ message: "data deleted" });
        });
    }
}


module.exports = { AddQualification, UpdateQualification, QualificationById, EmployeeQualifications, DeleteQualification }