import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const SigninForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);
      console.log(user);
      props.setUser(user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };
  return (
<main className="container mt-4">
      <h1 className="text-center">Sign In</h1>
      <p className="text-center text-danger">{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className="mx-auto p-4 border rounded shadow-sm" style={{ maxWidth: "400px" }}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            autoComplete="off"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <div className="d-flex justify-content-between mt-3">
          <button type="submit" className="btn btn-primary">Sign In</button>
          <Link to="/">
            <button type="button" className="btn btn-secondary">Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );

 
}

export default SigninForm;
