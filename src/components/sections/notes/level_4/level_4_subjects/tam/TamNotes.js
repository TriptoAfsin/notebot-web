
import React from 'react'
import  {Link} from 'react-router-dom'

function TamNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level4" className="mr2 neonBlue pad1 rounded">Level 4</Link>▶ <Link to="/notes/level4/tam" className="mr2 neonBlue pad1 rounded">TAM</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>TAM Notes</h2>
                    <h2>Not Available Yet 😅 </h2>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TamNotes
