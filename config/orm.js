// functions forms for database updating of any item
// should need a "create" and an "update"

var connection = require("../config/connection.js");

var orm = {
    create: function(table, columns, values, callback) {
        let queryString = "INSERT INTO " + table + "(" + columns + ") VALUES (?, ?) ";
        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result)
        })
    },
    

}

module.exports = orm;