import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

import connection  from "./database/connection.js"
import { router } from "./routes/router.js"

/* Configurando Express */

const app = express()

/* Configurando Body Parser */

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Configurando Cors */

app.use(cors())

/* Configurando Rotas */

app.use("/", router)

/* Inicializando Servidor */

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}!`))