import styles from "./appItem.module.css";
import { IoIosAddCircle } from "react-icons/io";

function Appitem0({ itemNameRef, itemDateRef, onAddButton }) {

    return <div className="container">
        <form className={`row ${styles.myrow}`} onSubmit={onAddButton}>
            <div className={`col-6 ${styles.input}`}>
                <input
                    type="text"
                    ref={itemNameRef}
                    placeholder="Enter todo here..."
                />
            </div>
            <div className={`col-4 ${styles.input}`}>
                <input
                    type="date"
                    ref={itemDateRef}
                />
            </div>
            <div className="col-2">
                <button
                    type="submit"
                    className={`btn btn-success ${styles.btn}`}
                >
                    <IoIosAddCircle />
                </button>
            </div>
        </form>
    </div>
}

export default Appitem0;