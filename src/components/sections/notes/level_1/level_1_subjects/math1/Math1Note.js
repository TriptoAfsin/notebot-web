import React from 'react'
import  {Link} from 'react-router-dom'

function Math1Note() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/math1" className="mr2 neonBlue pad1 rounded">Math-I</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>Math-I Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1XEJeRiRxZHv99Y7UxqxxJ0pdRw81VYQp?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1eDEAqlg67nfqmADPfAMbok1ttoSqoeEn?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1Xtn8Egbg2qbXTsgQdsLNGo_odh9KOtcE?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Math1Note
