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
        <div>
            {
                memeslink.map((x)=>{
                    return <div> <img src={x} alt="Loading"/> </div>
                })
            }
        </div>
    )
}
export default Memes;
