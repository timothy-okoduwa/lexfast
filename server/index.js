const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 2000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('http://localhost:2000/server/index', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'timmyleeokoduwa7@gmail.com',
            pass: 'T8m0thy0k0duwa',
        },
    });

    const mailOptions = {
        from: email,
        to: 'timmyleeokoduwa7@gmail.com',
        subject: `New message from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log(`Email sent: ${info.response}`);
            res.send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
