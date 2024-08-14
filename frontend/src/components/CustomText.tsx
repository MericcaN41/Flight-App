import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

interface CustomTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    reverse?: boolean;
}

const CustomText = ({ reverse, ...props }: CustomTextProps) => {
    return (
        <div
            className={`flex-1 flex items-center gap-2 p-1 px-3 border-2 border-gray-300 relative ${!reverse ? "rounded-l-full" : "rounded-r-full"}`}>
            {
                !reverse ?
                    <FaPlaneDeparture className="text-primary text-2xl" /> :
                    <FaPlaneArrival className="text-primary text-2xl" />
            }
            <input className="flex-1 text-sm outline-none" {...props} />
        </div>
    );
}

export default CustomText;