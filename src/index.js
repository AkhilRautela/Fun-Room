import React from 'react';
import reactdom from 'react-dom';
import App from './App.js';
import Chat from './chatwithone.js';
import Login from './login.js';
import Signup from './signup.js';
import Container from './Container.js';
import {BrowserRouter} from "react-router-dom";
reactdom.render(<Container><BrowserRouter><App/></BrowserRouter></Container>,document.querySelector("#root"));
