import React, { useState, useEffect, Fragment } from "react";
import firebase from "../../firebase";
import "./table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function useTimes(sortBy = "TIME_ASC") {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    // unsubscribe callback when done
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      //.orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTimes(newTimes);
      });
    return () => unsubscribe();
  }, [sortBy]);

  return times;
}

const UserTableRow = (props) => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleDeleteClick = (id) => {
    firebase.firestore().collection("times").doc(id).delete();
  };

  const handleUpdateItemClick = (data) => {
    firebase.firestore().collection("times").doc(data.id).set(data);
    props.setEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return props.editing && props.currentUser.id === props.userValue.id ? (
    <Fragment>
      <tr key={props.userValue.id}>
        <td>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <button
            onClick={() => props.setEditing(false)}
            className="btn btn-danger"
          >
            Annuler
          </button>
          <button
            onClick={() => handleUpdateItemClick(user)}
            className="btn btn-success"
          >
            Modifier
          </button>
        </td>
      </tr>
    </Fragment>
  ) : (
    <Fragment>
      <tr key={props.userValue.id}>
        <td>{props.userValue.name}</td>
        <td>{props.userValue.username}</td>
        <td>
          <FontAwesomeIcon
            icon={faEdit}
            className="m-2 la-main"
            onClick={() => {
              props.editRow(props.userValue);
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="m-2 la-main"
            onClick={() => handleDeleteClick(props.userValue.id)}
          />
        </td>
      </tr>
    </Fragment>
  );
};

export default UserTableRow;
