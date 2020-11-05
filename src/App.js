import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headercomponent from './Components/Header'
import Footercomponent from './Components/Footer'
import Bodycomponent from './Components/Body'
import { Link, BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import ContactComponent from './Components/Contact';
import UsersComponent from './Components/Users';
import UserPageComponent from'./Components/UserPage';
import NotFoundPage from './Components/NotFoundPage';
import AboutComponent from './Components/About'
function App() {
  return (
    <section className="App">
      <Headercomponent/>
      <Router>   
          <Switch> 
            <Route exact path="/" component={Bodycomponent} /> 
            <Route exact path="/contact" component={ContactComponent} />
            <Route exact path="/users" component={UsersComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route path="/userpage/:id" component={UserPageComponent} />
            <Route component={NotFoundPage} />
          </Switch>
       </Router> 
      <Footercomponent/>
    </section>
  );
}

export default App;
