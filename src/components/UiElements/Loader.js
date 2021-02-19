import React from 'react'
import './Loader.css'

function Loader() {
    return (
        <React.Fragment>
                <div className="center-self mt4">
                    <a><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></a>
                </div>
            </React.Fragment>
    )
}

export default Loader
