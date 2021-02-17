import React from 'react'
import  {Link} from 'react-router-dom'

function TpNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/tp" className="mr2 neonBlue pad1 rounded">TP</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>TP Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1oG9MaReb3xygYs0imHVcwcEFln-7ww3p?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1EAKpe4OI9nYQU6Sg01Ys86_iwI8Brb2x?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1EHlBZZQf0P4rkKbBFYpC92ioFQNknIuK?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TpNotes
