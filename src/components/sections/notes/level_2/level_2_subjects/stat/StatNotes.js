import React from 'react'
import  {Link} from 'react-router-dom'

function StatNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/stat" className="mr2 neonBlue pad1 rounded">Stat</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>Stat Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1IJHa0cZKzEnBv1T0nIx-pgcHTHdEQaro?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1UndUj-RYueQlw3naeTHdajycqAry_ZJN?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1ub54adDkVN_ZEq0D7QYy4N9UndPje4En?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StatNotes
