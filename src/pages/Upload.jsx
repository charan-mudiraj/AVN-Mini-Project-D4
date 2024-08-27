import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Upload() {
  const [areRollNosValid, setAreRollNosValid] = useState(false);
  const [rollNos, setRollNos] = useState("");
  const [attendanceList, setAttendanceList] = useState("");
  const attendanceListRef = useRef();

  const generateList = async () => {
    let roll_nos = rollNos.split(" ");
    let n = roll_nos.length;

    for (let i = 0; i < n; i++) {
      roll_nos[i] = Number(roll_nos[i]);
    }

    roll_nos.sort(function (a, b) {
      return a - b;
    });

    let file = await fetch("names.txt");
    let text = await file.text();
    let rollnos_abs = [];
    let flag = 0;

    for (let i = 0; i < 70; i++) {
      if (roll_nos[flag] != i + 1) {
        rollnos_abs.push(i + 1);
      } else {
        flag++;
      }
    }

    let m = rollnos_abs.length;
    let names = text.split("\n");
    let result = "No.of Students: " + n + "\n";

    for (let i = 0; i < m; i++) {
      result += rollnos_abs[i] + "." + names[rollnos_abs[i] - 1] + "\n";
    }

    setAttendanceList(result);
  };

  useEffect(() => {
    if (attendanceListRef.current) {
      attendanceListRef.current.style.height = `${attendanceListRef.current.scrollHeight}px`;
    }
  }, [attendanceList]);

  return (
    <>
      <NavBar />
      <div className="container text-center">
        <div className="container row-12 mt-5">
          <h3>Enter Today's Attendance</h3>
          <h5>(space separated list)</h5>
        </div>
        <div className="form-floating container p-0 rounded-4 shadow row-12 my-5">
          <textarea
            className="roll-nos form-control rounded-4"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{
              height: 100,
              resize: "none",
              borderColor: areRollNosValid || !rollNos ? "#80bdff" : "#750e0e",
              boxShadow: `0 0 0 0.2rem ${
                areRollNosValid || !rollNos
                  ? "rgba(0, 123, 255, 0.25)"
                  : "rgba(255, 0, 0, 0.25)"
              }`,
            }}
            defaultValue={""}
            onInput={(e) => {
              const val = e.target.value;
              if (!val || val.match(/[a-zA-Z]/)) {
                setAreRollNosValid(false);
              } else {
                setAreRollNosValid(true);
              }
              setRollNos(val);
            }}
          />
          <label htmlFor="floatingTextarea">Roll Numbers(1-70)</label>
        </div>
        <button
          className={`generate-btn btn btn-primary row-12 ${
            !areRollNosValid && "disabled"
          }`}
          role="button"
          onClick={generateList}
        >
          Generate List
        </button>
      </div>
      {attendanceList && (
        <div className="attendance-div text-center" style={{ height: "auto" }}>
          <div className="mx-5 mt-5 border-top" />
          <div className="container row-12 mt-5">
            <h3>Attendance List</h3>
          </div>
          <div className="form-floating container p-0 rounded-4 shadow row-12 my-5">
            <textarea
              className="attendance-list form-control rounded-4"
              placeholder="Leave a comment here"
              id="floatingTextarea"
              style={{
                height: "auto",
                wordWrap: "break-word",
                resize: "none",
                overflow: "hidden",
              }}
              value={attendanceList}
              ref={attendanceListRef}
            />
            <label htmlFor="floatingTextarea">Today's Attendance</label>
          </div>
          <div className="mb-4">
            <label role="button">
              <input
                type="checkbox"
                role="button"
                className="upload-checkbox mx-2"
              />
              Is the Attendance Genuine ?
            </label>
          </div>
          <a
            className="copy-btn btn btn-primary row-12 mx-3"
            role="button"
            aria-disabled="false"
          >
            Copy
          </a>
          <a
            className="upload-btn btn btn-primary row-12 disabled mx-3"
            role="button"
            aria-disabled="true"
          >
            Upload
          </a>
        </div>
      )}
      <Footer />
    </>
  );
}
