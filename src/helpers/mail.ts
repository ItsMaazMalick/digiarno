import { companyTitle } from "@/constants/company";
import nodemailer from "nodemailer";
export async function sendEmail(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: process.env.SMTP_EMAIL,
    subject: `Email from ${companyTitle}`,
    html: `<div>
      <h3>${name}</h3>
      <p>${email}</p>
      <p>${message}</p>  
      </div>`,
    replyTo: email, // This will set the sender's email as the reply-to address
  };
  const mailResponse = await transporter.sendMail(mailOptions);
  return mailResponse;
}
