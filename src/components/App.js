import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateUser from './CreateUser';
import Dashboard from './Dashboard';
import axios from 'axios';
import { browserHistory } from 'react-router';

class App extends Component {
	constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
      rooms: [],
      reservations: 'You currently have no reservations',
    }
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submitUser = this.submitUser.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
  }

  usernameChange(event) {
		this.setState({username: event.target.value})
    console.log(this.state);
  }

  passwordChange(event) {
		this.setState({password: event.target.value})
    console.log(this.state);
  }

  submitUser() {
    axios.post('/user/create/', {
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      browserHistory.push('/dashboard');
    })
  }

  verifyUser() {
    console.log('click!');
    axios.post('/user/validate', {
      username: this.state.username,
      password: this.state.password
    }).then((response) => {
      browserHistory.push('dashboard');
    })
  }

  addRoom(name, capacity) {
    const rooms = this.state.rooms.slice();
    rooms.push({name: name, capacity: capacity});
    this.setState({rooms: rooms})

    axios.post("/rooms", {
      name: name, 
      capacity: capacity
    }).then((response){
      console.log(response.data);
    })
  }

  componentDidMount() {
    axios.get('/rooms')
    .then((response) => {
      this.setState({rooms: response.data});
    })
  }

	render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props, {
          appState: this.state,
          username: this.usernameChange,
          password: this.passwordChange,
          submit: this.submitUser,
          verify: this.verifyUser,
          rooms: this.state.rooms,
          user: this.state.username,
          reservations: this.state.reservations
        })}
      </div>
    )
	}
}

export default App;