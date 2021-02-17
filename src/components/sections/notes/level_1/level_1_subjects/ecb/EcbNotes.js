import React from 'react'
import { Link } from 'react-router-dom'

function EcbNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/ecb" className="mr2 neonBlue pad1 rounded">ECB</Link>
            </div>
            <div className="center-self">
                <div className="column">
                    <h2>ECB Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1lQCe1Fq-4OhXNua55S4zSm5oWSL2634V?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EcbNotes
