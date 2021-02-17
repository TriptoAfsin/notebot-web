import React from 'react'
import  {Link} from 'react-router-dom'

function TtqcNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/ttqc" className="mr2 neonBlue pad1 rounded">TTQC</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>TTQC Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1l4ff8IEsR4B6mvjnovrqrfpqCZ3VXaA-?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/140liyfNPDrDkWqoVBrBSSyIohLDh5Hgz?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/11DFh4-86HScSJvEpX6mLvPCSh0mk2Zfb?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TtqcNotes
