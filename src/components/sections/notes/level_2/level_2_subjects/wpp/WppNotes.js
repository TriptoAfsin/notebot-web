import React from 'react'
import  {Link} from 'react-router-dom'

function WppNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/wpp" className="mr2 neonBlue pad1 rounded">WPP</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>WPP Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1Wa00ii_7TDiUr9HoKm4WRek22idQxIfo?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WppNotes
