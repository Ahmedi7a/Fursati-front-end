import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main>
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
                <h1 className="display-3 fw-bold text-dark">Welcome to Fursati</h1>
                <p className="lead text-dark">
                  Are you ready to take the next step in your career? Fursati is your gateway to landing the job you deserve. Connect with top employers, enhance your skills, and showcase your talent like never before!
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

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="fw-bold">Why Choose Fursati?</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="bg-white p-5 shadow-lg rounded">
              <ul className="list-unstyled">
                <li className="border-bottom pb-4">
                  <h5 className="fw-bold">1. Job Matching</h5>
                  <p className="text-muted">
                    Our intelligent system connects you with job opportunities tailored to your skills and aspirations.
                  </p>
                </li>
                <li className="border-bottom pb-4 pt-4">
                <h5 className="fw-bold">2. Skill Development</h5>
                <p className="text-muted">
                    Access top-notch resources to upskill and make yourself stand out in the competitive job market.
                  </p>
                </li>
                <li className="pt-4">
                <h5 className="fw-bold">3. Success Stories</h5>
                <p className="text-muted">
                    Be inspired by real users who landed their dream jobs through Fursati. Your success starts here!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row gy-4">
          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Kenny Smith"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "Thanks to Fursati, I secured my first job as a software developer in Manama! The platform connected me with the right employers, and I finally started my dream career."
            </p>
            <p className="fw-bold">Ali Hassan - Manama, Bahrain</p>
          </div>

          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Laurie Mitchell"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "I was struggling to find a job after graduation, but Fursati helped me land an amazing opportunity in a marketing firm in Riffa. Highly recommend!"
            </p>
            <p className="fw-bold">Fatima Yusuf - Riffa, Bahrain</p>
          </div>

          <div className="col-md-4 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/31.jpg"
              alt="Henry White"
              className="rounded-circle mb-3"
            />
            <p className="lead fst-italic">
              "Fursati changed my life! I found a great job in IT support in Muharraq. The courses and networking features really helped me grow. Highly recommended"
            </p>
            <p className="fw-bold">Mohammed Salem - Muharraq, Bahrain</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
