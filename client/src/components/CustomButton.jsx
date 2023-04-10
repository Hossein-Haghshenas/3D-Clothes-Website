import clsx from "clsx";
import { useSnapshot } from 'valtio';

import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, ...rest }) => {
    const snap = useSnapshot(state)
    const generationStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if (type === "outline") {
            return {
                borderWidth: "1px",
                borderColor: snap.color,
                color: snap.color
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
