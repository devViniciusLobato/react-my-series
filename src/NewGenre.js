import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const NewGenre = () => {
  const [name, setName] = useState("");
  const [success, setSeccess] = useState(false);

  const onChange = (event) => {
    setName(event.target.value);
  };

  const save = () => {
    axios
      .post("/api/genres", {
        name: name,
      })
      .then((res) => {
        setSeccess(true);
      });
  };

  if (success) {
    return <Redirect to="/genres" />;
  }

  return (
    <div className="container">
      <h1>New Genres </h1>

      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            value={name}
            onChange={onChange}
            className="form-control"
            id="name"
            placeholder="Nome do Gênero"
          />
        </div>
        <button type="button" onClick={save} className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NewGenre;
