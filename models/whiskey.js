// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var whiskey = {
  all: function (cb) {
    orm.all("whiskey", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function (cols, vals, cb) {
    orm.create("whiskey", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("whiskey", objColVals, condition, function (res) {
      cb(res);
    });
    // },
    //  //delete function if needed
    //   delete: function(condition, cb) {
    //   orm.delete("burgers", condition, function(res) {
    //       cb(res);
    //   });
  }
};

module.exports = whiskey;