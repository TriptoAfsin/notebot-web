import React from 'react'
import { Link } from 'react-router-dom'

function IeeNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/iee" className="mr2 neonBlue pad1 rounded">IEE</Link>
            </div>
            <div className="center-self">
                <div className="column">
                    <h2>IEE Notes</h2>
                    <a href="https://drive.google.com/drive/folders/14SNPvPQZAMpFNF2GDleOx2wDoWifv9lC?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1q5sVbSEhwKk8QaJlxX_6o6I_i-Mh8hTC?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default IeeNotes
