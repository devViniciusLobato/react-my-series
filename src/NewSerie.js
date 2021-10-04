import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const NewSerie = () => {
  const [name, setName] = useState("");
  const [success, setSeccess] = useState(false);

  const onChange = (event) => {
    setName(event.target.value);
  };

  const save = () => {
    axios
      .post("/api/series", {
        name: name,
      })
      .then((res) => {
        setSeccess(true);
      });
  };

  if (success) {
    return <Redirect to="/series" />;
  }

  return (
    <div className="container">
      <h1>New Series</h1>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={onChange}
            className="form-control"
            id="name"
            placeholder="Serie name"
          />
        </div>
        <button type="button" onClick={save} className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewSerie;
