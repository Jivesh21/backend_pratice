import express from 'express'
import corse from 'cors'
import cookieparser from 'cookie-parser'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    crendentials:true,
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extemded:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())
export {app}