import "./App.css";
import DrinkButtons from "./componets/DrinkButtons";
import { coffee, tea } from "../utils/data";
import { DrinkChoice } from "./componets/DrinkChoice";
import Button from "./componets/UI/Button";



const App = () => {
  const Greeting = "Welcome to Joni Cafe!";

  const userDrink = tea;

  return (
    <div className="">
      <header>
        <h1>{Greeting}</h1>
      </header>
      <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
      <DrinkChoice drink={userDrink} />
      
      <Button text={tea.name}/>
      <Button text={coffee.name}/>
       </div>
  );
};

export default App;
