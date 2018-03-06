// routes, and function CALLS from models/burgers.js

const express = require("express");

const router = express.Router();

var burgerModel = require("../models/burgers.js");


// router.get("/")
router.post("/api/burgers/", function(req, res){
    burgerModel.create(["name", "eaten"], [req.body.name, req.body.eaten], function(result){
        res.json({id: result.insertId});
    } )
})

router.put("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;
    console.log(condition);
    console.log(req.body)

    burgerModel.update( {eaten: req.body.eaten}, condition, function(result){
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

router.get("/", function(req, res){
    burgerModel.all(function(data){
        console.log(data);
        let allTheBurgers = {
            burgers: data
        };
        console.log(allTheBurgers);
        // res.json(allTheBurgers);
        res.render("index", allTheBurgers);
    })
})


module.exports = router;