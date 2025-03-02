// src/components/PoostForm/PostForm.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as postService from '../../services/postService';

const PostForm = (props) => {
  const { postId } = useParams();
  const [formData, setFormData] = useState({
   name: '',
   email: '',
   about: '',
   education: 'High School',
   role: 'Employed',
   nationality: 'Bahraini',
  });

  useEffect(() => {
    const fetchPost= async () => {
      const postData = await postService.show(postId);
      setFormData(postData);
    };
    if (postId) fetchPost();
  }, [postId]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (postId) {
      props.handleUpdatePost(postId, formData);
    } else {
      props.handleAddPost(formData);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>{postId ? 'Edit Post' : 'New Post'}</h1>

        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email-input">email</label>
        <textarea
          required
          type="text"
          name="email"
          id="text-input"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="about-input">About</label>
        <input
          required
          type="text"
          name="about"
          id="about-input"
          value={formData.about}
          onChange={handleChange}
        />
        <label htmlFor="education-input">Education</label>
        <select
          required
          name="education"
          id="education-input"
          value={formData.education}
          onChange={handleChange}
        >
          <option value="High School">High School</option>
          <option value="Deploma Degree">Deploma Degree</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="Doctorate (PhD)">Doctorate (PhD)</option>
        </select>
        <select
          required
         name="role"
         id="role-input"
         value={formData.role}
          onChange={handleChange}
          >
           <option value="Software Development">Software Development</option>
           <option value="Networking">Networking</option>
           <option value="Security">Security</option>
           <option value="Technician">Technician</option>
           </select>
           <select
         required
         name="status"
         id="status-input"
         value={formData.status}
         onChange={handleChange}
        >
        <option value="Employed">Employed</option>
        <option value="Unemployed">Unemployed</option>
         </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};

export default PostForm;