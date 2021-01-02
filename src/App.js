import {Route, Switch} from 'react-router-dom';
import Signup from './signup.js';
import Login from './login.js';
import Chat from './chatwithone.js';
import Memes from './memes.js';
import Startpage from './startpage.js';
import Container from './Container.js';
const App=()=>{  
    return (
        <Switch>
            <Route exact path="/" component={Container}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/memes" component={Memes} />
       </Switch>
    );
}
export default App;
