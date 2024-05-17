import React, { useContext, useRef } from 'react';
import Appitem from "./appItem";
import Appitem0 from "./appItem0";
import { ItemStore } from '../store/items-store';

function ItemList() {
    const itemNameRef = useRef();
    const itemDateRef = useRef();

    const { newItems, addNewItem } = useContext(ItemStore);
    const handleAddButtonClick = (event) => {
        event.preventDefault();
        const itemName = itemNameRef.current.value;
        const itemDate = itemDateRef.current.value;
        if (itemName.trim() !== '' && itemDate.length === 10) {
            const itemExists = newItems.filter((item) => item.itemName === itemName).length > 0;
            if (!itemExists) {
                addNewItem(itemName.toLowerCase(), itemDate);
            } else {
                alert('Item already exists');
            }
            itemNameRef.current.value = '';
            itemDateRef.current.value = '';
        } else {
            alert('Please enter a valid item name and date');
        }
    };

    return (
        <div className="item-container">
            <Appitem0
                itemNameRef={itemNameRef}
                itemDateRef={itemDateRef}
                onAddButton={handleAddButtonClick}
            />

            {newItems.map((item) => (
                <Appitem
                    key={item.itemName}
                    itemName={item.itemName}
                    itemDate={item.itemDate}
                />
            ))}
        </div>
    );
}

export default ItemList;
