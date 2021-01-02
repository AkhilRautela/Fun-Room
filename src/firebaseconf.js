import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDxaI3JkAQjcSpO_98QxBGsmoYF193ldtw",
  authDomain: "react-chat-group.firebaseapp.com",
  projectId: "react-chat-group",
  storageBucket: "react-chat-group.appspot.com",
  messagingSenderId: "333848362074",
  appId: "1:333848362074:web:dbeab9b82834afcf00ec63",
  measurementId: "G-DR1D9EMT3Z"
};

const fire=firebase.initializeApp(firebaseConfig);
export default fire;
