import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BarChart from "../components/BarChart";

export default function Status() {
  const [isRollNoValid, setIsRollNoValid] = useState(false);
  const [rollNo, setRollNo] = useState("");
  const [isStatusVisible, setIsStatusVisible] = useState(false);
  const [studentDetails, setStudentDetials] = useState({
    name: "",
    rollNo: "",
    present_days: 0,
    absent_days: 0,
    present_per: 0,
    absent_per: 0,
  });
  const displayStudentStatus = async () => {
    let file = await fetch("names.txt");
    let text = await file.text();
    let names = text.split("\n");
    let present_days = Math.floor(Math.random() * 132) + 1;
    let absent_days = 132 - present_days;
    let present_per = Math.floor((present_days / 132) * 100);
    let absent_per = Math.abs(100 - present_per);
    setStudentDetials({
      name: names[Number(rollNo) - 1],
      rollNo: `215U1A67${rollNo}`,
      present_days: present_days,
      absent_days: absent_days,
      present_per: present_per,
      absent_per: absent_per,
    });
    console.log(studentDetails);
    setIsStatusVisible(true);
  };
  return (
    <>
      <NavBar />
      <div className="container my-5 text-center d-flex align-items-center flex-column">
        <div className="shadow mb-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body ">
              <h5 className="card-title">Enter Your Roll Number:</h5>
              <h6 className="card-subtitle text-body-secondary mb-4">
                (two-digit numeric)
              </h6>
              <input
                type="text"
                className="rollno-status form-control mb-2"
                id="basic-url"
                placeholder="Enter here..."
                aria-describedby="basic-addon3 basic-addon4"
                style={{
                  borderColor: isRollNoValid || !rollNo ? "#80bdff" : "#750e0e",
                  boxShadow: `0 0 0 0.2rem ${
                    isRollNoValid || !rollNo
                      ? "rgba(0, 123, 255, 0.25)"
                      : "rgba(255, 0, 0, 0.25)"
                  }`,
                }}
                onInput={(e) => {
                  const val = e.target.value;
                  if (!val || val.match(/[a-zA-Z]/) || val.length > 2) {
                    setIsRollNoValid(false);
                  } else {
                    setIsRollNoValid(true);
                  }
                  setRollNo(val);
                }}
              />
              <button
                className={`mt-2 get-status-btn card-link btn btn-primary ${
                  !isRollNoValid && "disabled"
                }`}
                role="button"
                onClick={displayStudentStatus}
              >
                Get Status
              </button>
            </div>
          </div>
        </div>
        {isStatusVisible && (
          <div className="shadow status-div mt-3">
            <div className="card" style={{ height: "auto", width: "18rem" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Your Attendance Status</h5>
                <p id="status-name">Name: {studentDetails.name}</p>
                <p id="status-rollno">Roll No.: {studentDetails.rollNo}</p>
                <p id="status-presentdays">
                  Present Days: {studentDetails.present_days}
                </p>
                <p id="status-absentdays">
                  Absent Days: {studentDetails.absent_days}
                </p>
                <p id="status-presentper">
                  Present Percentage(%): {studentDetails.present_per}
                </p>
                <p id="status-absentper">
                  Absent Percentage(%): {studentDetails.absent_per}
                </p>
                <BarChart
                  id="db-cat-vs-likes"
                  chartName={"Category-vs-Likes"}
                  labels={["Present", "Absent"]}
                  dataArr={[
                    studentDetails.present_per,
                    studentDetails.absent_per,
                  ]}
                  axis="x"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
