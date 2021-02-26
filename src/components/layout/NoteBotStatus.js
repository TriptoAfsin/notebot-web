import React from 'react'
import {useEffect, useState} from 'react'
import DataProvider from '../dataHandler/DataProvider'
import Loader from '../UiElements/Loader'
import StatusInfo from './StatusInfo'




function NoteBotStatus(props) {

    const [loading, setLoading] = useState(true)
    const[match, setMatch] = useState('')


    const repoData = DataProvider("https://notebot-engine-v1.herokuapp.com/")
    console.log(repoData)

    useEffect(
        () => {
            if(repoData !== null){
                setLoading(false)
                console.log("setLoading false now")
            }
        }, [repoData]
    )

    let statusFunc = () => {
        return (
        <StatusInfo botStatus={repoData.botStatus} serverStatus={repoData.isServerRunning} msg={repoData.msg}></StatusInfo>
        )
    }


    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            {loading ? <Loader></Loader> : statusFunc()}
        </React.Fragment>
    )
}

export default NoteBotStatus
