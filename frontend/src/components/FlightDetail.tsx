import { useEffect, useState } from "react";
import { convertTo12HourFormat } from "../functions";
import { FaChevronDown } from "react-icons/fa";

const FlightDetail = ({ flight }: { flight: Flight }) => {

    const [airline, setAirline] = useState<string | null>(null)
    const [details, setDetails] = useState(false)

    useEffect(() => {
        fetch("/api/airline/" + flight.prefixIATA).then(async res => {
            const data = await res.json()
            setAirline(data.publicName)
        })
    }, [])

    return (
        <div className="bg-white shadow flex flex-col items-center md:flex-row md:items-start p-6 gap-5">
            <img src={`https://pics.avs.io/200/50/${flight.prefixIATA}.png`} className="lg:w-24 lg:mt-7 object-contain" alt="" />
            <div className="flex flex-col gap-3 items-center lg:items-start">
                <h1 className="text-2xl leading-4">{convertTo12HourFormat(flight.scheduleDateTime)} - 9:12 AM</h1>
                <div className="flex gap-10 lg:gap-24">
                    <div>
                        <p className="font-bold text-sm">{airline ?? "Airline Not Found"}</p>
                        <p className="font-semibold text-sm text-blue-400 flex items-center gap-2 cursor-pointer" onClick={_ => setDetails(!details)}>
                            Flight Details
                            <FaChevronDown className="text-blue-400 text-sm relative top-px" />
                        </p>
                        {
                            details ? (
                                <div className="flex flex-col gap-5 mt-5">
                                    <div>
                                        <p className="font-bold text-sm">Flight Number</p>
                                        <p className="font-semibold text-sm text-black/50">{flight.flightNumber}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Aircraft</p>
                                        <p className="font-semibold text-sm text-black/50">{flight.aircraftType.iataMain}</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Date</p>
                                        <p className="font-semibold text-sm text-black/50">{new Date(flight.scheduleDateTime).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                    <div>
                        <p className="font-bold text-sm">Nonstop</p>
                        <p className="font-semibold text-sm text-black/50">1h 52m</p>
                    </div>
                    <div>
                        <p className="font-bold text-sm">AMS to {flight.route.destinations[0]}</p>
                        <p className="font-semibold text-sm text-black/50">{flight.flightName}</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-5 lg:flex gap-1 lg:ml-auto h-full">
                <div className="h-full p-3 border-2 border-black/10 lg:min-w-[80px] min-h-[90px] rounded text-center">
                    <h3 className="font-bold  text-xs lg:text-base">156$</h3>
                    <p className="font-semibold  text-xs lg:text-sm text-black/50 mt-5">Main</p>
                </div>
                <div className="h-full p-3 bg-black/10 rounded lg:min-w-[80px] min-h-[90px] text-center">
                </div>
                <div className="h-full p-3 bg-black/10 rounded lg:min-w-[80px] min-h-[90px] text-center">
                </div>
                <div className="h-full p-3 bg-black/10 rounded lg:min-w-[80px] min-h-[90px] text-center">
                </div>
                <div className="h-full p-3 bg-black/10 rounded lg:min-w-[80px] min-h-[90px] text-center">
                </div>
            </div>
        </div>
    )
}

export default FlightDetail;