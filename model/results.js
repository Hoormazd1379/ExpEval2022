const fs = require('fs-extra');
const path = require('path');

let results = [];
let result_id = 0

// let result = {
//     name : '',
//     answers : []
// }

// let answer = {
//     question,
//     entered,
//     correct,
//     time
// }

try {
    results = fs.readJSONSync(path.resolve("./model/results.json"));
    results.forEach(r => {
        if (r.id > result_id) result_id = r.id;
    });
} catch (e) { }

function save(){
    fs.writeJSONSync(path.resolve("./model/results.json"), results);
}

function nextId() {
    return result_id++;
}

module.exports = {
    data: results,
    result_id,
    save
}