import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center">
        <div
          className="shadow card mt-5"
          style={{ height: "auto", width: "18rem" }}
        >
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Reach Us Out Through:</h5>
            <ul className="nav mt-2 justify-content-center list-unstyled d-flex flex-row">
              <li className="ms-auto">
                <a
                  className="text-body-secondary"
                  href="https://twitter.com/_charan_mudiraj?t=FkppQqe4UIRLmsZdzomz7w&s=09"
                >
                  <img
                    src="../../images/twitter.svg"
                    className="bi"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li className="ms-auto">
                <a
                  className="text-body-secondary"
                  href="https://instagram.com/h9ck_berry?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
                >
                  <img
                    src="../../images/instagram.svg"
                    className="bi"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li className="ms-auto">
                <a
                  className="text-body-secondary"
                  href="https://www.linkedin.com/in/charan-mudiraj-868086230"
                >
                  <img
                    src="../../images/linkedin.svg"
                    className="bi"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
              <li className="ms-auto me-auto">
                <a
                  className="text-body-secondary"
                  href="https://wa.me/qr/H67AUKBDVVBUO1"
                >
                  <img
                    src="../../images/whatsapp.svg"
                    className="bi"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
