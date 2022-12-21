const express = require('express');
const router = express.Router();
module.exports = router;
 

const { parse } = require('json2csv');
const { model } = require("../model");

const results = require('../model/results');


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
    model.results.insertOne(data).then(ans => {
        res.format({
            'text/html': function () {
              res.redirect("/index.html");
            },
            'application/json': function () {
              res.status(201).json(results.data);
            }
        });
    });
});

router.get("/results", function(req, res) {
    model.results.find({}).toArray().then(results => {
        res.format({
            'text/html': function () {
                res.render("results",{results});
            },
            'application/json': function () {
              res.status(201).json(results);
            }
        });
    });
});

router.get("/results/csv", function(req, res) {
    model.results.find({}).toArray().then(results => {
        res.format({
            'application/json': function () {
                res.status(201).json(parse({results}));
            }
        });
    });
});

router.get("/results/download", function(req, res) {
    model.results.find({}).toArray().then(results => {
        res.format({
            'application/json': function () {
                res.status(201).json({results});
            }
        });
    });
});
