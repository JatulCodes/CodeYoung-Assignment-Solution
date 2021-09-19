const express = require('express');
const cors = require ('cors');


const router = require ('./Routers/index');
const Sequelize = require ('./connection');

const app = express();


const host ='localhost';
const port = process.env.PORT || 3606;


app.use (cors())
app.options('*',cors());

app.use(express.json());
Sequelize.sync();

app.use('/',router);

app.listen( port, host, ()=>{
    console.log(`server running on ${port} : ${host}`)
});