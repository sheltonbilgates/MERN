import express from 'express'
import { postsRoutes } from './routes/postsRoutes.js'

const app = express()

app.use(express.json())

app.use("/api/posts", postsRoutes)

app.listen(4000, "localhost", ()=> console.log("4000"))