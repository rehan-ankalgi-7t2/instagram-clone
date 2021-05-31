import { React } from 'react';
import Tab from './components/Tab';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import {useStateValue} from './StateProvider';
import Home from './pages/Home'
import Likes from './pages/Likes'
import Profile from './pages/Profile'
import SearchPage from './pages/SearchPage'

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <div className="App">
        <div className="App__header">
          <div className="App__brand">
            <span>Instagram</span>
          </div>
        </div>
      {!user ? (
        <Login/>
      ) : (
        <div className="App__body">
          <Tab />
          <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/searchPage" component={SearchPage}/>
            <Route exact path="/likes" component={Likes}/>
            <Route exact path="/profile" component={Profile}/>
          </Switch>
        </div>
      )}
      </div>
    </Router>
  );
}

export default App;
