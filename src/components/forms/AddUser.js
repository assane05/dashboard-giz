import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function AddUser(props) {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.name || !user.username) return;

          props.addUser(user);
          setUser(initialFormState);
        }}
      >
        <div className="mb-3">
          <label>Name</label>
          <input
            text=""
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Username</label>
          <input
            text=""
            name="username"
            className="form-control"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary mb-4">
          Ajouter un etudiant
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
      </form>
    </div>
  );
}
