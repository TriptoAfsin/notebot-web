import React from 'react'
import  {Link} from 'react-router-dom'

function EeeNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/eee" className="mr2 neonBlue pad1 rounded">FEEE</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>FEEE Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1JjaVqFfGsy2WWwb2EtGjd7cKAVRoXdpP?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1--qXV7wJn4Bwth0GaXhc22t2Z61v-sRR?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1G6IHRQ88AvX8N9S1E_Lz-NZyqwBpWJVm?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EeeNotes
