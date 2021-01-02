import Login from './login.js';
import Signup from './signup.js';
import Startpage from './startpage.js';
import {useState,useEffect} from 'react';
import Home from './home.js';
import Memes from './memes.js';
import Chat from './chatwithone.js';
let chk=0;
const Container=()=>{
    let [chk,setChk]=useState(0);
    useEffect(()=>{
        console.log("started");
    },chk);
    return (
        <div>
        <nav className="teal lighten-1">
            <span className="brand-logo center" > Fun Room </span>
            <ul>
                <li> <a onClick={()=>setChk(0)}>Home</a> </li>
                <li> <a href="/">About Us </a> </li>
            </ul>
            <ul className="right">
               <li> <a onClick={()=>{setChk(1)}}> Login </a> </li>
                <li> <a onClick={()=>{setChk(2)}}> Signup </a> </li>
            </ul>

        </nav>
        <div style={{height:"200px"}}>
        </div>
            {
                chk===0?<Chat/>:chk===1?<Login/>:<Signup/>
            }
        </div>
    );
}
export default Container;
