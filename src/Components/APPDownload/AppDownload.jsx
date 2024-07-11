import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br/>
        OrderUp App</p>
        <div className='app-download-platfrom'>

            <img src={assets.playstore} alt=''/>
            <img src={assets.appstore} alt=''/>

        </div>
      
    </div>
  )
}

export default AppDownload
