import React from 'react'
import  {Link} from 'react-router-dom'

function MpNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/mp" className="mr2 neonBlue pad1 rounded">MP</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>MP Notes</h2>
                    <a href="https://drive.google.com/drive/folders/12BIB9maQreqmLBqLkvTiLCXNBNxVc-0l?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MpNotes
