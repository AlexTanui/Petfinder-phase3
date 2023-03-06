import React, { useState } from "react";

function AddPet({ onAddPet }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newPet = { name, description };
    fetch("https://api.npoint.io/c8558d68d7e62fac90c9/pets/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then((data) => {
        onAddPet(data);
        setName("");
        setDescription("");
      });
  }

  return (
    <form id="addform" onSubmit={handleSubmit}>
      <div> <img src="https://petsaddlife.org/wp-content/uploads/2022/08/Campaign-Banner.jpg" alt="" /> </div>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pet name:  </label>
    <input
        type="text"
       
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input
        type="text"
       
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Insert image link</label>
    <input
        type="link"
        
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
  </div>
  <button type="submit" class="btn btn-primary">Add pet</button>
  
    </form>
  );
}

export default AddPet;
