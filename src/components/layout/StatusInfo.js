import React from 'react'

function StatusInfo(props) {
    //console.log(`Info: ${botStatus} ${serverStatus} ${msg}`)
    return (
        <React.Fragment>
            <div><p className="txt-lg bold">Bot Status: {props.botStatus ? "🟢 Running" : "🔴 Service is down"}</p><p className="txt-lg bold">Server Status: {props.serverStatus ? "🟢 Running" : "🔴 Service is down"}</p><p className="txt-med italic mt2 mb2">Note: {props.msg}</p></div>
        </React.Fragment>
    )
}

export default StatusInfo
