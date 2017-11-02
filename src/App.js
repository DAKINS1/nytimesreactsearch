import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Results from "./pages/Results";
import SavedArticles from "./pages/SavedArticles"

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Jumbotron />
        <Route exact path= "/" component={Search} />
        <Route exact path= "/search" component={Search} />
        <Route exact path= "/results" component={Results} />
        <Route exact path= "/savedArticles" component={SavedArticles} />
    </div>
  </Router>;



export default App;
