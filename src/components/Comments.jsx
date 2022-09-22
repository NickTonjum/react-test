import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import '../App.css';
import { Audio } from 'react-loader-spinner';

class Comments extends React.Component {
  state = {
    persons: [],
    loaded: false
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons, loaded: true });
      })
  }

  getData() {
    if (this.state.loaded) {
      return <ul class="frow column-start">
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
      </ul>;
    }
    else {
      return  <div class="frow centered mt-20"><Audio
        height="50"
        width="50"
        radius="9"
        color="white"
        ariaLabel="loading"
      /></div>;
    }
  }

  render() {
    return (
      <div>
        <h3>Hello this is the Comments page</h3>
        <h4>The following data is pulled from `https://jsonplaceholder.typicode.com/comments` using axios GET</h4>
        <div>{this.getData()}</div>
      </div>
    )
  }
};

export default Comments;
