import React, { Fragment, useState } from "react";
import AddUser from "../forms/AddUser";
import firebase from "../../firebase";

export default function Dashboard() {
  const userData = [{ id: null, name: "", username: "" }];
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(userData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    firebase
      .firestore()
      .collection("etudiants")
      .add({
        name: user.name,
        username: user.username,
      })
      .then(() => {});
  };

  return (
    <div className="content">
      <div className="row mt-5">
        <div className="row justify-content-center">
          <h2> Liste Etudiants</h2>
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />

          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h2>Modifier</h2>
                <EditUser
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Ajouter un Etudiant</h2>
                <AddUser addUser={addUser} />
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
