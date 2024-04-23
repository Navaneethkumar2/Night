import React from 'react'
import { Link } from "react-router-dom";
import './Main.css'
import log from './logo.png'

export const Main = () => {
  return (
    <div>
       
            <nav>
              <ul>
                <li> <img  src={log} style={{position:"absolute", height:" 100px", width:"350px",marginTop:" -50px",marginLeft:"-290px"}}/></li>
                <li><Link to ="/"   style={{textDecoration:" none"}}>Home</Link></li>
                <li><Link to ="/abo" style={{textDecoration:" none"}}>About</Link></li>
                <li><Link to ="/ser" style={{textDecoration:" none"}}>Services</Link></li>
                <li><Link to ="/enq" style={{textDecoration:" none"}}> Equiry</Link></li>
                <li><Link to ="/con" style={{textDecoration:" none"}}> Contacts</Link></li>
                <li><Link to ="/pay" style={{textDecoration:" none"}}> Paynow</Link></li>
              </ul>
            </nav>
            
    </div>
  )
}
export default Main;