import mongoose from "mongoose"
import nodemailer from "nodemailer"

import newslettersSchema from "../models/newsletterSchema.js"

const newsletters = mongoose.model("newsletters", newslettersSchema)

class newslettersService {
    async saveEmail(email) {
        try {
            const newsletter = new newsletters({ email })

            await newsletter.save()
        } catch(error) {
            console.log(`There was an error saving email: ${error}`)
        }
    }

    async findEmails() {
        try {
            return await newsletters.find()
        } catch(error) {
            console.log(`There was an error fetching email: ${error}`)
        }
    }

    async findOneEmail(email) {
        try {
            return await newsletters.findOne({ "email": email })
        } catch(error) {
            console.log(`There was an error fetching email: ${error}`)
        }
    }

    async sendEmail(email) {
        try {
            const transport = nodemailer.createTransport({
                host: "sandbox.smtp.mailtrap.io",
                port: 2525,
                auth: {
                  user: "e45245866a14eb",
                  pass: "2c57594f65a276"
                }
            })

            transport.sendMail({
                from: "Dimitry Alves Mendes <dymealves@gmail.com>",
                to: email,
                subject: "Fique por dentro das novidades!",
                text: "As novidades estão chegando."
              }).then(async () => {
                console.log("Email successfully sent!")
              }).catch(error => {
                console.log(`There was an error sending email: ${error}`)
            })
        } catch(error) {
            console.log(`There was an error sending email: ${error}`)
        }
    }
}

export default new newslettersService