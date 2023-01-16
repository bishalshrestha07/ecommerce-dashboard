import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  let [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  const params = useParams();

  useEffect(() => {
    getProductDetails();
  });
  const getProductDetails = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:8000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setBrand(result.brand);
  };

  const updateProduct = async () => {
    console.log(name, category, brand);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "put",
      body: JSON.stringify({
        name: name,
        price: price,
        category: category,
        brand: brand,
      }),
      header: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
  };
  return (
    <div className="product">
      <h1>Update Products</h1>

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        value={price}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Brand"
        onChange={(e) => {
          setBrand(e.target.value);
        }}
        value={brand}
      />

      <button onClick={updateProduct} className="appButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
