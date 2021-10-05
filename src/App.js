import { Route, Switch } from 'react-router';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './components/Missions';

function App() {
  return (
    <div id="app-body">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">rockets</Route>
          <Route path="/missions"><Missions /></Route>
          <Route path="/profile">profile</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
