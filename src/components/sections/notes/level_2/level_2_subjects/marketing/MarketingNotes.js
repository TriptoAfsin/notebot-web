import React from 'react'
import  {Link} from 'react-router-dom'

function MarketingNotes() {
    return (
        <React.Fragment>
            <div className="left-txt mt4 ml4">
                <Link to="/" className="mr2 neonBlue pad1 rounded">Home</Link>▶ <Link to="/notes" className="mr2 neonBlue pad1 rounded">Notes</Link>▶ <Link to="/notes/level2" className="mr2 neonBlue pad1 rounded">Level 2</Link>▶ <Link to="/notes/level2/marketing" className="mr2 neonBlue pad1 rounded">FM-Marketing</Link>
            </div>
            <div className="center-self">
                <div className="column">
                <h2>Marketing Notes</h2>
                    <a href="https://drive.google.com/drive/folders/1c1abiUTpvglWB-1YTJqi5drT9cyShPkv?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 1</a>
                    <a href="https://drive.google.com/drive/folders/1_3yKNakwsQxFOeBWbuEbTxL3V_DUyhaP?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 2</a>
                    <a href="https://drive.google.com/drive/folders/1CPL7zC_NjEOy5ZtNYHISoXMz44W29pzK?usp=sharing" className="button neonBlue txt-lg bold mt4 shadow">Folder 3(Akib)</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MarketingNotes
