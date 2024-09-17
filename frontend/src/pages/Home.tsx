import { IoCarSportOutline } from "react-icons/io5";
import Header from "../components/Header";
import { LiaHotelSolid, LiaUmbrellaBeachSolid } from "react-icons/lia";
import { FaPlane } from "react-icons/fa";
import CustomDate from "../components/CustomDate";
import CustomText from "../components/CustomText";
import Flight from "../components/Flight";
import CustomRadio from "../components/CustomRadio";
import { useEffect, useState } from "react";

const Home = () => {

    const [flights, setFlights] = useState<Flight[]>([])
    const [filters, setFilters] = useState({
        to: "",
        startDate: "",
        endDate: "",
    })

    // Sets the filter state above to filter the flights
    const setFilter = (key: string, value: string) => {
        setFilters({ ...filters, [key]: value })
    }

    // Fetch the flights from the backend
    useEffect(() => {
        fetch("/api/flights", { headers: { "Cache-Control": "no-cache" } }).then(async res => {
            const data = await res.json()
            setFlights(data.flights)
        }).catch(err => console.error(err))
    }, [])

    // Fetches and updates the flights based on the filters
    const updateFlights = () => {
        fetch("/api/flights?" + new URLSearchParams({
            route: filters.to,
            fromDateTime: filters.startDate,
            toDateTime: filters.endDate
        }), { headers: { "Cache-Control": "no-cache" },  }).then(async res => {
            const data = await res.json()
            setFlights(data.flights ?? [])
        }).catch(err => console.error(err))
    }

    return (
        <div className="font-noto w-full flex flex-col min-h-screen lg:h-screen bg-background">
            <Header />
            <div className="flex flex-col lg:flex-row gap-10 flex-1 p-5">
                <div className="flex flex-1 flex-col gap-10 ">
                    <div className="w-full p-5 bg-white rounded-2xl ">
                        <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
                            <div className="flex items-center gap-3">
                                <FaPlane />
                                <h1 className="font-black">BOOK YOUR FLIGHT</h1>
                            </div>
                            <div className="flex rounded-full overflow-hidden whitespace-nowrap">
                                <div className="flex-1 bg-primary p-3 px-5">
                                    <span className="text-background font-extrabold text-sm">Round Trip</span>
                                </div>
                                <div className="flex-1 bg-background hover:bg-backgroundHover cursor-pointer p-3 px-5">
                                    <span className="text-primary/70 font-extrabold text-sm">One Way</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5 mt-5">
                            <div className="flex flex-1 gap-2">
                                <CustomText placeholder="AMS" disabled />
                                <CustomText onChange={e => setFilter("to", e.target.value)} reverse placeholder="To" />
                            </div>
                            <div className="flex flex-1 gap-2">
                                <CustomDate onChange={e => setFilter("startDate", new Date(e.target.value).toISOString().slice(0, -1))} placeholder="Start Date" />
                                <CustomDate onChange={e => setFilter("endDate", new Date(e.target.value).toISOString().slice(0, -1))} reverse placeholder="End Date" />
                            </div>
                        </div>
                        <div onClick={updateFlights} className="bg-primary hover:bg-primary/80 transition-colors cursor-pointer rounded-lg p-3 px-4 mt-5 w-fit text-white font-bold text-sm">Show Flights</div>
                    </div>
                    <div className="flex flex-col lg:flex-row flex-1 lg:overflow-hidden basis-0 gap-10">
                        <div className="h-[600px] lg:h-auto lg:flex-1 scroll-hidden overflow-scroll lg:overflow-auto overflow-x-hidden flex flex-col gap-5">
                            {
                                flights.length <= 0 ? <h1 className="font-bold text-2xl text-black flex-1 flex items-center justify-center">No flights found</h1> :
                                    flights.map((flight: Flight, i: number) => <Flight key={i} flight={flight} />)
                            }
                        </div>
                        <div className="lg:w-[300px] scroll-hidden shrink-0 overflow-auto flex flex-col w-full">
                            <h2 className="font-black my-3">Sort by:</h2>
                            <select className="w-full p-2 rounded-lg font-extrabold text-black/50 text-sm outline-none" name="" id="">
                                <option value="">Lowest Price</option>
                                <option value="">Highest Price</option>
                                <option value="">Closest</option>
                            </select>
                            <h2 className="font-black mt-5 mb-3">Arrival Time:</h2>
                            <CustomRadio name="arrival" label="5:00 AM - 11:59 AM" />
                            <CustomRadio name="arrival" label="12:00 PM - 5:59 PM" />
                            <h2 className="font-black mt-5 mb-3">Stops:</h2>
                            <CustomRadio name="stops" label="Nonstop" price="$230" />
                            <CustomRadio name="stops" label="1 Stop" price="$230" />
                            <CustomRadio name="stops" label="2+ Stops" price="$230" />
                            <h2 className="font-black mt-5 mb-3">Airlines Included:</h2>
                            <CustomRadio name="airlines" label="Alitalia" price="$230" />
                            <CustomRadio name="airlines" label="Lufthansa" price="$230" />
                            <CustomRadio name="airlines" label="Air France" price="$230" />
                            <CustomRadio name="airlines" label="Air Italy" price="$230" />
                            <CustomRadio name="airlines" label="Siberia" price="$230" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 gap-5">
                    <div
                        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                        className="flex bg-center bg-cover isolate p-5 overflow-hidden relative rounded-2xl aspect-square">
                        <div className="absolute w-full h-full bg-orange-700/20 -z-50 left-0 top-0"></div>
                        <div className="flex flex-col mt-auto ">
                            <IoCarSportOutline className="text-white text-3xl" />
                            <h2 className="font-semibold text-sxl text-white">CAR RENTALS</h2>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: "url(/hotel.png)" }}
                        className="flex bg-center bg-cover isolate p-5 overflow-hidden relative rounded-2xl aspect-square">
                        <div className="absolute w-full h-full bg-blue-900/50 -z-50 left-0 top-0"></div>
                        <div className="flex flex-col mt-auto ">
                            <LiaHotelSolid className="text-white text-3xl" />
                            <h2 className="font-semibold text-sxl text-white">HOTELS</h2>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: "url(/travel.webp)" }}
                        className="flex bg-center bg-cover isolate p-5 overflow-hidden relative rounded-2xl aspect-square">
                        <div className="flex flex-col mt-auto ">
                            <LiaUmbrellaBeachSolid className="text-white text-3xl" />
                            <h2 className="font-semibold text-sxl text-white">TRAVEL PACKAGES</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
