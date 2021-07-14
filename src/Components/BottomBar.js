import React from 'react'
import toggle1 from './toggle1.svg'
import toggle2 from './toggle2.svg'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'

function BottomBar() {
    const style1={
    "background-color":"#99ef9c",
    "box-shadow":"inset 0 0 10px grey"
}

const style2={
    "box-shadow":"inset 0 0 10px grey"
}
const [k,setK]=useState(true)
useEffect(()=>{

},k)
    return (
        <div className="bottom">
        <Link to="/">
            <span style={k===true?style1:style2} onClick={()=>{
                    setK(!k);
                }}className="toggle1"><img src={toggle1} alt=""></img></span>
        </Link>
        <Link to="/view2">
            <span style={k===false?style1:style2} onClick={()=>{
                    setK(!k);
                }}className="toggle2"><img src={toggle2} alt=""></img></span>
        </Link>
            
        </div>
    )
}

export default BottomBar
