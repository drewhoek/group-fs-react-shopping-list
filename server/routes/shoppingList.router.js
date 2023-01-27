const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
  console.log("in GET shopping list");
  const queryText = `SELECT * FROM "shopping_list" ORDER BY "item", "is_purchased";`;

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

router.delete("/:id", (req, res) => {
  pool
    .query(`DELETE FROM "shopping_list" WHERE "id"=$1;`, [req.params.id])
    .then(() => res.sendStatus(204))
    .catch((err) => res.sendStatus(500));
});

// Delete whole list 
router.delete("/", (req, res) => {
  pool
    .query(`DELETE FROM "shopping_list";`)
    .then(() => res.sendStatus(204))
    .catch((err) => res.sendStatus(500));
})

// Mark specific item as purchased
router.put("/:id", (req, res) => {
  pool
    .query(`UPDATE shopping_list SET is_purchased = true WHERE id = $1;`, [req.params.id])
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(500));
})

// Mark all items as not purchased
router.put("/", (req, res) => {
  pool
    .query(`UPDATE shopping_list SET is_purchased = false;`)
    .then(() => res.sendStatus(200))
    .catch((err) => res.sendStatus(500));
})

module.exports = router;
