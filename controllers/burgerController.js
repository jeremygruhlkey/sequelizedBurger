// routes, and function CALLS from models/burgers.js

const express = require("express");

const router = express.Router();

var burgerModel = require("../models/burgers.js");

router.post("/api/burgers/:name/:eaten", function(req, res){
    burgerModel.create(["name", "eaten"], [req.params.name, req.params.eaten], function(result){
        res.json({id: result.insertId});
    } )
})

// router.put("/api/burgers/:id", function(req, res){

// }

module.exports = router;