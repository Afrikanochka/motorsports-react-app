import CardList from "../cardList/CardList";

const Card = ({cardgroups, images}) => {
    return (
        <ul>
        <li className="cardItem container">
            {cardgroups.map(({ id, year, make, fuel, mileage, price}) => (
                <CardList key={id} year={year} make={make} fuel={fuel} mileage={mileage} price={price} />
            ))}
        </li>
        </ul>
    );
}

export default Card;