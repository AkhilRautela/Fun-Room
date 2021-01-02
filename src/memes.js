import {useState,useEffect} from 'react';
let memeslink=[];
const Memes=()=>{
    let [memes,setMemeslink]=useState([]);
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    useEffect(()=>{
        fetch(proxyUrl+"https://meme-api.herokuapp.com/gimme").then(res=>res.json()).then((res)=>{
            memeslink.push(res['url']);
            console.log(memeslink);
            setMemeslink(memeslink);
        }
        );
    },memeslink);
    return (
        <div className="">
        <div className="center-align">
            {
                memeslink.map((x)=>{
                    return <div className="center-align"> <img src={x} alt="Loading" style={{height:"500px",width:"500px"}}/> </div>
                })
            }
        </div>
        </div>
    )
}
export default Memes;
