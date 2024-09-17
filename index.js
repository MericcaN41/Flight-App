import express from "express"
import cors from "cors"
import "./db.js"
import apiRouter from "./routers/apiRouter.js"

const app = express()

app.use(cors())
// Parse incoming JSON data so we can get the data from req.body
app.use(express.json())
// Use the apiRouter for the /api endpoint
app.use("/api", apiRouter)

app.use(express.static("dist"))

// Send index.html file to all routes other then /api so that react-router can handle the routing
app.get("*", (_,res) => {
    res.sendFile("/dist/index.html", {root: "."})
})


app.listen(5500, () => console.log("Server is running on port 5500"))