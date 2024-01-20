import express from "express"
import NewsletterController from "../controllers/NewsletterController.js"

export const router = express.Router()

router.get("/", (req, res) => res.json({ message: "Bem-vindo(a) á Almeida-API" }))

router.get("/subscribe/:email", NewsletterController.subscribe)
router.get("/find", NewsletterController.findEmails)