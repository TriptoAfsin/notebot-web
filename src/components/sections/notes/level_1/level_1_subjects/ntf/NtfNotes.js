import React from 'react'
import  {Link} from 'react-router-dom'

function NtfNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/ntf" className="mr2 neonBlue pad1 rounded">NTF</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>NTF Notes</h2>
                <a href="https://drive.google.com/drive/folders/1aDe_PV7qn9Qn7eTb37F7-vkO8v8Yt_Wg?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1cQYXQ5bnIKswjSy5pqnltBllMHheBnjk?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/11DHFVtwulwfRrPB9bSnwVhrXc5VI-OpE?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NtfNotes
