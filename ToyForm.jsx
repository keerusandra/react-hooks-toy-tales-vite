import React, { useState } from "react";

function ToyForm({ addToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    likes: 0,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      ...formData,
      likes: Number(formData.likes),
    };

    addToy(newToy);

    setFormData({ name: "", image: "", likes: 0 });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>

        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
          onChange={handleChange}
        />

        <br />

        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />

        <br />

        <input
          type="number"
          name="likes"
          placeholder="Enter likes..."
          className="input-text"
          value={formData.likes}
          onChange={handleChange}
        />

        <br />

        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
