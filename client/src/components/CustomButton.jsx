import clsx from "clsx";
import state from "../store";
import { useSnapshot } from 'valtio';



const CustomButton = ({ type, title, customStyles, ...rest }) => {
    const snap = useSnapshot(state)
    const generationStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: snap.color,
                color: "#fff"
            }
        }
    }

    return (
        <button className={clsx("px-2 py-1.5 flex-1 rounded-md", customStyles && customStyles)} style={generationStyle(type)} {...rest}>
            {title}
        </button>
    );
};

export default CustomButton;
