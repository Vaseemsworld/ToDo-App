import { useContext } from "react";
import { ItemStore } from "../store/items-store";

function WelcomeMessage() {
    const contextObj = useContext(ItemStore);
    const appItems = contextObj.newitems;
    return appItems.length === 0 && <p className="welcome"> No Work To Do. Enjoy Your Day 😀</p>
}

export default WelcomeMessage;