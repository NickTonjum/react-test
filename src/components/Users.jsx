import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import '../App.css';

class Users extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        <h3>Hello this is the Users page</h3>
        <h4>The following data is pulled from `https://jsonplaceholder.typicode.com/users` using axios GET</h4>
        <ul class="frow column-start">
          {
            this.state.persons
              .map(person =>
                <li key={person.id}>{person.name}</li>
              )
          }
        </ul>
      </div>
    )
  }
};

export default Users;
