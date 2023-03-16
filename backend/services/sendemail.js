const nodemailer = require("nodemailer");

// add send email servis
module.exports = sendMail = async (email, subject, link) => {
  try {
    // add transporter for nodemailer
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "94503d5c72dc76",
        pass: "7ff670a3304fb3",
      },
    });
    
    // send email
    const info = await transporter.sendMail({
      from: "<ouremail@gmail.com>",
      to: email,
      subject: subject,
      html: `<b>${link}</b>`,
    });

    console.log("mail send succesfuly");
  } catch (error) {
    console.log("shitty mail error");
  }
};
