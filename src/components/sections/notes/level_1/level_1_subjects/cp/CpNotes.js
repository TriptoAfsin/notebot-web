import React from 'react'
import  {Link} from 'react-router-dom'

function CpNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/cp" className="mr2 neonBlue pad1 rounded">CP</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>CP Notes</h2>
                <a href="https://drive.google.com/drive/folders/1c3omkJeEVj0YF2wPjoXhdcZqE-Ua7k8s?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1V_cGhlwIyvvkDS_RwgzOGKrz6XHjlRUj?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1EtUdaBhytqh2uZzl64XtNBG457YVgcAi?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CpNotes
