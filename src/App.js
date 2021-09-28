//irm + Tab
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Genres from "./Genres";
import NewGenre from "./NewGenre";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

const Home = () => {
  return <h1>Home</h1>;
};

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/api").then((res) => {
      setData(res.data);
    });
  });

  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/genres/new" exact component={NewGenre} />
        <Route path="/api/genres" component={Genres} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App;
