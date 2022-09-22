import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import '../App.css';

class Comments extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        <h3>Hello this is the Comments page</h3>
        <h4>The following data is pulled from `https://jsonplaceholder.typicode.com/comments` using axios GET</h4>
        <ul class="frow column-start">
          {
            this.state.persons
              .map(person =>
                <li key={person.id} class="frow column-start">
                  <div><span class="weight-bold">Name:</span> {person.name}</div>
                  <div><span class="weight-bold">Email:</span> {person.email}</div>
                  <div><span class="weight-bold">Body:</span> {person.body}</div>
                </li>
              )
          }
        </ul>
      </div>
    )
  }
};

export default Comments;
