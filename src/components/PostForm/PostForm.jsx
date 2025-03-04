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
   role: 'Software Development',
   experience:'',
   status:'Employed',
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
    console.log(evt)
    console.log(formData)
    if (postId) {
      props.handleUpdatePost(postId, formData);
    } else {
      props.handleAddPost(formData);
    }
  };

  return (
    <main
    className="d-flex justify-content-center align-items-center vh-100 mt-5" // Added mt-5 for spacing
    style={{ backgroundColor: "#f8f9fa" }}
  >
    <div
      className="card shadow-lg p-4"
      style={{ width: "50%", borderRadius: "15px" }}
    >
      <h1 className="mb-4 text-center text-primary">{postId ? "Edit Post" : "New Post"}</h1>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group mb-3">
          <label htmlFor="name-input" className="fw-bold">Name</label>
          <input
            required
            type="text"
            className="form-control rounded-3"
            name="name"
            id="name-input"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
  
        {/* Email */}
        <div className="form-group mb-3">
          <label htmlFor="email-input" className="fw-bold">Email</label>
          <input
            required
            type="email"
            className="form-control rounded-3"
            name="email"
            id="email-input"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>
  
        {/* About */}
        <div className="form-group mb-3">
          <label htmlFor="about-input" className="fw-bold">About</label>
          <textarea
            required
            className="form-control rounded-3"
            name="about"
            id="about-input"
            value={formData.about}
            onChange={handleChange}
            rows="3"
            placeholder="Tell us about yourself"
          />
        </div>
  
        {/* Education */}
        <div className="form-group mb-3">
          <label htmlFor="education-input" className="fw-bold">Education</label>
          <select
            required
            className="form-control rounded-3"
            name="education"
            id="education-input"
            value={formData.education}
            onChange={handleChange}
          >
            <option value="High School">High School</option>
            <option value="Diploma Degree">Diploma Degree</option>
            <option value="Bachelor's Degree">Bachelor's Degree</option>
            <option value="Master's Degree">Master's Degree</option>
            <option value="Doctorate (PhD)">Doctorate (PhD)</option>
          </select>
        </div>
  
        {/* Role */}
        <div className="form-group mb-3">
          <label htmlFor="role-input" className="fw-bold">Role</label>
          <select
            required
            className="form-control rounded-3"
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
        </div>
  
        {/* Experience */}
        <div className="form-group mb-3">
          <label htmlFor="experience-input" className="fw-bold">Experience</label>
          <textarea
            required
            className="form-control rounded-3"
            name="experience"
            id="experience-input"
            value={formData.experience}
            onChange={handleChange}
            rows="5"
            placeholder="Describe your experience in detail"
          />
        </div>
  
        {/* Status */}
        <div className="form-group mb-3">
          <label htmlFor="status-input" className="fw-bold">Status</label>
          <select
            required
            className="form-control rounded-3"
            name="status"
            id="status-input"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>
  
        {/* Nationality */}
        <div className="form-group mb-3">
          <label htmlFor="nationality-input" className="fw-bold">Nationality</label>
          <select
            required
            className="form-control rounded-3"
            name="nationality"
            id="nationality-input"
            value={formData.nationality}
            onChange={handleChange}
          >
            <option value="Bahraini">Bahraini</option>
            <option value="Foreigner">Foreigner</option>
          </select>
        </div>
  
        {/* Submit Button */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mt-3 w-50 fw-bold rounded-3 shadow-sm">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  </main>
  
  );
};

export default PostForm;