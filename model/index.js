const mongodb = require('mongodb');


// const mongodb_uri = 'mongodb://127.0.0.1:27017/';


const mongodb_uri = 'mongodb+srv://dbExpEval:dbExpEval@clustersocial.xnq4d.gcp.mongodb.net/test';


const client = new mongodb.MongoClient(mongodb_uri);


const db_name = 'exp-eval';


const collection_names = ['results2023'];


const model = {};

console.log("Connecting to mongodb server");

client
    .connect()
    .then(client => {
        console.log("Connected to mongodb server");


        model.db = client.db(db_name);
        collection_names.forEach(c=>{

            model[c] = model.db.collection(c);
        })


    })
    .catch(err => console.error(err));


exports.model = model;