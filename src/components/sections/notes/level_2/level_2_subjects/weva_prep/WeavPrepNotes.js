import React from 'react'
import  {Link} from 'react-router-dom'

function WeavPrepNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/wev_prep" className="mr2 neonBlue pad1 rounded">Weav Prep</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>Weav Prep Notes</h2>
                    <a href="https://drive.google.com/file/d/1qLO7surUEvTDFWZ8OvjySXrVvdAxyeHn/view" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WeavPrepNotes
