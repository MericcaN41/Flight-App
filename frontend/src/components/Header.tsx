import { FaTag } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { RiEarthFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="w-full flex justify-between p-5">
            <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-primary rounded-full relative">
                    <IoIosAirplane className="text-background text-4xl absolute -left-[5px] top-1/2 -translate-y-1/2" />
                </div>
                <h1 className="font-black text-xl">PLANE SCAPE</h1>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-1">
                    <FaTag className="text-primary" />
                    <p className="text-opacity-70 font-bold text-sm">Deals</p>
                </div>
                <div className="flex items-center gap-1">
                    <RiEarthFill className="text-primary text-xl" />
                    <Link to="/myflights" className="text-opacity-70 font-bold text-sm">My Flights</Link>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 object-cover rounded-full" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="" />
                    <p className="text-opacity-70 font-bold text-sm">Joane Smith</p>
                </div>
            </div>
        </div>
    )
}

export default Header;