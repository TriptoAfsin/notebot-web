import React from 'react'
import {useEffect, useState} from 'react'
import DataProvider from '../dataHandler/DataProvider'
import Loader from '../UiElements/Loader'
import StatusInfo from './StatusInfo'

function NoteBotStatus() {

    const [loading, setLoading] = useState(true)
    const[match, setMatch] = useState('')


    const repoData = DataProvider()
    console.log(repoData)

    useEffect(
        () => {
            if(repoData !== null){
                setLoading(false)
                console.log("setLoading false now")
            }
        }, [repoData]
    )

    return (
        <React.Fragment>
            <h1>NoteBOT Status</h1>
            {loading ? <Loader></Loader> : <StatusInfo botStatus={repoData.botStatus} serverStatus={repoData.isServerRunning} msg={repoData.msg}></StatusInfo>}
        </React.Fragment>
    )
}

export default NoteBotStatus
