const nodemailer = require("nodemailer");

if(!process.env.EMAIL || !process.env.PASSWORD){
  console.warn('Email credentials are not configured. EMAIL and PASSWORD env vars are required for sending mail.')
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

exports.sendMail = async(receiverEmail,subject,body) => {
  if(!process.env.EMAIL || !process.env.PASSWORD){
    throw new Error('Email credentials are not configured on the server')
  }

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: receiverEmail,
    subject: subject,
    html: body
  });
};
