const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");


router.get("/", (req, res) => {
    console.log("in GET shopping list");
    const queryText = `SELECT * FROM "shopping_list";`;

    pool
        .query(queryText)
        .then((result) => {
            console.log("successful select from database");
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`error ${queryText}`, error);
            res.sendStatus(505);
        });
});
      

router.post("/", (req, res) => {
    console.log("in post", req.body);
    const item = req.body.item;
    const quantity = req.body.quantity;
    const unit = req.body.unit;

    if (!item || !quantity || !unit) {
        const errorMessage = "error message";
        console.log(errorMessage);
        res.status(400).send(errorMessage);
    }

    const queryText = `INSERT INTO shopping_list (item, quantity, unit)
                        VALUES ($1, $2, $3);`;

    pool
        .query(queryText, [item, quantity, unit])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`error ${queryText}`, error);
            res.sendStatus(500);
        });
});

module.exports = router;