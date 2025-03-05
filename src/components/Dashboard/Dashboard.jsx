import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ }) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      <div className="row mb-5 text-center" style={{ background: 'linear-gradient(135deg, #2C3E50, #4CA1AF)', padding: '50px' }}>
        <div className="col-12 text-container">
          <h1 className="display-2 text-white mt-3 fw-bold">
            Looking for Tech Job Opportunities?
          </h1>
          <p className="lead text-white w-75 m-auto mb-4">
            Whether you're a software developer, network engineer, or a technician, this platform allows you to showcase your skills and connect with potential employers.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <a href="/posts/new" className="btn btn-primary text-uppercase">Make a Job Post</a>
            <a href="/posts" className="btn btn-light text-uppercase">Explore Job Seekers</a>
          </div>
          <div id="slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button className="active" type="button" data-bs-slide-to="0" data-bs-target="#slider" aria-label="Slide 1" aria-current="true"></button>
              <button type="button" data-bs-slide-to="1" data-bs-target="#slider" aria-label="Slide 2"></button>
              <button type="button" data-bs-slide-to="2" data-bs-target="#slider" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner rounded-5">
              <div className="carousel-item active">
                <img src="https://talhealthcare.com/wp-content/uploads/2019/12/2019-12-celebrating-new-job-scaled.jpg" alt="" className="d-block mx-auto" style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="carousel-item">
                <img src="https://blog.recruiter.com/hs-fs/hubfs/Job%20Recruiters.jpg?width=1600&name=Job%20Recruiters.jpg" alt="" className="d-block mx-auto" style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <div className="carousel-item">
                <img src="https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/blog/posts/FirstDay_hero.jpg&w=1200&h=630" alt="" className="d-block mx-auto" style={{ width: '400px', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#slider">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#slider">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </div>

      <div className="container mb-4">
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <h2 className="fw-bold">
              Empowering Job Seekers in the Tech Industry
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm" style={{ backgroundColor: '#f1c40f' }}>
              <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/Software-Development-Models.jpg?tx=w_1920,q_auto" alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Software Development Posts</h5>
                <p className="card-text">
                  Showcase your skills as a software developer and connect with tech companies looking for talented individuals like you.
                </p>
                <div className="badge bg-danger p-2 text-uppercase">
                  Development
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm" style={{ backgroundColor: '#1abc9c' }}>
              <img src="https://prioritynetworks.ca/wp-content/uploads/2022/08/THE-Importance-of-computer-networking-2-scaled.jpg" alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Networking Posts</h5>
                <p className="card-text">
                  Looking for networking opportunities? Post your expertise and connect with companies in need of network engineers and professionals.
                </p>
                <div className="badge bg-dark p-2 text-uppercase">
                  Networking
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm" style={{ backgroundColor: '#3498db' }}>
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Cybersecurity_Hard_to_Learn.jpg" alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Security Posts</h5>
                <p className="card-text">
                  Share your skills in cybersecurity and connect with companies looking for experts to secure their systems and networks.   </p>
                <div className="badge bg-primary p-2 text-uppercase">
                  Security
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm" style={{ backgroundColor: '#e74c3c' }}>
              <img src="https://www.insureon.com/-/media/blog/posts/2019/photo_woman-fixing-computer.jpg?h=375&iar=0&w=750&rev=23f11902252843bcbb9b509ef57e942c" alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">Technician Posts</h5>
                <p className="card-text">
                  Showcase your technician skills and connect with companies looking for skilled tech professionals in hardware and IT.
                </p>
                <div className="badge bg-success p-2 text-uppercase">
                  Technician
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" className="rounded-circle" width="120" height="120" style={{ objectFit: 'cover' }} />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                “This platform helped me connect with recruiters and land a software engineering job at a top tech company.
              </p>
              <div className="fw-bold fs-5 mt-4">Marlene Visconte</div>
              <div>Software Engineer - TechCorp</div>
            </div>
          </div>


          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" className="rounded-circle" width="120" height="120" style={{ objectFit: 'cover' }} />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                “Posting about my skills here allowed me to find a job in the networking field quickly. A fantastic platform for tech job seekers!”
              </p>
              <div className="fw-bold fs-5 mt-4">John Spiker</div>
              <div>Network Engineer - DataTech</div>
            </div>
          </div>


          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="" className="rounded-circle" width="120" height="120" style={{ objectFit: 'cover' }} />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                “Thanks to this platform, I was able to connect with a company looking for technicians. It’s been an amazing experience!”
              </p>
              <div className="fw-bold fs-5 mt-4">Stella Virtuoso</div>
              <div>Technician - DevSolutions</div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="btn-circle">
            <i className="fas fa-arrow-left"></i>
          </span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="btn-circle">
            <i className="fas fa-arrow-right"></i>
          </span>
        </button>
      </div> <br />
    </main>
  );
};

export default Dashboard;
