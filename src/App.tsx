

import './App.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div >
      <ul>

        <li>
          <Link to="/assignment-a">assignment-a</Link>
        </li>
        <li>
          <Link to="/assignment-b">assignment-b</Link>
        </li>

      </ul>
    </div>
  );
}

export default App;
