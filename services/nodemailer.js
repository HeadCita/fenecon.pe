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
        from: `Cliente: ${req.nombres}, ${req.apellidos}`,
        to: 'leonus96@gmail.com',
        subject: 'Quiero información',
        text: `Cliente: ${req.nombres}, ${req.apellidos}\n Email: ${req.email}\n ${req.mensaje}`
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