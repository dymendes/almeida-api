import NewsletterService from "../services/NewsletterService.js"

class NewsletterController {
    async subscribe(req, res) {
        const email = req.params.email

        const response = await NewsletterService.findOneEmail(email)

        if(response !== null) return res.json({ message: "E-mail já inscrito" })

        await NewsletterService.saveEmail(email)

        await NewsletterService.sendEmail(email)

        res.json({ message: "E-mail inscrito com sucesso" })
    }

    async findEmails(req, res) {
        const emails = await NewsletterService.findEmails()

        res.json(emails)
    }
}

export default new NewsletterController