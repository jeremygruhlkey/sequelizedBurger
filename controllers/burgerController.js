// routes, and function CALLS from models/burgers.js

const express = require("express");

const router = express.Router();

var db = require("../models");

router.post("/api/burgers/", (req, res) => {
    db.Burger.create({
        name: req.body.name,
        eaten: req.body.eaten,
    }).then((dbBurger) => {
        res.json(dbBurger);
    }).catch((error) => {
        console.log(error);
        res.send(404).send("Error")
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    db.Burger.update(
        {eaten: 1},
            {
                fields: ["eaten"],
                where: {id: req.params.id}
            }).then((dbBurger) => {
                res.json(dbBurger);
            })
    })


router.get("/", (req, res) => {
    db.Burger.findAll({}).then((dbBurger) => {

        let allTheBurgers = {
            burgers: dbBurger
        };
        
        res.render("index", allTheBurgers);
    })
})

router.get("/api/burgers/", (req, res) => {
    db.Burger.findAll({}).then( (dbBurger) => {
        res.json(dbBurger)
    })
})

module.exports = router;