import { createContext, useReducer } from "react";
export const ItemStore = createContext(
    {
        newItems: [],
        addNewItem: () => { },
        deleteItem: () => { },
    }
);

// Action types
const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';

// Reducer function
const reducer = (state, action) => {
    let newStat = state;
    if (action.type === ADD_ITEM) {
        newStat = [...state,
        { itemName: action.payload.itemName, itemDate: action.payload.itemDate }];
    } else if (action.type === DELETE_ITEM) {
        newStat = state.filter(item => item.itemName !== action.payload.itemName)
    }
    return newStat;
};

const ItemContextProvider = ({ children }) => {
    const initialItems = [];

    const [newItems, dispatch] = useReducer(reducer, initialItems);

    const addNewItem = (itemName, itemDate) => {
        dispatch({
            type: ADD_ITEM,
            payload: { itemName, itemDate }
        });
    };

    const deleteItem = (event, itemName) => {
        event.preventDefault();
        dispatch({
            type: DELETE_ITEM,
            payload: { itemName }
        });
    };

    return (
        <ItemStore.Provider value={{
            newItems,
            addNewItem,
            deleteItem
        }}>
            {children}
        </ItemStore.Provider>
    )
}
export default ItemContextProvider;
