import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import Home from './Home';
import Fortnite from './Components/Fortnite';
import FortniteItemShop from './Components/FortniteItemShop';
import FortniteItemDetail from './Components/FortniteItemDetail';
import FortniteAllItem from './Components/FortniteAllItem';
import FortniteUpcomingItems from './Components/FortniteUpcomingItems';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Fortnite' component={Fortnite} />
          <Route exact path='/Fortnite/Item-Shop' component={FortniteItemShop} />
          <Route path='/Fortnite/Item-Detail/:id' component={FortniteItemDetail} />
          <Route path='/Fortnite/All-Item' component={FortniteAllItem} />
          <Route path='/Fortnite/Upcoming-Items' component={FortniteUpcomingItems} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
