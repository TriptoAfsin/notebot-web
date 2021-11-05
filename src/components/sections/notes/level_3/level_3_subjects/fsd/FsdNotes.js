import React from "react";
import { Link } from "react-router-dom";

function FsdNotes() {
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
        <Link to="/notes/level3/fsd" className="mr2 neonBlue pad1 rounded">
          FSD
        </Link>
      </div>
      <div className="center-self">
        <div className="column">
          <h2>FSD Notes</h2>
          <a
            href="https://drive.google.com/drive/folders/1XmID4b_PU59wL2JBFXxmNTHG0uG4CPIe?usp=sharing"
            className="button neonBlue txt-lg bold mt4 shadow"
            target='_blank'
            rel="noreferrer"
          >
            Folder 1
          </a>
          <a
            href="https://drive.google.com/drive/folders/1M3zNIdDgS7nkrGvt0HCWZqOHgTZfEx48?usp=sharing"
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

export default FsdNotes;
