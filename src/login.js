import fire from './firebaseconf.js';
let email="";
let password="";
const Login=()=>{
    const trylogin=()=>{
        fire.auth().signInWithEmailAndPassword(email,password).then((out)=>{
            alert("LOGGED IN");
        }
        )
        .catch((e)=>{
            alert("Wrong Credential");
        }
        );
    }
    return (
        <div className="container">
            <div className="card-panel">
                <div className="center-align" style={{marginBottom:"50px"}}>
                    <h1> LOGIN </h1>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input id="email" type="text" onChange={(e)=>{email=e.target.value}}/>
                        <label for="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6 offset-s3">
                        <input id="password" type="password" onChange={(e)=>{password=e.target.value}}/>
                        <label for="password">Password</label>
                    </div>
                </div>
                <center>
                    <button className="center-align btn-small wave-effect" onClick={trylogin}> Login  </button>
                </center>
            </div>
        </div>
    );
}
export default Login;
