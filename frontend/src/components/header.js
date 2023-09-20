import React from 'react'
import rupee from '../images/rupee.png'
import { useName } from '../context/name'

const Header = () => {
    const {name, setName} = useName();
  return (
    <div className="header-container">
        <div className="header-string">
            <div>0.72%</div>
            <div className="header-string-lower">5 Mins</div>
        </div>
        <div className="header-string">
            <div>1.47%</div>
            <div className="header-string-lower">1 Hour</div>
        </div>
        <div className="header-string-main">
        <div className='header-string-main-upper'>Best Price to Trade</div>
            <div className='header-string-main-middle'>
                <div style={{marginTop: "-8px"}}><img src={rupee} height={"65px"} width={"80px"}/></div>
                <div>25,54,014</div>
            </div>
            <div className="header-string-main-lower">Average {name.toUpperCase() || 'btc'.toUpperCase()}/INR net price including commission</div>
        </div>
        <div className="header-string">
            <div>5.81%</div>
            <div className="header-string-lower">1 Day</div>
        </div>
        <div className="header-string">
            <div>14.77%</div>
            <div className="header-string-lower">7 Days</div>    
        </div>
    </div>
  )
}

export default Header