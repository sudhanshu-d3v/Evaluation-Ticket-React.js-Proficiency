import React, { useState } from "react";
import "./AddItem.css";

const AddItem = ({ addItemToList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const onSubmitHandle = () => {
    if (title.length > 0) {
      const images = [`${image}`];
      const newItem = {
        id: Math.random().toString(),
        title,
        description,
        images,
        price,
      };
      addItemToList(newItem);
      setTitle("");
      setDescription("");
      setImage("");
      setPrice("");
    } else {
      alert("Title cannot be empty");
    }
  };
  return (
    <div className="add-item">
      <label htmlFor="item">Add Item </label>
      <input
        className="item-in"
        type="text"
        placeholder="enter title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <input
        className="item-in"
        type="text"
        placeholder="enter description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        className="item-in"
        type="text"
        placeholder="enter image url"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        className="item-in"
        type="number"
        placeholder="enter price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <button className="add-btn" onClick={onSubmitHandle}>Submit</button>
    </div>
  );
};

export default AddItem;
