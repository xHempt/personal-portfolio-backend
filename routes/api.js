const router = require('express').Router()
const projectModel = require('../models/projectModel')
const nodemailer = require('nodemailer')

router.get('/getprojects', (req, res) => {
    projectModel.find({ })
        .sort({ _id: -1 })
        .then((data) => res.send(data))
        .catch((err) => console.log(err))
})

router.post('/sendmail', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_FROM,
            pass: process.env.MAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    })
        
    const mailOptions = {
        from: 'portfolio.nowacki@gmail.com',
        to: 'nowacki884@gmail.com',
        subject: req.body.subject,
        html: `<h1>Message sent from: ${req.body.name}</h1><h2>Email: ${req.body.email}</h2><p>Message: ${req.body.content}</p>`
    }

    transporter.sendMail(mailOptions, (err, data) => {
        if(err) {
            console.log('There was an error while trying to send emails', err)
        } else {
            console.log('Email sent')
            res.status(200).send('Success!')
        }
    })
})

module.exports = router