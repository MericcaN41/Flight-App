import { useRef, useState } from "react";
import { IoMdCalendar } from "react-icons/io";

interface CustomDateProps extends React.InputHTMLAttributes<HTMLInputElement> {
    reverse?: boolean;
}

const CustomDate = ({ placeholder, reverse, onChange }: CustomDateProps) => {
    const [value, setValue] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div
            className={`flex-1 flex items-center gap-2 p-1 px-3 border-2 border-gray-300 relative ${!reverse ? "rounded-l-full" : "rounded-r-full"}`} onClick={_ => inputRef.current!.showPicker()}>
            <IoMdCalendar className="text-primary text-2xl" />
            <label className="text-sm font-medium text-black/50">{!value ? placeholder : value}</label>
            <input className="w-full h-full absolute left-0 top-0 opacity-0" type="date" onChange={e => {
                setValue(e.target.value)
                onChange!(e)
            }} ref={inputRef} />
        </div>
    );
}

export default CustomDate;