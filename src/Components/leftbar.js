import React, { useState } from 'react'
import '../App.scss'
import img from './cat.jpg'
import toggle1 from './toggle1.svg'
import {Link} from 'react-router-dom'
import toggle2 from './toggle2.svg'
import {useEffect} from 'react'
import { color } from '@material-ui/system'
function Leftbar() {

const style1={
    "background-color":"#99ef9c",
    "box-shadow":"inset 0 0 10px grey"
}
const style2={
    "box-shadow":"inset 0 0 10px grey"
}
const [k,setK]=useState(true)

    return (
        <div className="left-bar">
            <div className="intro">
            <div className="image">
                <img id="cat"src={img} alt="logo"></img>
            </div>
            <div className="reader">
                <span style={{'fontWeight':'bold'}}>Hi Reader,</span><br></br>
                Here's your news
            </div>
            </div>
            <div className="toggle">
            <Link to="/">
                <div style={k===true?style1:style2} onClick={()=>{
                    setK(!k);
                }}className="view1"><img src={toggle1} alt=""></img></div>
            </Link>
            <Link to="/view2">
                <div style={k===false?style1:style2} onClick={()=>{
                    setK(!k);
                }}className="view2"><img src={toggle2} alt=""></img></div>
            </Link>
            </div>
            <div className="feedback">
                <div className="ques">
                    Have a Feedback?
                </div>
                <div className="feed_input">
                    <input></input>
                </div>
            </div>
        </div>
    )
}

export default Leftbar
