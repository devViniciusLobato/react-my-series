//irm + Tab
import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => {
  return <h1>Home</h1>;
};

const genres = () => {
  return <h1>Genres</h1>;
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
