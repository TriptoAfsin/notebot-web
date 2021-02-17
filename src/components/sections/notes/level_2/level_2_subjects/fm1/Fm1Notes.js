import React from 'react'
import  {Link} from 'react-router-dom'

function Fm1Notes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/fm1" className="mr2 neonBlue pad1 rounded">FM-I</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>FM-I Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1mcUvvC1QCHqQjNb66HG1l5fF7QIaItkP?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1HejqGGN1DbiDwpd3pj0DsYK9Jf_okjLI?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1GKkq7BSiXIBOzLdpPlYlpDD0_C3KcXMO?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Fm1Notes
