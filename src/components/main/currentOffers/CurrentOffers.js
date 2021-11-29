import React from 'react';
import '../../../styles/components/currentOffers.scss';

const CurrentOffers = () => {

    return (
        <div className="container offers">
          <h2 className="offersTitle">
          CURRENT OFFERS
          </h2>
          <select name="type" className="offersSelect">
              <option value="year" className="offersOpt">Year</option>
              <option value="2014" className="offersOpt">2014</option>
              <option value="2015" className="offersOpt">2015</option>
              <option value="2016" className="offersOpt">2016</option>
              <option value="2017" className="offersOpt">2017</option>
              <option value="2018" className="offersOpt">2018</option>
              <option value="2019" className="offersOpt">2019</option>
          </select>
          <select name="type" className="offersSelect">
              <option value="make">Make</option>
              <option value="honda">Honda</option>
              <option value="kia">Kia</option>
              <option value="toyota">Toyota</option>
              <option value="volkswagen"> Volkswagen</option>
              <option value="lexus">Lexus</option>
              <option value="hyundai">Hyundai</option>
              <option value="mercedes-benz">Mercedes-Benz</option>
          </select>
          <select name="type" className="offersSelect">
              <option value="model">Model</option>
              <option value="tiguan">Tiguan</option>
              <option value="highlander">Highlander</option>
              <option value="luxury">Luxury</option>
              <option value="venza">Venza</option>
              <option value="elantra">Elantra</option>
              <option value="f-sport">F-Sport</option>
              <option value="rio">Rio</option>
          </select>
          <select name="type" className="offersSelect">
              <option value="trim">Trim</option>
              <option value="automatic">Automatic</option>
              <option value="mechanics">Mechanics</option>
          </select>
          <select name="type" className="offersSelect">
              <option value="mileage">Mileage</option>
              <option value="to20">to 20,000</option>
              <option value="to40">to 40,000</option>
              <option value="to60">to 60,000</option>
              <option value="to80">to 80,000</option>
              <option value="to100">to 100,000</option>
              <option value="to120">to 120,000</option>
          </select>
          <button type="button" className="btnOffers">40 cars</button>
         
        </div>
    );
}

export default CurrentOffers;