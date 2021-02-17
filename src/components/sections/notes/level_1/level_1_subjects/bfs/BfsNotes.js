import React from 'react'
import { Link } from 'react-router-dom'

function BfsNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/bfs" className="mr2 neonBlue pad1 rounded">BFS</Link>
            </div>
            <div className="center-self">
                <div className="column">
                    <h2>BFS Notes</h2>
                    <a href="https://drive.google.com/file/d/1-2ObCGtXKY2CwG3j_7ZlIVySxdICixqS/view" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BfsNotes
