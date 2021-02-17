import React from 'react'
import  {Link} from 'react-router-dom'

function CtcaNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/ctca" className="mr2 neonBlue pad1 rounded">CTCA</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>CTCA Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1Xh-wlKIoncykLX_0ZCUGkYzqYBNQHruy?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1qWHcxt82kpeVjlKIvlxU93-gx-78dkEZ?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CtcaNotes
