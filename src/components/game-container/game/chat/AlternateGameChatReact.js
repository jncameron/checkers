import React, { Component } from 'react';


//these imports would all be js files as opposed to Vue .vue single file components 
import BluePlayerMessage from "./BluePlayerMessage";
import RedPlayerMessage from "./RedPlayerMessage";
import NewMessage from "./NewMessage";

const baseUrl = process.env.BASE_URL;

class GameChat extends Component {

  state = {
    usrMsg: [],
    usrMsgs: [],

  }

  componentDidMount() {
    this.listenForMessages();
  }

  componentDidUupdate() {
    {
      var el = document.getElementById("all-messages");
      el.scrollTop = el.scrollHeight;
    }
  }

  listenForMessages() {
    let usrMsgs = this.usrMsgs;
    let usrMsg = this.usrMsg;
    let url = window.location.href;
    let room = url.split("game/").pop();
    let $http = this.$http;
    socket.on("chat", data => {
      usrMsg = data.msg.slice(0, -1);
      let usr = data.usr;
    });
  }

  //

  render() {
    <div id="container">
      <div id="all-messages">
        UsrMsg.map((user, index) => (
          <red-player-message></red-player-message>
        )
          <div v-if="usrMsg[1] !== user.name">
             v-if="opponent.color === 'red'" 
                                :usrMsg="usrMsg[0]" 
                                :opponent="opponent">
            </red-player-message>
            <blue-player-message v-if="opponent.color === 'blue'" 
                                :usrMsg="usrMsg[0]" 
                                :opponent="opponent">
            </blue-player-message>                
          </div>
          
          <div v-if="usrMsg[1] === user.name">
            <blue-player-message v-if="opponent.color === 'red'" 
                                :usrMsg="usrMsg[0]" 
                                :user="user">
            </blue-player-message>  
            <red-player-message v-if="opponent.color === 'blue'" 
                                :usrMsg="usrMsg[0]" 
                                :user="user">
            </red-player-message>  
          </div>
        </div>
      </div>
      <div>
        <div id="new-message-box">
          <new-message id="new-message" :user="user"></new-message>
        </div>
      </div>
      <div id="base">
        <h3> CHAT</h3>
      </div>
    </div>
  }





}

export default {
  props: {
    player1: { type: Object },
    player2: { type: Object },
    user: { type: Object },
    opponent: { type: Object },
  },

  components: {
    "blue-player-message": BluePlayerUserMessage,
    "red-player-message": RedPlayerUserMessage,
    "new-message": NewMessage,
  },

