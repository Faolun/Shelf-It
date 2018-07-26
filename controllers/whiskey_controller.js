//Dependencies
var express = require("express");
var router = express.Router();

var whiskey = require("../models/whiskey.js");

router.get("/", function(req, res){
    whiskey.all(function(data){
        var hbsObject = {
            whiskey: data
        };
        //TESTING
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/whiskey", function(req, res){
    whiskey.create(["name"], [req.body.name], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/whiskey/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    whiskey.update(
      {
        tasted: true
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
// //delete router function if needed
// router.delete("/api/whiskey/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     whiskey.delete(condition, function(result) {
//         if (result.affectedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });


module.exports = router;