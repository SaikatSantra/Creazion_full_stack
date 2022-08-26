//import all the response message
const { INVALID_REQ_MSG, ERVERERROR, NOTFOUND, UPDATEMSG, PHONEXIST, EMAILEXIST, DATADELETE, DATAADD, DATAINVALID } = require("../../locale/en");
//import all the work report services
const { add, update, find, adharExist, panExist, remove } = require("./employee_documents.services");

/********************************
 ********************************
 ********************************/
const AddDocument = (req, res) => {

}
const UpdateDocumnt = (req, res) => {

}
const FindDocument = (req, res) => {
    if (req.params.id == undefined)
        res.status(400).json({ message: "invalid data" });
    else {
        find(req.params.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });

            else if (result.length == 0)
                res.status(400).json({ message: "No data Found" });
                
            else
                res.status(200).json({ data: result[0] });

        });
    }
}
const AdharFind = (req, res) => {

}
const PanFind = (req, res) => {

}
const DeleteDocument = (req, res) => {
    if (req.params.id == undefined || isNaN(req.params.id)) {
        res.status(400).json({
            message: "invalid data"
        });
    }
    else {
        remove(req.params.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else if (result.affectedRows == 0)
                res.status(400).json({ message: "invalid request" });
            else
                res.status(200).json({ message: "data deleted" });
        });
    }
}
module.exports = { AddDocument, UpdateDocumnt, FindDocument, AdharFind, PanFind, DeleteDocument }