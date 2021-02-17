import React from 'react'
import  {Link} from 'react-router-dom'

function MmtfNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/mmtf" className="mr2 neonBlue pad1 rounded">MMTF</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>MMTF Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1kAnymJDjNW9yTkNU8biMSCMpb_sAzwez?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1KYp1iAfmqzgnrppWuHALNsIECiHPNEca?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1tIL_AOIx-w64_kvA00la55YeMdGte2xl?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MmtfNotes
