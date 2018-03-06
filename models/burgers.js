// burger specific function builders, that update burgets specifically 
// as opposed to some other menu item
// should need a "create" and an "update"

const orm = require("../config/orm.js");

const burgerModel = {
    create: function(columns, values, callback) {
        orm.create("burgers", columns, values, function(result){
            console.log("burgers.js result")
            console.log(result)
            callback(result);
        });
    },

    update: function(columnsAndValues, condition, callback) {
        orm.update("burgers", columnsAndValues, condition, function(result){
            console.log("modles")
            console.log(result)
            callback(result)
        });
    },

    all: function(callback){
        orm.all("burgers", function(result){
            callback(result);
        })
    }
};

module.exports = burgerModel;