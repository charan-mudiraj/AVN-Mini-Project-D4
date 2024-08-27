import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between py-3 my-4 border-top">
        <div className="col-md-4">
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Charan M
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://twitter.com/_charan_mudiraj?t=FkppQqe4UIRLmsZdzomz7w&s=09"
            >
              <img
                src="../../images/twitter.svg"
                className="bi"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://instagram.com/h9ck_berry?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
            >
              <img
                src="../../images/instagram.svg"
                className="bi"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.linkedin.com/in/charan-mudiraj-868086230"
            >
              <img
                src="../../images/linkedin.svg"
                className="bi"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://wa.me/qr/H67AUKBDVVBUO1"
            >
              <img
                src="../../images/whatsapp.svg"
                className="bi"
                width="24"
                height="24"
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
