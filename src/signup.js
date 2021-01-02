import fire from './firebaseconf.js';
import {Redirect,useHistory} from 'react-router-dom';
let email="";
let password="";
const Signup=()=>{
    const Hist=useHistory();
    async function signthisguy(){
        let res=await fire.auth().createUserWithEmailAndPassword(email,password);
        if(res.user!=null){
            Hist.push('/login');
        }
        else{
            alert("Something Went Wrong");
        }
    }
    return (
        <div className="container">
            <div className="card-panel">
                <div className="center-align" style={{marginBottom:"50px"}}>
                    <h1> SIGN UP </h1>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input id="email" type="text" onChange={(x)=>{email=x.target.value}}/>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input id="password" type="password" onChange={(x)=>{password=x.target.value}}/>
                        <label for="password">Password</label>
                    </div>
                </div>
                <center>
                    <button className="center-align btn-small wave-effect" onClick={signthisguy}> Signup </button>
                </center>
            </div>
        </div>
    );
}
export default Signup;

