import fire from './firebaseconf.js';
import {useState,useEffect} from 'react';
let message="";
let from="Akhil";
let messages=[];
let data;
const Chat=(props)=>{
    const setmessage=(text)=>{
        message=text;
    }
    const sendCurrentMessage=()=>{
        document.querySelector('#curmessage').value="";
        fire.database().ref().child('message').child(Date.now()).set(message);
    }
    let [nouse,setNouse]=useState([]);
    useEffect(()=>{
        setInterval(()=>{
            fire.database().ref().child("message").on('value',(snapshot)=>{
                data=snapshot.val();
                console.log(data);
                messages=[];
                for(var x in data){
                    messages.push([x,data[x]]);
                }
                messages.sort((x,y)=> (x[0]>y[0])?1:-1);
                console.log(message);
                setNouse(messages);
            });
        },2000);
    },[]);
    return (
    <div className="">
        <nav className="blue"> 
           <div className="navbar-wrapper">
                <a href="#" className="left brand-logo"> Akhil </a>
            </div>
            <ul className="right"> 
                <li> <a href="" > Home </a></li>
            </ul>
        </nav>
        <div className="container">
            <div className="card-panel">
                <div style={{overflowY:"scroll",height:500}}>
                    {
                        messages.map((message)=>{
                            return (<div> {message[1]}</div>);
                        })
                    } 
                </div>
            </div>
            <div className="card-panel">
                <div className="row">
                    <div className="col s10">
                        <input type="text" placeholder="message" id="curmessage"  onChange={(e)=>{setmessage(e.target.value);}}/>
                    </div>
                    <div className="col s2">
                        <button className="btn-small waves-effect" onClick={sendCurrentMessage}> Send </button>         
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Chat;
