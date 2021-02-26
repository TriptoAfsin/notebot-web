import React from 'react'



function StatusInfo(props) {
    return (
        <React.Fragment>
            <div><p className="txt-lg bold">Bot Status: {props.botStatus ? "🟢 Service is running" : "🔴 Service is down"}</p><p className="txt-lg bold">Server Status: {props.serverStatus ? "🟢 Running" : "🔴 Server is down"}</p><p className="txt-med italic mt2 mb2">Note: {props.msg}</p></div>
        </React.Fragment>
    )
}

export default StatusInfo
