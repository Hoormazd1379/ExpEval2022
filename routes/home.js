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
    var outputp = [];
    model.results.find({}).toArray().then(results => {
        results.forEach(result => {
            var outp = {
                name : result.name ? result.name : 'Anonymous',
                age : result.age ? result.age : 'NaN',
                isProgrammer : result.programmer,
                total_correct_answers : 0,
                correct_camel_answers : 0,
                correct_kebab_answers : 0,
                total_wrong_answers : 0,
                wrong_camel_answers : 0,
                wrong_kebab_answers : 0,
                camel_average_time : 0,
                kebab_average_time : 0,
                total_average_time : 0
            }
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
                if (
                    answer.question == "1" ||
                    answer.question == "2" || 
                    answer.question == "3" || 
                    answer.question == "10" || 
                    answer.question == "11" || 
                    answer.question == "12" 
                    ) {
                        answer.entered == answer.correct ? outp.correct_camel_answers++ : outp.wrong_camel_answers++;
                        outp.camel_average_time += +answer.time;
                    }
                    if (
                        answer.question == "4" ||
                        answer.question == "5" || 
                        answer.question == "6" || 
                        answer.question == "7" || 
                        answer.question == "8" || 
                        answer.question == "9" 
                        ) {
                            answer.entered == answer.correct ? outp.correct_kebab_answers++ : outp.wrong_kebab_answers++;
                            outp.kebab_average_time += +answer.time;
                        }
                answer.entered == answer.correct ? outp.total_correct_answers++ : outp.total_wrong_answers++;
                outp.total_average_time += +answer.time;
                output.push(out);
            });
            outp.total_average_time = (outp.total_average_time/result.answers.length).toFixed(3);
            outp.camel_average_time = (outp.camel_average_time/(result.answers.length / 2)).toFixed(3);
            outp.kebab_average_time = (outp.kebab_average_time/(result.answers.length / 2)).toFixed(3);
            outputp.push(outp);
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
        var headp = {
            name : 'name',
            age : 'age',
            isProgrammer : 'isProgrammer',
            total_correct_answers : 'total_correct_answers',
            correct_camel_answers : 'correct_camel_answers',
            correct_kebab_answers : 'correct_kebab_answers',
            total_wrong_answers : 'total_wrong_answers',
            wrong_camel_answers : 'wrong_camel_answers',
            wrong_kebab_answers : 'wrong_kebab_answers',
            camel_average_time : 'camel_average_time',
            kebab_average_time : 'kebab_average_time',
            total_average_time : 'total_average_time'
        };
        res.format({
            'text/html': function () {
                res.render("csv",{headers : headers, output : output, headp : headp, outputp : outputp});
            },
            'application/json': function () {
              res.status(201).json({headers : headers, output : output, headp : headp, outputp : outputp});
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
