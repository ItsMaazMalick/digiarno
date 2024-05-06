"use server";

import { sendEmail } from "./helpers/mail";

export async function MailSend(name: string, email: string, message: string) {
  try {
    const res = await sendEmail(name, email, message);
    if (res) {
      return { success: "Email has been sent!" };
    }
    return { error: "Error while sending your email" };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
}
