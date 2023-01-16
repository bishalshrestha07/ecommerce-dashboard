import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !brand) {
      setError(true);
      return false;
    }

    let user_id = JSON.parse(localStorage.getItem("user"));
    user_id = user_id._id;
    console.log(name, price, category, brand);
    let result = await fetch("http://localhost:8000/add-product", {
      method: "post",
      body: JSON.stringify({
        name: name,
        brand: brand,
        price: price,
        user_id: user_id,
        category: category,
      }),
      headers: {
        "Content-Type": "application/json",

        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.log(result);
  };
  return (
    <div className="product">
      <h1>Add Products</h1>

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      {error && !name && (
        <span className="invalid-input">Enter valid name</span>
      )}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />
      {error && !price && (
        <span className="invalid-input">Enter valid Price</span>
      )}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      {error && !category && (
        <span className="invalid-input">Enter valid category</span>
      )}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Brand"
        onChange={(e) => {
          setBrand(e.target.value);
        }}
        value={brand}
      />
      {error && !brand && (
        <span className="invalid-input">Enter valid brand</span>
      )}
      <button onClick={addProduct} className="appButton">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
