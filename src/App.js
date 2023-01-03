import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>this.setState(()=>{
        // console.log(users);
        return {monsters: users}
      }))

  }

  render() {
    return (
      <div className='App'>
        <CardList  listItems={this.state.monsters} />
      </div>
    );
  }
}

export default App;