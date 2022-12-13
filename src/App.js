import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: []
    }
    this.xyz = []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(users=>{
        this.xyz = users;
        console.log(this.xyz);
      })
      // .then(users=>this.setState(()=>{
      //   return {monsters: users}
      // }))

  }

  render() {
    return (
      <div className='App'>
        <CardList  listItems={this.xyz} />
      </div>
    );
  }
}

export default App;