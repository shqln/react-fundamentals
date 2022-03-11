// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [isError, setError] = React.useState(false);
  const [firstName, setFirstName ] = React.useState("");

  function handleSubmit(event){
    event.preventDefault(); // prevents page refresh after submit
    console.log("submitted");
    console.dir(event.target);
    onSubmitUsername(event.target.elements.usernameInput.value);
  }

  function handleChange(event){
    let value = event.target.value;
    const isValid = value.toLowerCase() === value;
    setError(isValid ? null : "username must be lower case");
  }

  function handleChangeFirstName(event){
    setFirstName(event.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstNameInput'>First Name:</label>
        <input id="firstNameInput" type="text" value={firstName} onChange={handleChangeFirstName}/>
      </div>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <button type="submit" disabled={isError}>Submit</button>
      <span style={{color : "red"}}>{isError ? "Error: username must be lower case" : "" }</span>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
