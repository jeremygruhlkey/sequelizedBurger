// routes, and function CALLS from models/burgers.js

const express = require("express");

const router = express.Router();

var burgerModel = require("../models/burgers.js");


// router.get("/")
router.post("/api/burgers/", (req, res) => {
    burgerModel.create(["name", "eaten"], [req.body.name, req.body.eaten], (result) => {
        res.json({id: result.insertId});
    } )
})

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    
    console.log("test");
    console.log(condition);
    console.log(req.body)

    burgerModel.update( {eaten: req.body.eaten}, condition, (result) => {
        if (result.changedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

router.get("/", (req, res) => {
    burgerModel.all((data) => {
        console.log(data);
        let allTheBurgers = {
            burgers: data
        };
        console.log(allTheBurgers);
        // res.json(allTheBurgers);
        res.render("index", allTheBurgers);
    })
})

router.get("/api/burgers/", (req, res) => {
    burgerModel.all( (data) => {
        res.json(data)
    })
})

module.exports = router;