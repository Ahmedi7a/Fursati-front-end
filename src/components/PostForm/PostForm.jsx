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
    <section className="h-100 bg-light d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-12 col-md-10">
            <div className="card shadow-sm border-0 rounded-3">
              <div className="row g-0">
                <div className="col-xl-6">
                  <img 
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" 
                    alt="Sample" 
                    className="img-fluid rounded-start" 
                    style={{ height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase text-center" style={{ color: '#555' }}>
                      {postId ? "Edit Post" : "New Post"}
                    </h3>
                    <form onSubmit={handleSubmit}>
                      {/* Name and Email */}
                      <div className="row mb-3">
                        <div className="col-12 col-md-6">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input 
                            id="name"
                            type="text" 
                            className="form-control form-control-md border-0 rounded-3 p-3" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            placeholder="Enter your full name."
                            required 
                            style={{ backgroundColor: '#f7f7f7', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
                          />
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="email" className="form-label">Email</label>
                          <input 
                            id="email"
                            type="email" 
                            className="form-control form-control-md border-0 rounded-3 p-3" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            placeholder="Provide a valid email address."
                            required 
                            style={{ backgroundColor: '#f7f7f7', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
                          />
                        </div>
                      </div>
  
                      {/* About */}
                      <div className="mb-3">
                        <label htmlFor="about" className="form-label">About</label>
                        <textarea 
                          id="about"
                          className="form-control form-control-md border-0 rounded-3 p-3" 
                          name="about" 
                          value={formData.about} 
                          onChange={handleChange} 
                          placeholder="Write a short description about yourself."
                          required 
                          rows="3" 
                          style={{ backgroundColor: '#f7f7f7', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
                        ></textarea>
                      </div>
  
                      {/* Role and Education in same row */}
                      <div className="row mb-3">
                        <div className="col-12 col-md-6">
                          <label htmlFor="role" className="form-label">Role</label>
                          <select 
                            id="role"
                            className="form-control form-control-md border-0 rounded-3 p-3" 
                            name="role" 
                            value={formData.role} 
                            onChange={handleChange} 
                            required 
                            style={{ backgroundColor: '#f7f7f7', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
                          >
                            <option>Software Development</option>
                            <option>Networking</option>
                            <option>Security</option>
                            <option>Technician</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="education" className="form-label">Education</label>
                          <select 
                            id="education"
                            className="form-control form-control-md border-0 rounded-3 p-3" 
                            name="education" 
                            value={formData.education} 
                            onChange={handleChange} 
                            required 
                            style={{ backgroundColor: '#f7f7f7', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
                          >
                            <option>High School</option>
                            <option>Diploma Degree</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                            <option>Doctorate (PhD)</option>
                          </select>
                        </div>
                      </div>
  
                      {/* Experience */}
                      <div className="mb-3">
                        <label htmlFor="experience" className="form-label">Experience</label>
                        <textarea 
                          id="experience"
                          className="form-control form-control-md border-0 rounded-3 p-3" 
                          name="experience" 
                          value={formData.experience} 
                          onChange={handleChange} 
                          placeholder="Describe your work experience."
                          required 
                          rows="3" 
                          style={{ backgroundColor: '#f7f7f7', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
                        ></textarea>
                      </div>
  
                      {/* Status and Nationality in same row */}
                      <div className="row mb-3">
                        <div className="col-12 col-md-6">
                          <label htmlFor="status" className="form-label">Status</label>
                          <select 
                            id="status"
                            className="form-control form-control-md border-0 rounded-3 p-3" 
                            name="status" 
                            value={formData.status} 
                            onChange={handleChange} 
                            required 
                            style={{ backgroundColor: '#f7f7f7', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
                          >
                            <option>Employed</option>
                            <option>Unemployed</option>
                          </select>
                        </div>
                        <div className="col-12 col-md-6">
                          <label htmlFor="nationality" className="form-label">Nationality</label>
                          <select 
                            id="nationality"
                            className="form-control form-control-md border-0 rounded-3 p-3" 
                            name="nationality" 
                            value={formData.nationality} 
                            onChange={handleChange} 
                            required 
                            style={{ backgroundColor: '#f7f7f7', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s' }}
                          >
                            <option>Bahraini</option>
                            <option>Foreigner</option>
                          </select>
                        </div>
                      </div>
  
                      <div className="d-flex justify-content-center">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg rounded-3" 
                          style={{ padding: '12px 24px', fontSize: '16px' }}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  

};

export default PostForm;