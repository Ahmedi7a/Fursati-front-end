// src/components/CommentForm/CommentForm.jsx

import { useState, useEffect } from 'react';

import * as postService from '../../services/postService';

const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: '' });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddComment(formData);
    // handleAddComment
    setFormData({ text: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input"></label>
      <textarea
      className="form-control"
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      /> <br />
      <button type="submit" className="btn btn-primary btn-block">SUBMIT COMMENT</button>
    </form>
  );
};

export default CommentForm;