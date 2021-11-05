import React from "react";
import { Link } from "react-router-dom";

function AcmNotes() {
  return (
    <React.Fragment>
      <div className="left-txt mt4 ml4">
        <Link to="/" className="mr2 neonBlue pad1 rounded">
          Home
        </Link>
        ▶{" "}
        <Link to="/notes" className="mr2 neonBlue pad1 rounded">
          Notes
        </Link>
        ▶{" "}
        <Link to="/notes/level3" className="mr2 neonBlue pad1 rounded">
          Level 3
        </Link>
        ▶{" "}
        <Link to="/notes/level3/acm" className="mr2 neonBlue pad1 rounded">
          ACM
        </Link>
      </div>
      <div className="center-self">
        <div className="column">
          <h2>ACM Notes</h2>
          <a
            href="https://drive.google.com/drive/folders/100HKl_AqoeLWfVeqcCDteyzrEtZDX9Im?usp=sharing"
            className="button neonBlue txt-lg bold mt4 shadow"
            target='_blank'
            rel="noreferrer"
          >
            Folder 1
          </a>
          <a
            href="https://drive.google.com/drive/folders/1-DTt5hhBUfEeMU1P1_pclVgogU2H0ns4?usp=sharing"
            className="button neonBlue txt-lg bold mt4 shadow"
            target='_blank'
            rel="noreferrer"
          >
            Folder 2(Akib)
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AcmNotes;
