const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");


router.get("/", (req, res) => {

})

router.delete("/:id", (req, res) => {
    pool.query(`DELETE FROM shopping_list WHERE id = $1;`, [req.params.id])
        .then(() => res.sendStatus(204))
        .catch((error) => res.sendStatus(500))
})

module.exports = router;