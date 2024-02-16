import { Component } from "react";
import { Button, Container, NavLink, Navbar } from "react-bootstrap";

class Sidebar extends Component {
  render() {
    return (
      <aside className="col col-2">
        <Navbar
          className="navbar navbar-expand-md fixed-left justify-content-between"
          id="sidebar"
        >
          <Container className="flex-column align-items-start">
            <NavLink className="navbar-brand" href="index.html">
              <img
                src="assets/logo/logo.png"
                alt="Spotify Logo"
                width="131"
                height="40"
              />
            </NavLink>
            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <NavLink
                      className="nav-item nav-link d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="nav-item nav-link d-flex align-items-center"
                      href="#"
                    >
                      <i className="bi bi-book-fill"></i>&nbsp; Your Library
                    </NavLink>
                  </li>
                  <li>
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <div className="input-group-append">
                        <Button className="btn btn-outline-secondary btn-sm h-100">
                          GO
                        </Button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
          <div className="nav-btn">
            <Button className="btn signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="btn login-btn" type="button">
              Login
            </Button>
            <NavLink href="#">Cookie Policy</NavLink> |
            <NavLink href="#"> Privacy</NavLink>
          </div>
        </Navbar>
      </aside>
    );
  }
}

export default Sidebar;
