// import Button from "react-bootstrap/Button";
import "./Navbar.css";

function NavBar() {
  return (
    <>
      <div class="mainnav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary mnav">
          <div className="container-fluid">
            <a href="	https://www.clearedtalent.com/static/media/logo.693de24c.png">
              <img
                src="https://www.clearedtalent.com/static/media/logo.693de24c.png"
                alt="clearedTalent"
              />
            </a>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end navmini">
              <form className="flex">
                <button className="b1">Register & Take Test</button>
              </form>

              <div
                className="collapse navbar-collapse demo"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Sign-In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Customer
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Sign-Up
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Request Demo
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Referrals
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      {" "}
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
