import React, { useState } from 'react';

function AddCategories() {
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName || !image) {
      setMessage('Please fill all the fields.');
      return;
    }

    console.log('Category Name:', categoryName);
    console.log('Uploaded Image:', image);

    setCategoryName('');
    setImage(null);
    setMessage('Category added successfully!');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Add New Category</h2>
        <div className="form-group">
          <label className="form-label" htmlFor="categoryName">
            Category Name
          </label>
          <input
            className="form-input"
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={handleNameChange}
            placeholder="Enter category name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="categoryImage">
            Upload Image
          </label>
          <input
            className="form-input"
            type="file"
            id="categoryImage"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
        {message && (
          <p className={`form-message ${message.includes('success') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default AddCategories;
