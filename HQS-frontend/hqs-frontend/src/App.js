
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ViewTicketsComponent from './components/ViewTicketsComponent';

function App() {
  return (
    <div>
      <Router>
      <div className = "container">
      <HeaderComponent/>
    <div className="HQS">
      <Switch> httpp://localhost:3000/tickets
      <Route path ="/" component = {ViewTicketsComponent}></Route>
      <Route path ="/" tickets = {ViewTicketsComponent}></Route>
      <ViewTicketsComponent/>
      </Switch>
    </div>
    <FooterComponent/>   
      </div>
      </Router>
    </div>
  );
}

export default App;
