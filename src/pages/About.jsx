import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="d-flex justify-content-center">
        <div className="shadow card mt-5 mb-3" style={{ width: "18rem" }}>
          <div className="card-body d-flex flex-column align-items-center">
            <img
              src="../images/pp.jpg"
              className="h-75 w-75 rounded-circle card-img-top mb-2 shadow"
              alt="..."
            />
            <h5 className="card-title mt-2">Charan Mudiraj</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Admin</h6>
            {/* <p class="card-text">A Computer Programming Enthusiast</p> */}
            <ul className="border-top pt-2 nav mt-2 justify-content-center list-unstyled d-flex flex-row col-12">
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
