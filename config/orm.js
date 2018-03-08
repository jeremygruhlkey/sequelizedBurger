// functions forms for database updating of any item
// should need a "create" and an "update"

var connection = require("../config/connection.js");

// will print the approriate number of 
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  // converts a request object to sql syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    
    create: (table, columns, values, callback) => {
        let queryString = "INSERT INTO " + table + "(" + columns + ") VALUES (" + printQuestionMarks(values.length) + ")";
        connection.query(queryString, values, (err, result) => {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result)
        })
    },

    update: (table, columnsAndValues, condition, callback) => {
        let queryString = "UPDATE " + table + " SET " + objToSql(columnsAndValues) + " WHERE " + condition;
        connection.query(queryString, (err, result) => {
            if(err) {
                throw err;
            }
            callback(result)
        });
    },

    all: (table, callback) => {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            callback(result);
        })
    }
    
}

module.exports = orm;