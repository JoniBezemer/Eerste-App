const DrinkChoice = ({drink}) => {
    return (
        <>
            <p>Your choice {drink.name}</p>
            <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
        <p>{drink.description}</p>
        </>
    );
 };

export default DrinkChoice;


