import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Container>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
         <img src="./img/logo.png" width="200" alt="" />
        </Link>
        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 d-flex align-items-center">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                eSports
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                News
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Reviews
              </Link>
            </li>

            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
               Features
              </Link>
            </li>

            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Contact Us
              </Link>
            </li>

            <li className="ms-4 header-icon">
              <span class="iconify" data-icon="akar-icons:search"></span>
            </li>

            <li className="ms-4 header-icon">
              <span class="iconify" data-icon="ion:bag-handle"></span>
            </li>

            
          </ul>

         
        </Nav>
      </header>
    </Container>
  );
};

export default Menu;
