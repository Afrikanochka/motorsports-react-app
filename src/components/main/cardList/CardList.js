import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/components/cardList.scss';


const CardList = ({image, year, make, fuel, mileage, price}) => {
    return (
<CardGroup className="cardGroup" >
    <Card className="card">
       <Card.Img variant="top" className="card-img1" />
     <Card.Body>
       <Card.Title className="cardTitle"><span className="year">{year}</span> {make}</Card.Title>
       <Card.Text className="cardText">
       {mileage} | Automatic | {fuel}
       </Card.Text>
       <Card.Text className="cardPrice">
       {price}
       </Card.Text>
     </Card.Body>
       </Card>
       <Card className="card">
       <Card.Img variant="top" className="card-img2" src={image} />
     <Card.Body>
       <Card.Title className="cardTitle"><span className="year">{year}</span> {make}</Card.Title>
       <Card.Text className="cardText">
       {mileage} | Automatic | {fuel}
       </Card.Text>
       <Card.Text className="cardPrice">
       {price}
       </Card.Text>
     </Card.Body>
       </Card>
       <Card className="card">
       <Card.Img variant="top" className="card-img3" src={image} />
     <Card.Body>
       <Card.Title className="cardTitle"><span className="year">{year}</span> {make}</Card.Title>
       <Card.Text className="cardText">
       {mileage} | Automatic | {fuel}
       </Card.Text>
       <Card.Text className="cardPrice">
       {price}
       </Card.Text>
     </Card.Body>
       </Card>
       <Card className="card">
       <Card.Img variant="top" className="card-img4" src={image} />
     <Card.Body>
       <Card.Title className="cardTitle"><span className="year">{year}</span> {make}</Card.Title>
       <Card.Text className="cardText">
       {mileage} | Automatic | {fuel}
       </Card.Text>
       <Card.Text className="cardPrice">
       {price}
       </Card.Text>
     </Card.Body>
       </Card>
</CardGroup>

    );
}

export default CardList;