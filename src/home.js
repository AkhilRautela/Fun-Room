const Home=()=>{
    return (
        <div ClassName="Container">
            <div className="row">
               <div className="col s6 m4 offset-m2">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-title">
                                GLOBAL CHAT
                            </div>
                            <p>
                                Hello How are you?
                            </p>
                            <div className="card-action center-align">
                                <a href="/chat"> Global Chat  </a>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4 ">
                    <div className="card">
                        <div className="card-content"> 
                             <div className="card-title">
                                 MEMES
                             </div>
                            <p>
                                Hello Wassup guys?
                            </p>
                            <div className="card-action center-align">
                               <a href="/memes">Memes </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
