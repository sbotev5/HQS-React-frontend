
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ViewTicketsComponent from './components/ViewTicketsComponent';
import CreateTicketComponent from './components/CreateTicketComponent';
import ModifyTicketComponent from './components/ModifyTicketComponent';

function App() {
  return (
    <div>
      <Router>
      <div className = "container">
    <div className="HQS">
      <Switch>
      <Route path ="/" exact component = {ViewTicketsComponent}></Route>
      <Route path ="/tickets" component = {ViewTicketsComponent}></Route>
      <Route path ="/add-ticket" component = {CreateTicketComponent}></Route>
      <Route path ="/update-ticket/:id" component = {ModifyTicketComponent}></Route>
      <ViewTicketsComponent/>
      </Switch>
    </div>

      </div>
      </Router>
    </div>
  );
}

export default App;
