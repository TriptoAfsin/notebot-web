import React from 'react'
import { Link } from 'react-router-dom'

function Phy1Note() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/phy1" className="mr2 neonBlue pad1 rounded">Phy-I</Link>
            </div>
            <div className="center-self">
                <div className="column">
                    <h2>PHY-I Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1v6x2kgldN23KzRD6DINaYB-id1vQOikc?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1FTtVgNZDL_tEf6OaBFkJoZgz43CfxBcg?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1LAM94ZW4mDNZlEDzMbKFcH7e4gI9_uYG?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Phy1Note
