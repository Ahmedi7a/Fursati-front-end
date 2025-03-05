import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const SignupForm = (props) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
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
    <section className="vh-100 d-flex align-items-center" style={{ backgroundColor: '#eee' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-12 col-lg-6 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5">Sign Up</p>
                    <p className="text-center text-danger">{message}</p>
                    <form onSubmit={handleSubmit} className="mx-1">
                      <div className="form-group mb-4">
                        <label htmlFor="username" className="form-label">Your Username</label>
                        <input
                          type="text"
                          id="username"
                          value={username}
                          name="username"
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          value={password}
                          name="password"
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label htmlFor="confirm" className="form-label">Repeat your password</label>
                        <input
                          type="password"
                          id="confirm"
                          value={passwordConf}
                          name="passwordConf"
                          onChange={handleChange}
                          className="form-control"
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg" disabled={isFormInvalid()}>
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-12 col-lg-6 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
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

export default SignupForm;
