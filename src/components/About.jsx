import { useState } from 'react';
import '../App.css';
import axios from 'axios';

function About() {
  const [count, setCount] = useState(0);
  return (
    <div className="About">
      <h3>Hello this is the About page</h3>
      <p>Blah Blah Blah</p>
    </div>
  )
};

export default About;
