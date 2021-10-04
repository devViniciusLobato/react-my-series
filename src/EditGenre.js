import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const EditGenre = ({ match }) => {
  const [name, setName] = useState("");
  const [success, setSeccess] = useState(false);

  useEffect(() => {
    axios.get("/api/genres/" + match.params.id).then((res) => {
      setName(res.data.name);
    });
  }, [match.params.id]);

  const onChange = (event) => {
    setName(event.target.value);
  };

  const save = () => {
    axios
      .put("/api/genres" + match.params.id, {
        name,
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
      <h1>Edit Genres </h1>

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

export default EditGenre;
