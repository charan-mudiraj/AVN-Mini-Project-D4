import React, { useState } from "react";

export default function NavBar() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand ms-2" href="./">
        Attendance Portal
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample05"
        aria-controls="navbarsExample05"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse navbar-div"
        id="navbarsExample05"
      >
        <ul className="navbar-nav mr-auto mx-3">
          <li className="nav-item">
            <a className="nav-link <%=home%>" href="../">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link <%=upload%>" href="../upload">
              Upload
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link <%=status%>" href="../status">
              Status
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="more-btn nav-link dropdown-toggle"
              aria-expanded="false"
              role="button"
              onClick={() => {
                setIsMoreOpen((curr) => !curr);
              }}
            >
              More
            </a>
            {isMoreOpen && (
              <ul
                className="more-slider dropdown-menu gap-1 p-2 rounded-3 mx-0 shadow w-220px mx-3"
                data-bs-theme="light"
                style={{ display: "block" }}
              >
                <li>
                  <a
                    className="dropdown-item rounded-2 <%=help%>"
                    href="../help"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item rounded-2 <%=contact%>"
                    href="../contact"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item rounded-2 <%=about%>"
                    href="../about"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
