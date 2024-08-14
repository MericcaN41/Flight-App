interface CustomRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    price?: string;
}

const CustomRadio = ({ label, price, ...props }: CustomRadioProps) => {
    return (
        <label className="relative flex items-center gap-2 group cursor-pointer my-2">
            <input {...props} type="radio" className="opacity-0 absolute peer" />
            <div className="w-3 h-3 rounded-full border-2 border-primary peer-checked:bg-primary group-hover:bg-primary/20"></div>
            <p className="text-sm font-bold text-black/50">{label}</p>
            {
                price && <p className="text-sm font-bold text-black/50 ml-auto">{price}</p>
            }
        </label>
    )
}

export default CustomRadio;