const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rachitgoy@gmail.com',
        subject: 'Welcome to Task Manager',
        text: `Hi ${name}, Welcome to Task Manager.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rachitgoy@gmail.com',
        subject: 'Sorry to see you go',
        text: `We're really sad to see you leave us, ${name}. Is there anything we can improve to have made your experience better? Please let us know.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
