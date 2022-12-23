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
    var output = [];
    model.results.find({}).toArray().then(results => {
        results.forEach(result => {
            result.answers.forEach(answer => {
                var out = {
                    name : result.name ? result.name : 'Anonymous',
                    age : result.age ? result.age : 'NaN',
                    isProgrammer : result.programmer,
                    question_number : answer.question,
                    entered_answer : answer.entered,
                    correct_answer : answer.correct,
                    isEnteredAnswerCorrect : (answer.entered == answer.correct),
                    time_taken : answer.time
                }
                output.push(out);
            });
        });
        var headers = {
            name : 'name',
            age : 'age',
            isProgrammer : 'isProgrammer',
            question_number : 'question_number',
            entered_answer : 'entered_answer',
            correct_answer : 'correct_answer',
            isEnteredAnswerCorrect : 'isEnteredAnswerCorrect',
            time_taken : 'time_taken'
        };
        res.format({
            'text/html': function () {
                res.render("csv",{headers,output});
            },
            'application/json': function () {
              res.status(201).json({headers,output});
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
