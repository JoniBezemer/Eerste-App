import "./DrinkButtons.css";

function DrinkButtons({drinkOne, drinkTwo}) {
  return (
    <>
      <header>
        <h2> Would you like {drinkOne} or {drinkTwo}?</h2>
      </header>
      <div className="button-group">
        <button className="button">{drinkOne}</button>
        <button className="button">{drinkTwo}</button>
      </div>
    </>
  );
}

export default DrinkButtons;
