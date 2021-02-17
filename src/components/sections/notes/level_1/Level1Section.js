import React from 'react'
import { Link } from 'react-router-dom'


function Level1Section() {
    return (
        <div className="fade">
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level1" className="mr2 neonBlue pad1 rounded">Level 1</Link>
            </div>
            <h2>Level 1 Subjects</h2>
            <div className="card-container mt4 ">
                <Link to="/notes/level1/math1" className="button txt-xxl purpleGradient shadow bold">Math-I</Link>
                <Link to="/notes/level1/math2" className="button txt-xxl purpleGradient shadow bold">Math-II</Link>
                <Link to="/notes/level1/phy1" className="button txt-xxl purpleGradient shadow bold">Phy-I</Link>
                <Link to="/notes/level1/phy2" className="button txt-xxl purpleGradient shadow bold">Phy-II</Link>
                <Link to="/notes/level1/chem1" className="button txt-xxl purpleGradient shadow bold">Chem-I</Link>
                <Link to="/notes/level1/chem2" className="button txt-xxl purpleGradient shadow bold">Chem-II</Link>
                <Link to="/notes/level1/pse" className="button txt-xxl purpleGradient shadow bold">PSE</Link>
                <Link to="/notes/level1/cp" className="button txt-xxl purpleGradient shadow bold">CP</Link>
                <Link to="/notes/level1/em" className="button txt-xxl purpleGradient shadow bold">EM</Link>
                <Link to="/notes/level1/ntf" className="button txt-xxl purpleGradient shadow bold">NTF</Link>
                <Link to="/notes/level1/bce" className="button txt-xxl purpleGradient shadow bold">BCE</Link>
                <Link to="/notes/level1/tpm" className="button txt-xxl purpleGradient shadow bold">TPM</Link>
                <Link to="/notes/level1/iae" className="button txt-xxl purpleGradient shadow bold">IAE</Link>
                <Link to="/notes/level1/tmm" className="button txt-xxl purpleGradient shadow bold">TMM</Link>
                <Link to="/notes/level1/fmg" className="button txt-xxl purpleGradient shadow bold">FMG</Link>
                <Link to="/notes/level1/bfs" className="button txt-xxl purpleGradient shadow bold">BFS</Link>
                <Link to="/notes/level1/iee" className="button txt-xxl purpleGradient shadow bold">IEE</Link>
                <Link to="/notes/level1/ecb" className="button txt-xxl purpleGradient shadow bold">ECB</Link>
            </div>
            <div className="center-self mt4">
                <div className="column">
                <h3>🔴 Question Banks</h3>
                    <a href="https://drive.google.com/drive/folders/1XSV3_96TvLXmkqnhK6zFQQ67jCj4_NzL" className="button blueGradient txt-lg bold mt4 shadow">All QB</a>
                </div> 
            </div>
        </div>
    )
}

export default Level1Section
