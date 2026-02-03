import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "mail.adlifesoy.co.za", // your mail server
  port: 465,
  secure: true,
  auth: {
    user: "customercare@adlifesoy.co.za",
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Website Contact" <customercare@adlifesoy.co.za>`,
      replyTo: email,
      to: "customercare@adlifesoy.co.za",
      subject: "New Contact Form Message",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
