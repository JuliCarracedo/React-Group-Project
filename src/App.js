import { Route, Switch } from 'react-router';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import loadAsync from './redux/missions/Api';
import Profile from './components/Profile';

function App() {
  const dispatch = useDispatch();
  const [download, setDownload] = useState('idle');
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    if (download === 'idle') {
      dispatch(loadAsync());
      setDownload('done');
    }
  });

  const missionsList = useSelector((state) => state.missionsReducer);

  return (
    <div id="app-body">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">rockets</Route>
          <Route path="/missions">
            <Missions
              missions={missionsList || []}
              memberships={memberships}
              setMemberships={setMemberships}
            />
          </Route>
          <Route path="/profile"><Profile memberships={memberships} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
