import Appheading from "./components/appHeading";
import ItemList from "./components/itemList";
import WelcomeMessage from "./components/WelcomeMessage";
import ItemContextProvider from "./store/items-store";


function App() {

  return (
    <ItemContextProvider>
      <center className="todo-container">
        <Appheading />
        <ItemList />
        <WelcomeMessage />
      </center>
    </ItemContextProvider>
  );
}

export default App;
