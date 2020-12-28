import React  from 'react';
import './App.css';
import { CardList } from './components/cardlist/cardlist.component';
import { SearchBox } from './components/search-box/search-box.component';
// so in JS using class we get access to something called state, state is nothing but some objects

class App extends React.Component { 
  constructor() {
    // super helps to call the parent class component methods
    super(); 
    // this.state is used to set some properties 
    this.state =  {
      monsters: [],
      searchField: ''
    };

    // this is like for every new class method we write we have to bind it, using error function we can save this step below
    //this.handleChange = this.handleChange.bind(this);
  }

// function to fetch all the users from the backend or link, and update our state monter property with this new array of users
  componentDidMount() { // its the life cycle function
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users})); 
  }

  // writing our own methods
  // below is the arrow function that automatically set when e is defines   
  // it autolatecally binds , so if we write class methods we write it with the arrow function 

  handleChange (e){
    this.setState({searchField: e.target.value})
  };


  // SO in big application we break down each part of the apps to the components,  So these components keep getting 
  //rerendered when state is updated using set state
    
  // map () it let us create new array based on our existing array
  
  render(){
    // object destructuring is pulling the values from monsters and search field of object and set them to const 
    const {monsters, searchField} = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;

    // SO when we write some on search field then this funtion rerenders, so new filetermonsters array is generated which is 
    //then pass to the  filtered monster
    const filterMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()));
 
    return(
      // in return there is JSX syntax, in JSX everytime you see {} brackets inside there is Javascript expression
      // When the state changes we rerender the component which is right here and we display that 

      <div className="App">
        <h1> Monsters </h1>
        <SearchBox 
          placeholder = 'Search Monsters'     // here we do need the placeholder and handlerchange beacuse we want to be prop to pass in 
          handlechange =  {this.handleChange}
        />

        <CardList monsters = {filterMonsters}/>
        
      </div>

    );
  }
}

export default App;
