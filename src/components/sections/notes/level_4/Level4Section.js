import React from 'react'

import { Link } from 'react-router-dom'

function Level4Section() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level4" className="mr2 neonBlue pad1 rounded">Level 4</Link>
            </div>
            <h2>Level 4 Subjects</h2>

            <div className="card-container mt4 fade">
                <Link to="/notes/level4/bil" className="button txt-xxl purpleGradient shadow bold">B&IL</Link>
                <Link to="/notes/level4/bs" className="button txt-xxl purpleGradient shadow bold">BS</Link>
                <Link to="/notes/level4/epd" className="button txt-xxl purpleGradient shadow bold">EPD</Link>
                <Link to="/notes/level4/hrm" className="button txt-xxl purpleGradient shadow bold">HRM</Link>
                <Link to="/notes/level4/ir" className="button txt-xxl purpleGradient shadow bold">IR</Link>
                <Link to="/notes/level4/ppc" className="button txt-xxl purpleGradient shadow bold">PPC</Link>
                <Link to="/notes/level4/tam" className="button txt-xxl purpleGradient shadow bold">TAM</Link>
            </div>

            <div className="center-self mt4">
            <div className="column">
                    <h3>🔴 Question Banks</h3>
                    <a href="https://drive.google.com/drive/u/2/folders/1M9QjSqItJW1oZJd1RcG4yeAa41hB_dz-" className="button blueGradient mt4 txt-lg bold shadow">All QB</a>
                </div>     
            </div>
        </React.Fragment>
    )
}

export default Level4Section
