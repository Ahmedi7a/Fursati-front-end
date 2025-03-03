import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main>
      {/* Hero Section */}
      <div className="hero bg-light pt-7">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <div className="image-container mb-5 px-4 text-center">
                <img
                  src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  alt="Blog Image"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6 order-md-1">
              <div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5">
                <h1 className="display-3 fw-bold text-dark">Welcome to Blog Mastery</h1>
                <p className="lead text-dark">
                  Are you ready to take your blogging journey to new heights? Blog Mastery is your ultimate guide to creating and managing a successful blog that captivates your audience and drives engagement.
                </p>
                <div className="form-container text-center">
                  <form>
                    <div className="my-4"></div>
                    <div className="d-grid">
                      <Link to="/signup">
                        <button
                          className="btn btn-lg text-white"
                          style={{ background: 'linear-gradient(135deg, #2C3E50, #4CA1AF)', border: 'none' }}
                        >
                          Register now
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG for decoration */}
      <svg
        className="frame-decoration"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 192.275"
      >
        <defs>
          <style>{`.cls-1 { fill: url(#grad1); }`}</style>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2C3E50', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#4CA1AF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <title>frame-decoration</title>
        <path
          className="cls-1"
          d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
          transform="translate(0 -158.755)"
        />
      </svg>

      {/* Course Summary Section */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold">Course Summary</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-5 shadow-lg rounded">
              <ul className="list-unstyled">
                <li className="border-bottom pb-4">
                  <h5 className="fw-bold">1. Comprehensive Training</h5>
                  <p className="text-muted">
                    Our courses provide comprehensive training in a wide range of topics. From beginner-level fundamentals to advanced concepts, we offer in-depth content to cater to learners of all levels.
                  </p>
                </li>
                <li className="border-bottom pb-4 pt-4">
                  <h5 className="fw-bold">2. Expert Instructors</h5>
                  <p className="text-muted">
                    Learn from industry experts who bring years of experience and expertise to the table. Our instructors are passionate about sharing their knowledge and helping you succeed.
                  </p>
                </li>
                <li className="pt-4">
                  <h5 className="fw-bold">3. Practical Application</h5>
                  <p className="text-muted">
                    We believe in practical learning that goes beyond theory. Our courses focus on real-world application, equipping you with the skills and knowledge needed to excel in your field.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mt-5">
        <div className="row gy-4">
          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Kenny Smith"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "This ebook completely transformed my blogging journey. The practical strategies and valuable insights helped me take my blog to new heights. I highly recommend it!"
            </p>
            <p className="fw-bold">Kenny Smith - Portland, ME</p>
          </div>

          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Laurie Mitchell"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "I'm so grateful for this ebook! It provided me with the guidance and inspiration I needed to create engaging content and build a loyal readership. It's a game-changer!"
            </p>
            <p className="fw-bold">Laurie Mitchell - Miami, FL</p>
          </div>

          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/31.jpg"
              alt="Henry White"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "I can't recommend this ebook enough. It's a treasure of blogging wisdom. It helped me unlock my creativity, connect with my audience, and achieve remarkable results."
            </p>
            <p className="fw-bold">Henry White - Boston, MA</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
