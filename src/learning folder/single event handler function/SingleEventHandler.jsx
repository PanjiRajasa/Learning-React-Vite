import { useState } from 'react';

export default function SingleEventHandler() {

    const [person, setPerson] = useState({
        firstName: "Nji",
        lastName: "R.",
        email: "heheheha@proton.me"
    });

    function handleOnChange(e) {
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }

  return (
    <>
      <br/>
      <br/>
      <label>
        First name:
        <input
          name="firstName"
          value={person.firstName}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Last name:
        <input
          name="lastName"
          value={person.lastName}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Email:
        <input
          name="email"
          value={person.email}
          onChange={handleOnChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}
