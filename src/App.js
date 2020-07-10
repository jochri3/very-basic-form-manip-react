import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});
  const onInput = e => {
    console.log(`${e.target.name} : ${e.target.value}`);
    const { name, value } = e.target;
    setFormData(ancienneValeur => {
      return { ...ancienneValeur, [name]: value };
    });
  };

  const submit = e => {
    e.preventDefault();
    for (let attr in formData) {
      alert(`${attr.toUpperCase()} : ${formData[attr]}`);
    }
  };
  return (
    <div>
      <h1>Nouvel utilisateur</h1>
      <form onSubmit={submit} onChange={onInput}>
        <input type="text" name="noms" placeholder="Nom complet" />
        <br />
        <input type="text" name="email" placeholder="Adresse mail" />
        <br />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
}

export default App;
