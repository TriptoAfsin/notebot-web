import React from 'react'
import { Link } from 'react-router-dom'

function Level2Section() {
    return (
        <div className="fade"> 
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>
            </div>
            <h2>Level 2 Subjects</h2>

            <div className="card-container mt4">
                <Link to="/notes/level2/fm1" className="button txt-xxl purpleGradient shadow bold">FM-I</Link>
                <Link to="/notes/level2/ym1" className="button txt-xxl purpleGradient shadow bold">YM-I</Link>
                <Link to="/notes/level2/wp1" className="button txt-xxl purpleGradient shadow bold">WP-I</Link>
                <Link to="/notes/level2/ttqc" className="button txt-xxl purpleGradient shadow bold">TTQC</Link>
                <Link to="/notes/level2/marketing" className="button txt-xxl purpleGradient shadow bold">Marketing</Link>
                <Link to="/notes/level2/sss1" className="button txt-xxl purpleGradient shadow bold">SSS-I</Link>
                <Link to="/notes/level2/sss2" className="button txt-xxl purpleGradient shadow bold">SSS-II</Link>
                <Link to="/notes/level2/eee" className="button txt-xxl purpleGradient shadow bold">FEEE</Link>
                <Link to="/notes/level2/mmtf" className="button txt-xxl purpleGradient shadow bold">MMTF</Link>
                <Link to="/notes/level2/fme" className="button txt-xxl purpleGradient shadow bold">FME</Link>
                <Link to="/notes/level2/tp" className="button txt-xxl purpleGradient shadow bold">TP</Link>
                <Link to="/notes/level2/fyt" className="button txt-xxl purpleGradient shadow bold">FYT</Link>
                <Link to="/notes/level2/am1" className="button txt-xxl purpleGradient shadow bold">AM-I</Link>
                <Link to="/notes/level2/ap1" className="button txt-xxl purpleGradient shadow bold">AP-I</Link>
                <Link to="/notes/level2/stat" className="button txt-xxl purpleGradient shadow bold">Stat</Link>
                <Link to="/notes/level2/wpp" className="button txt-xxl purpleGradient shadow bold">WPP</Link>
                <Link to="/notes/level2/ctca" className="button txt-xxl purpleGradient shadow bold">CTCA</Link>
                <Link to="/notes/level2/wev_prep" className="button txt-xxl purpleGradient shadow bold">Weaving Prep.</Link>
                <Link to="/notes/level2/mp" className="button txt-xxl purpleGradient shadow bold">MP</Link>
                <Link to="/notes/level2/fd2" className="button txt-xxl purpleGradient shadow bold">FD-II</Link>
                <Link to="/notes/level2/fdce" className="button txt-xxl purpleGradient shadow bold">FDCE</Link>
            </div>
            <div className="center-self mt4">
                <div className="column">
                <h3>🔴 Question Banks</h3>
                    <a href="https://drive.google.com/drive/folders/1AlmeMT52FQC02IhfvWuVPuDn8qatE_RQ" className="button blueGradient button blueGradient txt-lg bold mt4 shadow">All QB</a>
                </div>
            </div>
        </div>
    )
}

export default Level2Section
