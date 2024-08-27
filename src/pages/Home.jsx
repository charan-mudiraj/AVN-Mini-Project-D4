import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="my-5">
        <div className=" text-center bg-body-secondary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">
              A Fully Functioning Attendance Portal
            </h1>
            <h5>***For CSE(Data Science) 2-2 Students Only***</h5>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
              Get your Attendance Performance on Daily Basis with our
              Interactive and User-Friendly Web-Site.
            </p>
            <div className="mt-3 d-inline-flex gap-2 ">
              <a
                href="./upload"
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              >
                Upload
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FEATURES */}
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">
          Upload Consistently and Get the Following Features:
        </h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img src="../images/percent.svg" className="bi" height={35} />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">
                Personalized Percentage
              </h3>
              <p>
                Get your Attendance Percentace as over-all(till-today) or till
                the prefered date.
              </p>
              <a href="/status" className="btn btn-primary">
                Get Percentage
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img
                src="../images/person-heart.svg"
                className="bi"
                height={35}
              />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">
                Responsive &amp; User-Friendly
              </h3>
              <p>
                Users can easily understand and navigate through the Application
                in an Efficient way through Multiple Types of Devices.
              </p>
              {/* <a href="#" class="btn btn-primary">
          Primary button
        </a> */}
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img
                src="../images/bar-chart-line.svg"
                className="bi"
                height={35}
              />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Statistics</h3>
              <p>
                Get your over-all Statistics on your Attendance which includes
                your present &amp; absent stats till the date.
              </p>
              <a href="./status" className="btn btn-primary">
                Get Statistics
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
