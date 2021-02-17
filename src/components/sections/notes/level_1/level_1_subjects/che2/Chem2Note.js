import React from 'react'
import  {Link} from 'react-router-dom'

function Chem2Note() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/chem2" className="mr2 neonBlue pad1 rounded">Chem-II</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>Chem-II Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1Gx0P5TQBdYTX3q3dsfP31snByT8dyX6e?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1GsXRE2LUxQoO4TdHGAjWmhx5Qbuf-21T?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Chem2Note
