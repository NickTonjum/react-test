import { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" class="width-100">
      <Router>
        <div>
          <nav>
            <div class="width-100 frow justify-start">
              <Link class="mx-5" to="/">Home</Link>
              <Link class="mx-5" to="/about">About</Link>
              <Link class="mx-5" to="/users">Users</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/users" element={<Users />}>
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
