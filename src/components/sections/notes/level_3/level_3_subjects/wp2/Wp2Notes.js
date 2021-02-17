import React from 'react'
import  {Link} from 'react-router-dom'

function Wp2Notes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level3" className="mr2 neonBlue pad1 rounded">Level 3</Link>▶ <Link to="/notes/level3/wp2" className="mr2 neonBlue pad1 rounded">WP-II</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>WP-II Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1ft7aaPoVS6boRwTunkm_pc1AoTadV9Wa?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1(Khalid Bhai)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Wp2Notes
