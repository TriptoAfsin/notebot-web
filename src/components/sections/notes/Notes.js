import React from 'react'
import { Link } from 'react-router-dom'


function Notes() {
    return (
        <React.Fragment>
            <div className="fade">
                <h1>📗 Notes</h1>
                <div className="center-self">
                    <Link to="/notes/level1" className="button txt-xxl purpleGradient shadow bold">Level 1</Link>
                    <Link to="/notes/level2" className="button txt-xxl purpleGradient shadow bold">Level 2</Link>
                    <Link to="/notes/level3" className="button txt-xxl purpleGradient shadow bold">Level 3</Link>
                    <Link to="/notes/level4" className="button txt-xxl purpleGradient shadow bold">Level 4</Link>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Notes
