"use strict";

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'leonus96@gmail.com',
        pass: '73033257'
    }
});

function enviarMail(req, res, next) {
    let mailOptions = {
        from: `Cliente: ${req.body.nombres}, ${req.body.apellidos}`,
        to: 'leonus96@gmail.com',
        subject: 'Quiero información',
        text: `Cliente:   ${req.body.nombres}, ${req.body.apellidos}\nEmail:   ${req.body.email}\n\n${req.body.mensaje}`
    };

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
            console.log(err);
            res.redirect('/contacto');
        } else{
            console.log('Email enviado');
            res.redirect('/contacto');
        }
    });
}

module.exports = enviarMail;