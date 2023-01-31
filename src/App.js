import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Table from './components/Table.js';
import Chart from './components/Chart.js';
import CSS from './components/CSS.js';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
        <Link to="/CSS">CSS</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
          <Chart />
        </Route>
        <Route path="/CSS">
          <h1>CSS Library</h1>
          <CSS />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
