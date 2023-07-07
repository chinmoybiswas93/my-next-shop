import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  console.log(name);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/add-product', {
        name,
        price,
        imageURL,
        description,
        category,
      });
      console.log('New product:', response.data);
      // Reset form fields after successful submission
      setName('');
      setPrice('');
      setImageURL('');
      setDescription('');
      setCategory('');
    } catch (error) {
      console.log('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
      <label className="block mb-2">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input mt-1 block w-full text-black"
        />
      </label>
      <label className="block mb-2">
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-input mt-1 block w-full text-black"
        />
      </label>
      <label className="block mb-2">
        Image URL:
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          className="form-input mt-1 block w-full text-black"
        />
      </label>
      <label className="block mb-2">
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea mt-1 block w-full text-black"
        ></textarea>
      </label>
      <label className="block mb-2">
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-input mt-1 block w-full text-black"
        />
      </label>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
