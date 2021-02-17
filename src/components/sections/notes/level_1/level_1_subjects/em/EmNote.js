import React from 'react'
import  {Link} from 'react-router-dom'

function EmNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/em" className="mr2 neonBlue pad1 rounded">EM</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>EM Notes</h2>
                <a href="https://drive.google.com/drive/folders/1sA8xf1FQOJIrCRYVC6b21e4AQFGETWdm?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1DYh5IMSOF74PQsOSkMX26F-QgO_bAq2S?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EmNotes
