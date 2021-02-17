import React from 'react'

function Apps() {
    return (
        <div className="center-self floatIn column">
            <div className="mt4">
                <h2 className="mb4">🌐 Web Apps</h2>
                <a href="https://triptoafsin.github.io/Cloud-Lib-React/" className="button txt-xl purpleGradient shadow bold">Cloud Lib</a>
                <a href="https://triptoafsin.github.io/BUTEX-PhoneBook/" className="button txt-xl purpleGradient shadow bold">PhoneBook</a>
                <a href="https://triptoafsin.github.io/CountKoto-/" className="button txt-xl purpleGradient shadow bold">Count Koto</a>
                <a href="https://triptoafsin.github.io/BUTEX_ID-Gen/" className="button txt-xl purpleGradient shadow bold">BUTEX ID Gen</a>
            </div>
            <div className="mt4">
                <h2 className="mb4">📱 Android Apps</h2>
                <a href="https://play.google.com/store/apps/developer?id=TriptoAfsin" className="button txt-xxl purpleGradient shadow bold">📱 Google Playstore</a>
            </div>
        </div>
    )
}

export default Apps
