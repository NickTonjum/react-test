import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import About from './components/About';
import Comments from './components/Comments';
import Home from './components/Home';
import logo from './logo.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" class="width-100">
      <Router>
        <div>
          <nav>
            <div class="frow row-start">
              <img src={logo} alt="Logo" class="logo" />
              <div class="frow justify-start my-20">
                <Link class="main-link px-10" to="/">Home</Link>
                <Link class="main-link px-10" to="/about">About</Link>
                <Link class="main-link px-10" to="/Comments">Comments</Link>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/Comments" element={<Comments />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
};

export default App;
