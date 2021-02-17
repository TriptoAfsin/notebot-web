import React from 'react'
import { Link } from 'react-router-dom'

function IaeNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/iae" className="mr2 neonBlue pad1 rounded">IAE</Link>
            </div>
            <div className="center-self">
                <div className="column">
                    <h2>IAE Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1vpBI83Q-GLXHBlYjYmR7hSslfhNp3cAq?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/17r-URwWnF1QT81PREN-Rs95S0hDTMeI4?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default IaeNotes
