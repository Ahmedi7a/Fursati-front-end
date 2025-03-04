import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(['']);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConf: '',
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserResponse = await authService.signup(formData);
      props.setUser(newUserResponse.user);
      navigate('/');
    } catch (err) {
      updateMessage(err.message);
    }
  };

  const { username, password, passwordConf } = formData;

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };
  return (
    <main className="container mt-4">
      <h1 className="text-center">Sign Up</h1>
      <p className="text-center text-danger">{message}</p>
      <form onSubmit={handleSubmit} className="mx-auto p-4 border rounded shadow-sm" style={{ maxWidth: "400px" }}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
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
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="password"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
            className="form-control"
            placeholder="Confirm your password"
          />
        </div>
        <div className="d-flex justify-content-between mt-3">
          <button type="submit" className="btn btn-primary" disabled={isFormInvalid()}>
            Sign Up
          </button>
          <Link to="/">
            <button type="button" className="btn btn-secondary">Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );


}


export default SignupForm;


