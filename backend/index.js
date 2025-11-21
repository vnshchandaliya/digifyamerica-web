import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allowed origins (local + live)
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://www.digifyamerica.com",
  "https://digifyamerica.com",
  "https://demodigify.mycreativewebsite.com"
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
  port: 587,
  secure: false, // use STARTTLS instead of SSL
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
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: "New Contact Form Submission",
    text: message,
  });

  res.status(200).json({ success: true, message: "Email sent successfully" });
} catch (error) {
  console.error("❌ Email send error:", error);
  res.status(500).json({ success: false, message: "Server error", error: error.message });
}

});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
