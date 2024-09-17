import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import FlightDetail from "../components/FlightDetail";

const MyFlights = () => {

    const [flights, setFlights] = useState<Flight[]>([])

    // Fetch user-saved flights from the backend
    useEffect(() => {
        fetch("/api/userflights").then(async res => {
            const data = await res.json()
            setFlights(data)
        })
    }, [])

    return (
        <div>
            <div className="p-5 px-10 flex gap-5 shadow-lg flex-wrap">
                <h2 className="font-bold border-2 border-black/20 text-sm px-5 p-1 rounded">Times</h2>
                <h2 className="font-bold border-2 border-black/20 text-sm px-5 p-1 rounded">Stops</h2>
                <h2 className="font-bold border-2 border-black/20 text-sm px-5 p-1 rounded">Airlines</h2>
                <h2 className="font-bold border-2 border-black/20 text-sm px-5 p-1 rounded">Airports</h2>
                <h2 className="font-bold border-2 border-black/20 text-sm px-5 p-1 rounded">Amentities</h2>
            </div>
            <div className="w-full bg-background min-h-screen flex flex-col p-10 gap-5">
                <h2 className="font-medium flex items-center gap-2">Sort by: <span className="font-bold">Recommended</span><FaChevronDown className="text-xs" /></h2>
                {
                    flights.length <= 0 ? <h1 className="font-bold text-2xl text-black/50 mt-10">No Flights</h1> : flights.map(flight => (
                        <FlightDetail flight={flight} />
                    ))
                }
            </div>
        </div>
    )
}

export default MyFlights;