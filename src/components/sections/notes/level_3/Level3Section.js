import React from 'react'
import { Link } from 'react-router-dom'

function Level3Section() {
    return (
        <React.Fragment >
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level3" className="mr2 neonBlue pad1 rounded">Level 3</Link>
            </div>
            <h2>Level 3 Subjects</h2>

            <div className="card-container mt4 fade">
                <Link to="/notes/level3/ace" className="button txt-xxl purpleGradient shadow bold">ACE</Link>
                <Link to="/notes/level3/acm" className="button txt-xxl purpleGradient shadow bold">ACM</Link>
                <Link to="/notes/level3/pd" className="button txt-xxl purpleGradient shadow bold">PD</Link>
                <Link to="/notes/level3/mic" className="button txt-xxl purpleGradient shadow bold">MIC</Link>
                <Link to="/notes/level3/im" className="button txt-xxl purpleGradient shadow bold">IM</Link>
                <Link to="/notes/level3/am2" className="button txt-xxl purpleGradient shadow bold">AM-II</Link>
                <Link to="/notes/level3/ap2" className="button txt-xxl purpleGradient shadow bold">AP-II</Link>
                <Link to="/notes/level3/wp2" className="button txt-xxl purpleGradient shadow bold">WP-II</Link>
                <Link to="/notes/level3/ym2" className="button txt-xxl purpleGradient shadow bold">YM-II</Link>
                <Link to="/notes/level3/fm2" className="button txt-xxl purpleGradient shadow bold">FM-II</Link>
                <Link to="/notes/level3/knit1" className="button txt-xxl purpleGradient shadow bold">Knit-I</Link>
                <Link to="/notes/level3/fsd" className="button txt-xxl purpleGradient shadow bold">FSD</Link>
                <Link to="/notes/level3/economics" className="button txt-xxl purpleGradient shadow bold">Economics</Link>
                <Link to="/notes/level3/tcp" className="button txt-xxl purpleGradient shadow bold">TCP</Link>
                <Link to="/notes/level3/pcs" className="button txt-xxl purpleGradient shadow bold">PCS</Link>
                <Link to="/notes/level3/lss" className="button txt-xxl purpleGradient shadow bold">LSS</Link>
                <Link to="/notes/level3/tqm" className="button txt-xxl purpleGradient shadow bold">TQM</Link>
            </div>

            <div className="center-self mt4">
                <div className="column">
                <h3>🔴 Question Banks</h3>
                    <a href="https://drive.google.com/drive/folders/1nhPHYnDC1JZFl0TwaYxeFB2dbo8aGf9J" className="button blueGradient txt-lg bold mt4 shadow">All QB</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Level3Section
