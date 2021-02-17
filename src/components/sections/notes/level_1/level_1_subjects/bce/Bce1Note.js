import React from 'react'
import  {Link} from 'react-router-dom'

function BCE1Note() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/bce" className="mr2 neonBlue pad1 rounded">BCE</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>BCE Notes</h2>
                    <a href="https://drive.google.com/drive/folders/126_UgwgQ7AfVoh7zzlx0n6eDXSk6xNeK?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1kogOZC67_7xI4R8xu1j3VstER2WS4BCA?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/13paYRna8-Z4_kb6HvXRIp6bpk6yDOZdq?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BCE1Note
