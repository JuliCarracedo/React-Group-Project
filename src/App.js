import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div id="app-body">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">Under Construction</Route>
          <Route path="/missions">
            <Missions
              missions={missionsList || []}
            />
          </Route>
          <Route path="/profile"><Profile missions={missionsList} /></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
