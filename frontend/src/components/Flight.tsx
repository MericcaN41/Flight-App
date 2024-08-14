import { FaPlane } from "react-icons/fa";
import { LuPlaneLanding, LuPlaneTakeoff } from "react-icons/lu";
import { convertTo12HourFormat } from "../functions";
import { toast } from "react-toastify";

const Flight = ({ flight }: { flight: Flight }) => {

    const bookFlight = () => {
        console.log(flight)
        fetch("/api/flights", {
            method: "POST",
            body: JSON.stringify({ flight }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res => {
            if (res.status === 200) {
                toast.success("Flight booked successfully")
            } else {
                toast.error("Flight already booked")
            }
        })
    }

    return (
        <div>
            <div className="rounded-2xl rounded-bl-none bg-white p-5">
                <h1 className="font-black mb-5">Milano - Madrid</h1>
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <LuPlaneTakeoff className="text-sm" />
                            <p className="font-black text-xs text-opacity-60">Departure</p>
                        </div>
                        <h1 className="font-black">{convertTo12HourFormat(flight.scheduleTime)}</h1>
                        <p className="font-extrabold text-sm text-opacity-70">Airport: AMS</p>
                    </div>
                    <div className="my-auto h-1 flex-1 bg-black/20 mx-24"></div>
                    <div className="flex flex-col items-center gap-2">
                        <img src={`https://pics.avs.io/200/50/${flight.prefixIATA}.png`} className="w-24" alt="" />
                        <FaPlane className="text-primary text-2xl" />
                        <p className="font-extrabold text-sm text-opacity-70">2h 25m (Nonstop)</p>
                    </div>
                    <div className="my-auto h-1 flex-1 bg-black/20 mx-24"></div>
                    <div className="flex flex-col text-right">
                        <div className="flex justify-end items-center gap-2">
                            <LuPlaneLanding className="text-sm" />
                            <p className="font-black text-xs text-opacity-60">Arrival</p>
                        </div>
                        <h1 className="font-black">9:55 AM</h1>
                        <p className="font-extrabold text-sm text-opacity-70">Airport: {flight.route.destinations[0]}</p>
                    </div>
                </div>
                <div className="flex justify-between mt-8 relative">
                    <div>
                        <h1 className="font-black text-primary">Price: {
                                Math.floor(Math.random() * 1000)
                            }$</h1>
                        <p className="font-extrabold text-sm text-opacity-70">Round Trip</p>
                    </div>
                    <div onClick={_ => bookFlight()} className="bg-primary hover:bg-primary/80 transition-colors cursor-pointer rounded-lg rounded-bl-none rounded-tr-none p-7 px-10 mt-5 w-fit text-white font-bold text-sm absolute -bottom-5 -right-5">Book Flight</div>
                </div>
            </div>
            <div className="bg-backgroundDark rounded-lg p-3 px-6 rounded-t-none w-fit  text-primary underline font-bold text-sm">Check the details</div>
        </div>
    )

}

export default Flight;