const nodemailer = require("nodemailer")
// const Transporter = require("nodemailer")
const ejs = require("ejs")
const path = require('path')

const sendMail = async (options) => {
    console.log(options,"ed");
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        },
    })

    const { email, subject, template, data,html} = options;
    const templatePath = path.join(__dirname, '../mails', template)

    // const html = await ejs.renderFile(templatePath, data)
    // console.log(html);
    const mailOption = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject,
        html
    };
    console.log(mailOption);
    await transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    })
}
module.exports = sendMail