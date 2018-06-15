import {injectGlobal} from 'emotion';
import 'semantic-ui-css/semantic.css';

/* eslint-disable indent */
injectGlobal`
body {
  height: 100vh;
  background: linear-gradient(to bottom, #FD8271 , #A62824);
  font-family: 'Khula', sans-serif;
  color: #2f2f2f;
  overflow: hidden;
  margin: 0 8px;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#root {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

#container {
  max-width: 500px;
  background-color: white;
  border-radius: 10px;
  height: 90%;
  padding: 10px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.6);
  flex: 1;
}

#Header {
  width: 100%;
  height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  padding: 1em 0 0 1em;
}

#Header img {
  width: 3.5em;
  height: 3.5em;
  float: left;
}

#Header button.red {
  float: right;
  margin-top: 5px;
}

#Header h1 {
  display: block;
  float: left;
  margin-left: 10px;
  font-size: 2em;
  margin-top: 7px;
}

#ChatContainer {
  position: relative;
  padding-bottom: 50px;
}

.inner-container {
  height: 100%;
  overflow: hidden;
}

#loading-container {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

#loading-container img, #test-image {
  width: 100px;
  -webkit-animation-name: pulse;
  animation-name: pulse;
  animation-duration: 1000ms;
  transform-origin:70% 70%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@-webkit-keyframes pulse {
    0% { -webkit-transform: scale(1); }
    50% { -webkit-transform: scale(1.2); }
    100% { -webkit-transform: scale(1); }
}
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}

#test-image {
  margin-top: 20px;
}

button, input {
  border: none;
  background-color: white;
}

input {
  border: 1px solid rgba(0,0,0,.2);
  padding: 0 5px;
}

.ui {  
  &.primary {
        &.buttons .button,
        &.button {
          background-color: rgb(50, 50, 50);

          .button:hover,
          .button:focus,
          &:hover,
          &:focus {
            background-color: rgb(175, 175, 175);
          }
        }
      }
}

button:hover {
  cursor: pointer;
  opacity: .75;
}

button.red {
  background-color: #A62824;
  color: white;
  padding: 7px 10px;
  border-radius: 3px;
  text-transform: uppercase;
}

button.red.light {
  background-color: #A62824;
}

button.red:focus {
  background-color: #7b1c19;
}

#ChatContainer #chat-input {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 5px;
  background-color: white;
}

#ChatContainer #chat-input textarea {
  width: 85%;
  border-radius: 10px;
  border: none;
  border: 1px solid rgba(0,0,0,.2);
  padding: 5px 8px;
  float: left;
}

#ChatContainer #chat-input button {
  background: none;
  border: none;
  width: 15%;
  padding-top: 6px;
}

#ChatContainer #chat-input button svg {
  width: 24px;
  height: 24px;
  text-align: center;
}

#ChatContainer #chat-input button:hover {
  cursor: pointer;
}

#ChatContainer #chat-input button:hover svg path {
  fill: #A62824;
}

#message-container {
  height: calc(100% - 45px);
  overflow-y: auto;
  padding: 0 10px;
}

.message {
  margin: 7px 0;

}

.message p {
  border-radius: 5px;
  padding: 5px;
  background-color: #eaeaea;
  display: inline-block;
}

.message.mine {
  text-align: right;
}

.message a {
  text-decoration: none;
}

.message a:visited, .message a {
  color: black;
}

.message a:hover {
  color: #A62824;
}

.message p.author {
  background-color: white;
  font-size: .8em;
  display: block;
  text-decoration: none;
}

#LoginContainer form {
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80%;
}

#LoginContainer form p {
  font-size: .8em;
  text-align:center;
}

#LoginContainer form input {
  width: 200px;
  margin: 10px 0;
  height: 30px;
}

.error {
  margin: 5px 0;
  color: red;
}
`;
/* eslint-enable indent */
