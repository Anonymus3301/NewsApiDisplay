import React from 'react'
import imacat from './cat.jpg'
function Topbar() {
    return (
        <div className="topbar">
            <div className="profile">
                <img src={imacat} alt=""></img>
                <span className="text">Hi! Reader</span>
            </div>
        </div>
    )
}

export default Topbar
