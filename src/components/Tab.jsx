import { useSnapshot } from "valtio";
import clsx from "clsx";

import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, ...rest }) => {
    const snap = useSnapshot(state);

    const activeStyle = isFilterTab && isActiveTab ? {
        backgroundColor: snap.color, opacity: 0.5
    } : { backgroundColor: "transparent", opacity: 1 }

    return (
        <div key={tab.name} className={clsx("tab-btn", isFilterTab ? "rounded-full glassmorphism" : "rounded-4")} style={activeStyle} {...rest}>
            <img src={tab.icon} alt={tab.name}
                className={clsx(isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain")} />
        </div>
    );
};

export default Tab;
