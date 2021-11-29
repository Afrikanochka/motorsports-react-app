import React from 'react';
import CurrentOffers from './currentOffers/CurrentOffers';
import cardgroups from '../../data/cardGroups.json';
import Card from './card/Card';
import Sort from './sort/Sort';
import Subscription from './subscription/Subscription';
import PopularQuestions from './popularQuestions/PopularQuestions';

const Main = () => {
    return (
        <>
        <CurrentOffers />
        <Sort />
        <Card cardgroups={cardgroups} />
        <Subscription />
        <PopularQuestions />
        </>
    );
}

export default Main;