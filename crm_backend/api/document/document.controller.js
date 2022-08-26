//import all the response message
const { INVALID_REQ_MSG, ERVERERROR, NOTFOUND, UPDATEMSG, PHONEXIST, EMAILEXIST, DATADELETE, DATAADD, DATAINVALID } = require("../../locale/en");
//import all the work report services
const { add, update, find, remove } = require("./document.services");

/********************************
 ********************************
 ********************************/
const AddDocument = (req, res) => {
    //pan_no adhar_no adhar_verified pan_verifed
    data = req.body;
    if (data.pan_no == undefined || data.adhar_no == undefined || data.adhar_verified == undefined || data.pan_verifed == undefined)
        res.status(400).json({ message: "invalid data" });
    else {
        add(data, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else {
                data.id = result.insertId;
                res.status(200).json(data);
            }
        });
    }
}

const UpdateDocument = (req, res) => {
    data = req.body;
    if (data.pan_no == undefined || data.adhar_no == undefined || data.adhar_verified == undefined || data.pan_verifed == undefined || data.id == undefined)
        res.status(400).json({ message: "invalid data" });
    else {
        find(data.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });

            else {
                if (result.length == 0)
                    res.status(400).json({ message: "invalid data" });
                else {
                    update(data, (err, result) => {
                        if (err)
                            res.status(500).json({ message: "internal server error" });
                        else if (result.affectedRows == 0)
                            res.status(400).json({ messgae: "data invalid" });
                        else
                        res.status(200).json({ message: "data updated" });
                    });
                }

            }
        });
    }
}

const FindDocument = (req, res) => {
    if (req.params.id == undefined) {
        res.status(400).json({ message: "invalid data" });
    }
    else {
        find(req.params.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else {
                if (result.length == 0)
                    res.status(400).json({ message: "No data Found" });
                result = result[0];
                res.status(200).json(result);
            }
        });
    }
}

const DeleteDocument = (req, res) => {
    if(req.params.id==undefined)
    res.status(400).json({ message: "invalid data" });
    else{
        remove(req.params.id, (err, result) => {
            if (err)
                res.status(500).json({ message: "internal server error" });
            else if (result.affectedRows == 0)
                res.status(400).json({ messgae: "data invalid" });
            else
            res.status(200).json({ message: "data deleted" });
        });
    }
}


module.exports = { AddDocument, UpdateDocument, FindDocument, DeleteDocument }