import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Saved from './pages/SavedArticles';



const App = () =>

<Router>
  <div>
  <Navbar />
  <Jumbotron />

    <Route exact path="/" component={Search} />
    <Route exact path="/saved" component={Saved} />

  </div>
</Router>


export default App;