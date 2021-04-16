
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ViewTicketsComponent from './components/ViewTicketsComponent';
import CreateTicketComponent from './components/CreateTicketComponent';

function App() {
  return (
    <div>
      <Router>
      <div className = "container">
      <HeaderComponent/>
    <div className="HQS">
      <Switch>
      <Route path ="/" exact component = {ViewTicketsComponent}></Route>
      <Route path ="/tickets" component = {ViewTicketsComponent}></Route>
      <Route path ="/add-ticket" component = {CreateTicketComponent}></Route>
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
