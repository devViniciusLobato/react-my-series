//irm + Tab
import React from "react";
import Header from "./Header";
import Genres from "./Genres";
import NewGenre from "./NewGenre";
import EditGenre from "./EditGenre";
import Series from "./Series";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewSerie from "./NewSerie";
import InfoSerie from "./InfoSerie";

const Home = () => {
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/genres" component={Genres} />
          <Route path="/genres/new" exact component={NewGenre} />
          <Route path="/genres/:id" component={EditGenre} />
          <Route path="/series" exact component={Series} />
          <Route path="/series/new" exact component={NewSerie} />
          <Route path="/series/:id" exact component={InfoSerie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
