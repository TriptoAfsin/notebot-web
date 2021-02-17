import React from 'react'
import  {Link} from 'react-router-dom'

function Am1Notes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/am1" className="mr2 neonBlue pad1 rounded">AM-I</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>AM-I Notes</h2>
                <a href="https://drive.google.com/drive/folders/1uefF7__2TInWQR8x1xCL91J0fOT_gy-4?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1odfTSIhvRYxX2A7jfPULOBtqg6tziOBq?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Am1Notes
