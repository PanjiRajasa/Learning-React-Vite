import { useState } from "react";

export default function EditProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Jane");
  const [lastName, setLastName] = useState("Jacobs");

  return (
    <form
    className="formEditProfile"
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label className="labelEditProfile">
        First name:{" "}
        {isEditing ? (
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>

      <label className="labelEditProfile">
        Last name:{" "}
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>

      <button type="submit">{isEditing ? "Save" : "Edit"} Profile</button>
      <p>
        <i>
          Hello, {firstName} {lastName}!
        </i>
      </p>
    </form>
  );
}
