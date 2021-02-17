import React from 'react'
import  {Link} from 'react-router-dom'

function Wp1Notes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/wp1" className="mr2 neonBlue pad1 rounded">WP-I</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>WP-I Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1qA893F2ftWDYTj4VeD5PrQa2AGgdQhtQ?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1HkjHefIiDN7mdIE1kxc25icqHcEJKGeB?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1Ei6YETWuX590ktwOMKQPB9L_p4RsPgsQ?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Wp1Notes
