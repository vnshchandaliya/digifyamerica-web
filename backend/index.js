import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const port = process.env.PORT || 5000;

// CORS origin ko conditionally set karein
const allowedOrigins = [
  'http://localhost:3000', // Local frontend
  'https://www.digifyameica.com' // Live frontend
];

app.use(cors({
  origin: (origin, callback) => {
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com", // yahi check karlo apne Hostinger cPanel me
    port: 465,
    secure: true,
    auth: {
        user: "info@jyotfoundation.in",
        pass: "Jyotfoundation@123"
    },
    logger: true,   // debug ke liye
    debug: true     // debug ke liye
});

transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Server is ready to take messages");
  }
});
;



app.post('/send-email', async (req, res) => {
    try {
        const { fname, lname, phone, email, message } = req.body;
        const mailOptions = {
            from: 'info@jyotfoundation.in',
            to: 'info@digifyamerica.com',
            subject: 'Digify America  ',
            text: `First Name: ${fname}\nLast Name: ${lname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
        };
        await transporter.sendMail(mailOptions);
        res.status(200).send('Success: Email sent!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error: Email could not be sent.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});