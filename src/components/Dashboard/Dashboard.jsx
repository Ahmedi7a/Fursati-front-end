import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({}) => {
  const user = useContext(AuthedUserContext);
  return (
    <main>
      {/* Hero Section */}
      <div className="row mb-5 text-center" style={{ background: 'linear-gradient(135deg, #2C3E50, #4CA1AF)', padding: '50px' }}>
        <div className="col-12 text-container">
          <h1 className="display-2 text-white mt-3 fw-bold">
            Explore Our Training and Seminar Videos
          </h1>
          <p className="lead text-white w-75 m-auto mb-4">
            Whether you're a beginner or an experienced professional, our carefully curated content will empower you to enhance your skills and expand your knowledge.
          </p>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <a href="/posts/new" className="btn btn-primary text-uppercase">Make a Post</a>
            <a href="/posts" className="btn btn-outline-light text-uppercase">Job seekers</a>
          </div>
          {/* Image Slider */}
          <div id="slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button className="active" type="button" data-bs-slide-to="0" data-bs-target="#slider" aria-label="Slide 1" aria-current="true"></button>
              <button type="button" data-bs-slide-to="1" data-bs-target="#slider" aria-label="Slide 2"></button>
              <button type="button" data-bs-slide-to="2" data-bs-target="#slider" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner rounded-5">
              <div className="carousel-item active">
                <img src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI=" alt="" className="d-block w-80 rounded-5 mx-auto" style={{ maxWidth: '400px', height: 'auto' }} />
              </div>
              <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI=" alt="" className="d-block w-80 rounded-5 mx-auto" style={{ maxWidth: '400px', height: 'auto' }} />
              </div>
              <div className="carousel-item">
                <img src="https://media.istockphoto.com/id/475352876/photo/man-applying-for-a-job-on-the-internet.jpg?s=612x612&w=0&k=20&c=SQeciz8vqdGWu_KJoGC7yK8xmpBl69UewPtZSyWSrOI=" alt="" className="d-block w-80 rounded-5 mx-auto" style={{ maxWidth: '400px', height: 'auto' }} />
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

      {/* Solutions Section */}
      <div className="container mb-4">
        <div className="row mb-4">
          <div className="col-md-6 offset-md-3 d-flex flex-column align-items-center text-center">
            <h2 className="fw-bold">
              Vera Provides Software Solutions For Business Acceleration
            </h2>
          </div>
        </div>

        {/* Solutions Row 1 */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm">
              <img src="https://images.ctfassets.net/7qqwgjna58ct/3WEd2JUHd2kdYfY34FanGj/ec7084674c3fd7420911240de5a9c5d7/get-a-job-with-no-experience.png" alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">ERP Software Solutions</h5>
                <p className="card-text">
                  Our ERP software solution streamlines your business processes and enhances operational efficiency. With integrated modules for finance, human resources, and more, you can make data-driven decisions.
                </p>
                <div className="badge bg-primary p-2 text-uppercase">
                  Management
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm">
              <img src="https://images.ctfassets.net/7qqwgjna58ct/3WEd2JUHd2kdYfY34FanGj/ec7084674c3fd7420911240de5a9c5d7/get-a-job-with-no-experience.png" alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">CRM Software Solutions</h5>
                <p className="card-text">
                  Our CRM software solution helps you build stronger customer relationships and drive sales growth. Manage leads, track interactions, and deliver personalized experiences to maximize customer satisfaction and loyalty.
                </p>
                <div className="badge bg-dark p-2 text-uppercase">
                  Marketing
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Row 2 */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm">
              <img src="https://images.ctfassets.net/7qqwgjna58ct/3WEd2JUHd2kdYfY34FanGj/ec7084674c3fd7420911240de5a9c5d7/get-a-job-with-no-experience.png" alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">SFA Software Solutions</h5>
                <p className="card-text">
                  Our SFA software solution empowers your sales team with the tools they need to drive revenue growth. Streamline sales processes, track performance, and enhance collaboration to close deals faster.
                </p>
                <div className="badge bg-primary p-2 text-uppercase">
                  Management
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card bg-light shadow-sm">
              <img src="https://images.ctfassets.net/7qqwgjna58ct/3WEd2JUHd2kdYfY34FanGj/ec7084674c3fd7420911240de5a9c5d7/get-a-job-with-no-experience.png" alt="" className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title fw-bold">WMS Software Solutions</h5>
                <p className="card-text">
                  Our WMS software solution optimizes your warehouse operations and improves inventory management. Gain real-time visibility, automate processes, and reduce costs to ensure efficient logistics.
                </p>
                <div className="badge bg-dark p-2 text-uppercase">
                  Marketing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" className="rounded-circle" width="120" height="120" style={{ objectFit: 'cover' }} />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                “Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance.”
              </p>
              <div className="fw-bold fs-5 mt-4">Marlene Visconte</div>
              <div>General Manager - Scouter</div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg" alt="" className="rounded-circle" width="120" height="120" style={{ objectFit: 'cover' }} />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                “Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance.”
              </p>
              <div className="fw-bold fs-5 mt-4">John Spiker</div>
              <div>Team Leader - Vanquish</div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="" className="rounded-circle" width="120" height="120" style={{ objectFit: 'cover' }} />
              <p className="w-50 my-4 fst-italic fs-4 mb-4">
                “Expense bed any sister depend changer off piqued one. Contented continued any happiness instantly objection yet her allowance.”
              </p>
              <div className="fw-bold fs-5 mt-4">Stella Virtuoso</div>
              <div>Design Chief - Bikegirl</div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> <br />
    </main>
  );
};

export default Dashboard;
