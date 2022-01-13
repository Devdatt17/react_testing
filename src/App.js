import './App.css';
import { useState } from 'react'

function App() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: ""
  })

  const handleName = (event) => {
    setFormValue(values => ({
      ...values,
      name: event.target.value
    }))
  }

  const handleEmail = (event) => {
    setFormValue(values => ({
      ...values,
      email: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Name'
          value={formValue.name}
          onChange={handleName}
        />

        <input
          type="text"
          placeholder='Email'
          value={formValue.email}
          onChange={handleEmail}
        />
      </form>
      <h2>{formValue.name}</h2>
      <h3>{formValue.email}</h3>
    </div>
  );
}

export default App;
