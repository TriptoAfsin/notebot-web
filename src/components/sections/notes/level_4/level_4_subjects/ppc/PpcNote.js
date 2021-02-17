import React from 'react'
import  {Link} from 'react-router-dom'

function PpcNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level4" className="mr2 neonBlue pad1 rounded">Level 4</Link>▶ <Link to="/notes/level4/epd" className="mr2 neonBlue pad1 rounded">PPC</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>PPC Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1Qft5H388DZyvrOSU5UUa3ru9qgFKVsi3?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PpcNotes
