import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const InfoSerie = ({ match }) => {
  const [name, setName] = useState("");
  const [success, setSeccess] = useState(false);

  const [data, setData] = useState({});
  useEffect(() => {
    axios.get("/api/series/" + match.params.id).then((res) => {
      setData(res.data);
    });
  }, [match.params.id]);

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
    <div>
      <header>
        <div className="h-100" style={{ backgroud: "rgba(0,0,0,0.7)" }}></div>
        <div className="row">
          <div className="col-3">Foto</div>
        </div>
      </header>

      <div className="container">
        <h1>New Series</h1>
        <pre>{JSON.stringify(data)}</pre>
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
    </div>
  );
};

export default InfoSerie;
