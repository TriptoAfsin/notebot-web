import React from 'react'

import useWindowDimensions from '../dataHandler/ResizeHandler'

import  {Link} from 'react-router-dom'
import Footer from '../layout/Footer';
import NoteBotStatus from '../layout/NoteBotStatus';

function FrontPage() {

    const { height, width } =  useWindowDimensions();


    return (
        <React.Fragment>
            <div className="center-self mt2">
            <div className="fade">
                    {width >= 820 ? <img src="./imgs/Notebot_web.png" alt="notebot_web_logo"  className="center-self wobble"/> : <p></p>}
                </div>
            </div>
            <div className="center-self pad4 floatIn">
                <Link to="/notes" className="button txt-xxl purpleGradient shadow bold">Notes</Link>
                <Link to="/reports" className="button txt-xxl purpleGradient shadow bold">Lab Reports</Link>
                <Link to="/routines" className="button txt-xxl purpleGradient shadow bold">Routines</Link>
                <Link to="/results" className="button txt-xxl purpleGradient shadow bold">Results</Link>
                <Link to="/syllabus" className="button txt-xxl purpleGradient shadow bold">Syllabus</Link>
            </div>
            <div className="center-self">
                <div className="column">
                    <NoteBotStatus title="NoteBOT Status"></NoteBotStatus>
                </div>
            </div>
            <div className="center-self floatUp">
            <a href="https://www.messenger.com/t/103148557940299" className="button txt-xxl blueGradient shadow bold">BOT Link</a>
            </div>
            
            <Footer version="0.2b" className="floatUp"></Footer>
        </React.Fragment>
    )
}

export default FrontPage
