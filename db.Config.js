module.exports={
    HOST: "localhost",
    USER:"root",
    PASSWORD: "CockroachDB@123",
    DB: "translation",
    dialect:"mysql",
    pool:{
        max:25,
        min:0,
        acquire:30000,
        idle:10000
    }
};


// var express = require ('express');
// var mysql =require ('mysql2');
// const app = express()

// var connection = mysql.createConnection({
//     HOST: "localhost",
//         USER:"root",
//         PASSWORD: "HELLWORLD@123",
//         DB: "translation",
//         dialect:"mysql2",
//         pool:{
//             max:25,
//             min:0,
//             acquire:30000,
//             idle:10000
//         }
            
        
// });
// connection.connect(function(err){
//     if(!!err){
//         console.log('err');
//     }else{
//         console.log('connected');
//     }
// });


