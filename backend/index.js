import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const port = 5000;

// Correct CORS configuration for your frontend's port
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'programinghub733@gmail.com',
        pass: 'ezdowgruvfxvrlbq'
    },
    tls: {
        rejectUnauthorized: false
    }
});

// A route for simple connection testing
app.post('/test-connection', (req, res) => {
    console.log('Data received from frontend:', req.body);
    res.status(200).send('Connection successful!');
});

// The main route for sending emails
app.post('/send-email', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const mailOptions = {
            from: 'programinghub733@gmail.com',
            to: 'chadhav329@gmail.com',
            subject: 'Contact Form Message ',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };
        
        await transporter.sendMail(mailOptions);
        
        console.log('Email sent successfully!');
        res.status(200).send('Success: Email sent!');

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error: Email could not be sent.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});