import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faChartSimple,
  faWandMagic,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="my-5">
        <div className=" text-center bg-body-secondary">
          <div className="container py-5">
            <h1 className="text-body-emphasis">
              {" "}
              A Fully Functioning Students Portal
            </h1>
            <h4>
              An Interface for Management and Staff to Get & Manage Student
              Data.
            </h4>
            <h5>***For CSE(Data Science) 2021-25 Batch Only***</h5>
            <p className="col-lg-8 mx-auto fs-5 text-muted">
              Get the Students Data and their Academic Performance with our
              Interactive and User-Friendly Web-Site.
            </p>
            <div className="mt-3 d-inline-flex gap-2 ">
              <a
                href="./upload"
                className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
              >
                Get All Students Data
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
              <FontAwesomeIcon icon={faChartPie} />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Visualized Data</h3>
              <p>
                Get Students Academic Performace in Visual Form (Charts and
                Graphs) for Comparative Data Analytics.
              </p>
              <a href="/status" className="btn btn-primary">
                Analyze Data
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <FontAwesomeIcon
                icon={faWandMagicSparkles}
                style={{
                  color: "black",
                  height: "30px",
                  width: "30px",
                }}
              />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">
                Responsive & User-Friendly
              </h3>
              <p>
                Admins(Management & Staff) can easily navigate through the
                Application in an Efficient way through all Devices and Mangage
                Student Data.
              </p>
              {/* <a href="#" class="btn btn-primary">
                Primary button
              </a> */}
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <FontAwesomeIcon icon={faChartSimple} />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Statistics</h3>
              <p>
                Get over-all Statistics on the Attendace of Students which
                includes present & absent stats till the date.
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
