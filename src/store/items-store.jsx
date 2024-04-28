import { createContext } from "react";

export const ItemStore = createContext(
    {
        newitems: [],
        addNewItem: () => { },
        deleteItem: () => { },
    }
);
