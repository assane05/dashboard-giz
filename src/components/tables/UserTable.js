import React, { useState, useEffect, Fragment } from "react";
import firebase from "../../firebase";
import UserTableRow from "./TableRow";
import "./table.css";

function useTimes(sortBy = "TIME_ASC") {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("times")
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

const UserTable = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const times = useTimes();

  return (
    <div className="content">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            times.map((userValue) => (
              <UserTableRow
                key={userValue.id}
                userValue={userValue}
                users={props.users}
                editRow={props.editRow}
                deleteUser={props.deleteUser}
                editing={props.editing}
                setEditing={props.setEditing}
                currentUser={props.currentUser}
                updateUser={props.updateUser}
              />
            ))
          ) : (
            <tr>
              <td colSpan={3}>Liste Vide</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
