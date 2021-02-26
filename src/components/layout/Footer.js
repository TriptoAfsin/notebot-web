import React from 'react'

function Footer(props) {
    return (
        <React.Fragment>
                <p className="center-txt mt4 txt-lg floatUp">Built with 💜 by <a href="https://triptex.me">TriptoAfsin</a></p>
                <p className="center-txt mt4 txt-lg floatUp">Version: {props.version}</p>
        </React.Fragment>
    )
}

export default Footer
