const nodemailer = require("nodemailer");
const env = require("dotenv");
env.config();

const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for all other ports
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables for sensitive data
    pass: process.env.EMAIL_PASS,
  }, // Show debug output
});
module.exports = mailTransporter;
