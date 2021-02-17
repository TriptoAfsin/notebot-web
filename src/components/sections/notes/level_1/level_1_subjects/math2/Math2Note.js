import React from 'react'
import  {Link} from 'react-router-dom'

function Math2Note() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>▶ <Link to="/notes/level1/math2" className="mr2 neonBlue pad1 rounded">Math-II</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>Math-II Notes</h2>
                    <a href="https://drive.google.com/drive/folders/12z6yB8gMl_UxDp7yspHDM8V5bY1p3pnZ?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1Arn1-9N6NA2Chp3LLpprAqc4uqhXt37M?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1U1oCdN7CBgL3HOqaj1PB67WT1UovUWig?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Math2Note
