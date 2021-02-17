import React from 'react'
import  {Link} from 'react-router-dom'

function Sss1Notes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/sss1" className="mr2 neonBlue pad1 rounded">SSS-I</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>SSS-I Notes</h2>
                    <a href="https://drive.google.com/drive/folders/10dXAlG21MQGsTCJqd2TYBjU7M7dySi_s?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sss1Notes
