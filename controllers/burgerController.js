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
    
    console.log("test");
    console.log(condition);
    console.log(req.body)

    db.Burger.update(
        {eaten: 1},
            {
                fields: ["eaten"],
                where: {id: id}
            }).then((dbBurger) => {
                res.json(dbBurger);
            })
    })
    // burgerModel.update( {eaten: req.body.eaten}, condition, (result) => {
    //     if (result.changedRows === 0){
    //         return res.status(404).end();
    //     }
    //     res.status(200).end();
    // })


router.get("/", (req, res) => {
    db.Burger.findAll({}).then((dbBurger) => {
        console.log(dbBurger);
        
        res.render("index", dbBurger);
    })
})

router.get("/api/burgers/", (req, res) => {
    db.Burger.findAll( (dbBurger) => {
        res.json(dbBurger)
    })
})

module.exports = router;