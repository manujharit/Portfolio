import ProfilePhoto from "../../assets/ManujPhoto.jpeg";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={ProfilePhoto}
            alt="Your Photo"
            width="50"
            height="50"
            className="d-inline-block align-top rounded-circle me-2"
          />
          <b>MANUJ HARITWAL</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="home" smooth={true} duration={1000} className="nav-link">
                <b>Home</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" smooth={true} duration={1000} className="nav-link">
                <b>About Me</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="workex" smooth={true} duration={1000} className="nav-link">
                <b>Experience</b>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" smooth={true} duration={1000}  className="nav-link">
                <b>Contact Me</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
