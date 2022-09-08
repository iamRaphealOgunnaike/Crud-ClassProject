const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    databass:'CRUDDataBase '
})

app.get('/',(req, res)=>{

    const sqlInsert = "INSERT INTO Movies_Review(movieName, movieReview) VALUES ('inception, 'good movie');"
    db.query(sqlInsert ,(err, result)=>{
        res.send("Hello world");
    });
    
});

app.listen(3002,()=>{
    console.log("running on port 3002");
});