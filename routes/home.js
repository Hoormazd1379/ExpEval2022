const express = require('express');
const router = express.Router();
module.exports = router;
 


const results = require('../model/results')


router.get("/index.html", (req, res) => {
    res.render("index.ejs");
});

router.get("/", function(req,res) {
    res.redirect("/index.html");
});

router.post("/save", function(req, res) {
    let data = req.body;
    results.data.push(data);
    results.save();
    res.format({
        'text/html': function () {
          res.redirect("/index.html");
        },
        'application/json': function () {
          res.status(201).json(results.data);
        }
    });
});

router.get("/results", function(req, res) {
    res.format({
        'text/html': function () {
            res.render("results",{results : results.data});
        },
        'application/json': function () {
          res.status(201).json(results.data);
        }
    });
});

router.get("/results/download", function(req, res) {
    res.download('model/results.json')
    // res.format({
    //     'application/json': function () {
    //       res.status(201).json(results.data);
    //     }
    // });
});
