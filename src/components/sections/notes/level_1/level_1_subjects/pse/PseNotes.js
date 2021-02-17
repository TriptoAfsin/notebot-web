import React from 'react'
import  {Link} from 'react-router-dom'

function PseNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/pse" className="mr2 neonBlue pad1 rounded">PSE</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>PSE Notes</h2>
                <a href="https://drive.google.com/drive/folders/1sTtutnSmTkfTzN6INAzkKoO1str79Isl?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1YmHJKu0Xna4xeX4Q0-jQlBAKx_Y8EYsM?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1jfjO-_e8N_bM2bzM8XT4b_McZdNxWqLq?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PseNotes
