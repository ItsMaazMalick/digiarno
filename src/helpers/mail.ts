import { companyTitle } from "@/constants/company";
import nodemailer from "nodemailer";
export async function sendEmail(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: "itsmaazmalick@gmail.com",
    subject: `Email from ${email}`,
    html: `<div>
    <h3>${name}</h3>
    <p style=margin-left:"10px">${message}</p>  
    </div>`,
  };
  const mailResponse = await transporter.sendMail(mailOptions);
  return mailResponse;
}
