const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

//server to email service
const app = express();
app.use(express.json());
app.use("/", router);
app.listen(5000, ()=> console.log('Listening on port 5000'));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);


const sendEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "vdaniela.gv@gmail.com",
        pass:""
    }
});

sendEmail.verify((error)=> {
    if(error){
        console.log(error);
    }else{
        console.log("Email available");
    }
});

router.post("/contact", (req,res)=> {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        subject: "Contact from Portfolio",
        html:`<p>Name: ${name}</p>
        <p>email: ${email}</p>
        <p>phone: ${phone}</p>
        <p> Message: ${message}</p>`,
    }
    sendEmail.sendMail(mail,(error)=>{
        if (error) {
            res.json(error)
        }else{
            res.json({ code:200, status: "Succesfully sent email"})
        }
    });
});