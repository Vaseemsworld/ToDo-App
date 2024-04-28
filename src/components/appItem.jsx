import { useContext } from "react";
import styles from "./appItem.module.css";
import { MdDeleteForever } from "react-icons/md";
import { ItemStore } from "../store/items-store";

function Appitem({ itemName, itemDate }) {

    const { deleteItem } = useContext(ItemStore);

    return <div className="container">
        <div className={`row ${styles.myrow}`}>
            <div className="col-6">{itemName}</div>
            <div className="col-4">{itemDate}</div>
            <div className="col-2">
                <button
                    type="button"
                    className={`btn btn-danger ${styles.btn}`}
                    onClick={(event) => { deleteItem(event, itemName) }}>
                    <MdDeleteForever />
                </button
                ></div>
        </div>
    </div>
}

export default Appitem;