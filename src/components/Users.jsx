import { useState } from 'react';
import '../App.css';

function Users() {
  const [count, setCount] = useState(0)

  return (
    <div className="Users">
      <h3>Hello this is the Users page</h3>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  )
};

export default Users;
