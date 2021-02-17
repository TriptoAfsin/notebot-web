import React from 'react'
import  {Link} from 'react-router-dom'

function Ym1Notes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/ym1" className="mr2 neonBlue pad1 rounded">YM-I</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>YM-I Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1nTtJUp-BERmGA6RjokXCcmVJ0tXyQHVM?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1mLNECdhm9JR8Zm-2-8BnU_ylS8DtNhGi?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/14zpOAA3nm8loiU1hXnHcC8nI36Y2D9Jc?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Ym1Notes
