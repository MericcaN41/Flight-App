import express from "express"
import cors from "cors"
import "./db.js"
import apiRouter from "./routers/apiRouter.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", apiRouter)
app.use(express.static("dist"))

app.get("*", (_,res) => {
    res.sendFile("/dist/index.html", {root: "."})
})


app.listen(5500, () => console.log("Server is running on port 5500"))