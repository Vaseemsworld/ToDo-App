import { useState } from "react";
import Appheading from "./components/appHeading";
import ItemList from "./components/itemList";
import WelcomeMessage from "./components/WelcomeMessage";
import { ItemStore } from "./store/items-store";


function App() {
  const initialItems = [
    {
      itemName: 'shopping',
      itemDate: '2024-3-4',
    }
  ];

  const [newitems, setNewitems] = useState(initialItems);

  const addNewItem = (itemName, itemDate) => {
    const newItem = { itemName, itemDate };
    setNewitems([...newitems, newItem]);
  };

  const deleteItem = (event, itemname) => {
    event.preventDefault();
    const newItemsCopy = [...newitems].filter(item => item.itemName !== itemname);
    setNewitems(newItemsCopy);
  };

  return (
    <ItemStore.Provider value={{
      newitems,
      addNewItem,
      deleteItem,
    }}>
      <center className="todo-container">
        <Appheading />
        <ItemList />
        <WelcomeMessage />
      </center>
    </ItemStore.Provider >
  );
}

export default App;
