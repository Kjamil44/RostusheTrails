import nodemailer from "nodemailer";
import { RegisteredRunner } from "../prisma/generated/prisma";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export const sendRegistrationEmail = async ({
  to,
  runner,
}: {
  to: string;
  runner: RegisteredRunner;
}) => {
  await transporter.sendMail({
    from: `"Rostushe Trails" <${process.env.GMAIL_USER}>`,
    to,
    subject: "🎉 Registration Confirmed - Rostushe Trails",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0f172a; padding: 20px; text-align: center;">
          <h1 style="color: #fff; margin-top: 10px;">Registration Successful</h1>
        </div>

        <div style="padding: 20px; background-color: #f9fafb;">
          <p>Hi <strong>${runner.fullName}</strong>,</p>
          <p>Thank you for registering for the <strong>${runner.trail}</strong> trail at <em>Rostushe Trails</em>! We're thrilled to have you join us for this amazing mountain adventure. 🏞️</p>

          <hr style="margin: 20px 0;">

          <h3>👤 Registered Runner Info</h3>
          <ul style="line-height: 1.6;">
            <li><strong>Full Name:</strong> ${runner.fullName}</li>
            <li><strong>Trail:</strong> ${runner.trail}</li>
            <li><strong>Age:</strong> ${runner.age}</li>
            <li><strong>Country:</strong> ${runner.country}</li>
            <li><strong>Email:</strong> ${runner.email}</li>
          </ul>

          <hr style="margin: 20px 0;">

          <h3>🏔️ About the Trail</h3>
          <p>
            The <strong>${runner.trail}</strong> trail features breathtaking mountain landscapes, ancient pine forests, and the serene spirit of Rostushe.
            Make sure you’re well-prepared with the right gear, hydration, and spirit of adventure!
          </p>

          <img src="https://via.placeholder.com/540x200?text=Rostushe+Trail+Preview" alt="Trail Photo" style="width: 100%; margin: 20px 0; border-radius: 6px;" />

          <p style="margin-top: 20px;">We’ll be sending out more details about trail logistics, what to bring, and community news soon!</p>

          <p>Best regards,<br/>The Rostushe Trails Team</p>
        </div>

        <div style="background-color: #e2e8f0; text-align: center; padding: 15px; font-size: 12px; color: #475569;">
          <p>Follow us on social media • Unsubscribe anytime</p>
        </div>
      </div>
    `,
    // attachments: [
    //   {
    //     filename: 'logo.jpg',
    //     path: '../src/assets/images/logo.jpg',
    //     cid: 'logo', // matches the cid in the <img> tag
    //   },
    // ],
  });
};

export const sendContactEmail = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  await transporter.sendMail({
    from: `"Rostushe Trails" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER || "info@rostushetrails.com",
    subject: `RostusheTrails: New Contact Form Submission from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
};