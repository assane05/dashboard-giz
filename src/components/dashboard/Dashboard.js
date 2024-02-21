import React, { useState, Fragment } from "react";
import AddUser from "../forms/AddUser";
import EditUser from "../forms/EditUser";
import UserTable from "../tables/UserTable";
import firebase from "../../firebase";

export default function Dashboard() {
  const usersData = [{ id: null, name: "", username: "" }];
  const initialFormState = { id: null, name: "", username: "" };

  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    firebase
      .firestore()
      .collection("times")
      .add({
        name: user.name,
        username: user.username,
      })
      .then(() => {});
  };

  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setEditing(false);
    firebase
      .firestore()
      .collection("times")
      .doc(updatedUser.id)
      .set(updatedUser);
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
    //console.log("editRow", user);
  };

  return (
    <div className="content">
      <div className="row mt-5">
        <div className="row justify-content-center ">
          <div className="">
            <h2>Liste Etudiants</h2>
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
                  <h2>Ajouter un etudiant</h2>
                  <AddUser addUser={addUser} />
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
