import React from 'react'
import { Link } from 'react-router-dom'

function TpmNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/tpm" className="mr2 neonBlue pad1 rounded">TPM</Link>
            </div>
            <div className="center-self">
                <div className="column">
                    <h2>TPM Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1BVw59HwB0kBw0JFQ_tYbspgc1UWRautg?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TpmNotes
