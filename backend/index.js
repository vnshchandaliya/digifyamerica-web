import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allowed origins (local + live)
const allowedOrigins = [
  "http://localhost:3000",        // Local frontend
  process.env.FRONTEND_URL        // Live frontend (from .env)
];

// ✅ Enable CORS with OPTIONS support
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// ✅ Handle preflight OPTIONS request
app.options("*", cors());

app.use(express.json());

// ✅ Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to take messages");
  }
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// ✅ Send email route
app.post("/send-email", async (req, res) => {
  try {
    const { fname, lname, phone, email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL || "info@digifyamerica.com",
      subject: "Digify America Contact Form",
      text: `First Name: ${fname}\nLast Name: ${lname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, msg: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, msg: "❌ Email could not be sent." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
