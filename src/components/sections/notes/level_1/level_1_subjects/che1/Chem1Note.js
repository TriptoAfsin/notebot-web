import React from 'react'
import  {Link} from 'react-router-dom'

function Chem1Note() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/chem1" className="mr2 neonBlue pad1 rounded">Chem-I</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>Chem-I Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1h_kg7xUJXSGDpPc_s8FL3BkIYMN6Gx0z?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1F4I8La2B278zUPHpV6Z8x9JXO-WzqZ8c?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1sWxZ8Px9iBxE9u2F18gf6nI7NQotHMYx?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Chem1Note
