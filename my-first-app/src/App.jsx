import "./App.css";
import DrinkButton from "./componets/DrinkButtons";



  const App = () => {
    const Greeting = "Welcome to Joni Cafe!";
    const Description = <p>Discover the finest coffee and pastries in town.</p>;
  
    return (
      <div className="">
        <header>
          <h1>{Greeting}</h1>
        </header>
        <p>{Description}</p>
        <DrinkButton/>
      </div>
    );
  };

export default App;
