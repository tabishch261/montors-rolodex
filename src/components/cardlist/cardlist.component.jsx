import React from 'react';

import { Card } from '../card/card.component';
import './cardlist.style.css';
export const CardList = props => (
    
    // it helps to return the childen which are nothing but the monsters names and arrange it as a CSS grid 

    // doing thing below our app component dosnt worry about creating that monsters card 
    //The cardlist component is responsible for creating the monsters card 
    // But card list component is not responsible for how these components look, So it only think about rendernign not to how to create them 
    <div className = 'cardlist' >
    
    
        { props.monsters.map(monsters => (
          <Card  key = {monsters.id} monsters = {monsters}/> // Here we are passing monsters indivisually  into the card component 
        ))}

    </div>
);