import * as nodemailer from "nodemailer";

export const transportOptions = {
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
}
class NodemailerManager {

    async sendVerifyEmail(email: string, fullName: string, code: string) {
        const transporter = nodemailer.createTransport(transportOptions)
        await transporter.sendMail({
            from: 'Domino App <dominotester4@gmail.com>',
            to: email,
            subject: 'Por favor, validar cuenta',
            text: 'Por favor, validar cuenta',
            html: `
                <h3>¡Hola <b>${fullName}!</b></h3>
                <p></p>
            <p></p> `
        })
    }

    async recoveryPasswordEmail(email: string, fullName: string, code: string) {
        const transporter = nodemailer.createTransport(transportOptions)
        await transporter.sendMail({
            from: 'Domino App <dominotester4@gmail.com>',
            to: email,
            subject: 'Reestablece tu contraseña',
            text: 'Por favor, reestablece tu contraseña',
            html: `
                <h3>¡Hola <b>${fullName}!</b></h3>
                <p></p>
            <p></p> `

        })
    }
}
export const nodeMailerManager = new NodemailerManager()

