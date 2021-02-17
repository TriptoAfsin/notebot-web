import React from 'react'
import  {Link} from 'react-router-dom'

function Phy2Note() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/phy2" className="mr2 neonBlue pad1 rounded">Phy-II</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>PHY-II Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1MOWGwgvnpNON6vDrstp1DowUVibvX2w8?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/17S7BPIw5grFw6f3Jyyei83aVSS863_IC?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Phy2Note
