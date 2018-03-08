// burger specific function builders, that update burgets specifically 
// as opposed to some other menu item
// should need a "create" and an "update"

const orm = require("../config/orm.js");

const burgerModel = {
    create: (columns, values, callback) => {
        orm.create("burgers", columns, values, (result) => {
            console.log("burgers.js result")
            console.log(result)
            callback(result);
        });
    },

    update: (columnsAndValues, condition, callback) => {
        orm.update("burgers", columnsAndValues, condition, (result) => {
            console.log("models")
            console.log(result)
            callback(result)
        });
    },

    all: (callback) => {
        orm.all("burgers", (result) => {
            callback(result);
        })
    }
};

module.exports = burgerModel;