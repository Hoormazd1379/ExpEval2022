var mainsec = document.querySelector('section.container');
var questions = [
    ejs.views_q1(),
    ejs.views_q2(),
    ejs.views_q3(),
    ejs.views_q4(),
    ejs.views_q5(),
    ejs.views_q6()

];

var startTime = Date.now();
var interval;

var result = {
    name : '',
    age : '',
    programmer : '',
    answers : []
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function init() {
    document.querySelector('button#username').addEventListener("click", (e)=>{
        e.preventDefault();
        var username = document.querySelector('input#username').value;
        var age = document.querySelector('input#age').value;
        var programmer = document.querySelector('input#programmer').value;
        result.name = username;
        result.age = age;
        result.programmer = programmer;
        
        start_questions(username);
    });
}

function start_questions(username) {
    shuffle(questions);
    nextQuestion();
}

function nextQuestion() {
    if (questions.length > 0) {
        clearInterval(interval);
        mainsec.innerHTML = questions.pop();
        startTime = Date.now();
        interval = setInterval(function() {
            var elapsedTime = Date.now() - startTime;
            document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
        }, 100);
    } else {
        clearInterval(interval);
        api.save_results(result);
        mainsec.innerHTML = "<h2>That's all! Thank you for participating!</h2>"

    }
}

function ans(choice) {
    let time = document.querySelector('h3#timer').innerHTML;
    let questionnumber = document.querySelector('input#questionnumber').value;
    let correctchoice = document.querySelector('input#correct').value;

    var answer = {
        question : questionnumber,
        entered : choice,
        correct : correctchoice,
        time : time
    }

    result.answers.push(answer);

    nextQuestion();

}