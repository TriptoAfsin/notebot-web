import React from 'react'
import  {Link} from 'react-router-dom'

function FmeNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/fme" className="mr2 neonBlue pad1 rounded">FME</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>FME Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1QUq9R9M0ob0mXW5JVjoQkXnEw-Uuv-2x?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1RrILH-A-ArBGq-9GUUZ6QbrBifAIuhkQ?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1XWWmawKS9LzxqTgtA8CyoPv0-43O2VPz?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FmeNotes
