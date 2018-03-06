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
};

module.exports = burgerModel;