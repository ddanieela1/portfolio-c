const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer =require('nodemailer');

//server to email service
const app = express();
app.use(express.json());
app.use("/", router);
app.listen(5000, ()=> console.log('Listening on port 5000'));
