//Dependencies
var express = require("express");
var router = express.Router();

var whiskey = require("../models/whiskey.js");

router.get("/", function(req, res){
    whiskey.all(function(data){
        var hbsObject = {
            whiskey: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/whiskey", function(req, res){
    whiskey.create(["name", "tasted"], [req.body.name, req.body.tasted], function(result) {
        res.json({id: result.insertId });
    });
});

router.put("/api/whiskey/:id", function(req,res) {
    var condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    whiskey.update({
        tasted: req.body.tasted
    },
    condition,
    function(result) {
        if (result.changedRows === 0) {
            //throw 404 if no rows were changed
            return res.status(404).end();
        }
        res.status(200).end();
    }
    );
});

module.exports = router;