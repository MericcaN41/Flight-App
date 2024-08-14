import express from "express"
import Flight from "../models/Flight.js"


const apiRouter = express.Router()

apiRouter.get("/flights", async (req, res) => {
    const searchparams = req.query

    Object.keys(searchparams).forEach(key => {
        if (searchparams[key] === "") {
            delete searchparams[key]
        }
    })

    const resp = await fetch("https://api.schiphol.nl/public-flights/flights?" + new URLSearchParams({
        includedelays: "false",
        page: "0",
        sort: "-scheduleTime",
        flightDirection: "D",
        ...searchparams
    }), {
        headers: {
            "app_id": process.env.APP_ID,
            "app_key": process.env.APP_KEY,
            "ResourceVersion": "v4"
        }
    })
    try {
        const data = await resp.json()
        res.json(data)
    } catch (e) {
        console.log(e)
        res.status(400).json({ message: "Error fetching data" })
    }
})

apiRouter.get("/airline/:airlineCode", async (req, res) => {
    const airlineCode = req.params.airlineCode

    const resp = await fetch("https://api.schiphol.nl/public-flights/airlines/" + airlineCode, {
        headers: {
            "app_id": process.env.APP_ID,
            "app_key": process.env.APP_KEY,
            "ResourceVersion": "v4"
        }
    })
    try {
        const data = await resp.json()
        res.json(data)
    } catch (e) {
        console.log(e)
        res.status(400).json({ message: "Error fetching data" })
    }
})

apiRouter.get("/userflights", async (req, res) => {
    const flights = await Flight.find()
    res.json(flights)
})

apiRouter.post("/flights", async (req, res) => {
    const flight = req.body.flight

    const foundFlight = await Flight.findOne({ id: flight.id })
    if (foundFlight) {
        res.status(400).json({ message: "Flight already exists" })
        return
    }

    const newFlight = new Flight(flight)
    await newFlight.save()
    res.status(200).json(newFlight)
})

export default apiRouter;