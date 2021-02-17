import React from 'react'
import  {Link} from 'react-router-dom'

function EconoNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level3" className="mr2 neonBlue pad1 rounded">Level 3</Link>▶ <Link to="/notes/level3/economics" className="mr2 neonBlue pad1 rounded">Economics</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>Economics Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1MB80TuEJnTBAqiNupBQD3U02KulU7ZKr?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EconoNotes
