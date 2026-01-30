import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddCat({
      name,
      latinName,
      imageURL,
    });

    //RESET
    setName("");
    setLatinName("");
    setImageURL("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name: 
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Latin Name:
          <input
            type="text"
            name="latinName"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>

        <label>
          Image:
          <input
            type="text"
            name="image"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>

        <button type="submit">Add Cat</button>
      </div>
    </form>
  );
}

export default AddCatForm;
