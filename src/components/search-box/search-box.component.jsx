import React from 'react';

//import { Card } from '../card/card.component';

import './search-box.styles.css';

// Unlike a class component a functional components that get some props and return some html
// important to note if you think you dont need internal state and access to life cycle method, Then used a functional component
// beacuse its easier to read, and we make our component reuseable in multiple places

export const SearchBox = ({placeholder, handlechange}) => (
    <input 
    className = 'search'
    type = 'search'
    placeholder = {placeholder}
    onChange = {handlechange}
    />
);