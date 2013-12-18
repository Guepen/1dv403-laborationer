"use strict";

var MessageBoard = {
    messages: [],
    

init: function(e)
{
    var submit = document.querySelector("#submitbutton input");
    var p = document.querySelector("#value");
    var input = document.querySelector("#textarea");
    var i = 0;
    
    //Skapande av counter node
    var counterDiv = document.querySelector("#counter");
    var cP = document.createElement("p");
    counterDiv.appendChild(cP);
    var counterText1 = document.createTextNode("Antal meddelanden: " + i);
    cP.appendChild(counterText1);

    //Händelse-hanterare kopplad till Skicka-knappen
    submit.addEventListener("click", function () {

    MessageBoard.addMessage(input.value);
    
    }, false);
},
    
addMessage: function(message)
{
    
   var messageID = new Message(message);
   var date = new Date();
   var messages = MessageBoard.messages;
   messageID.setDate(date);
   messages.push(messageID);
   MessageBoard.renderMessage(messageID);
        
    },
    
    
    renderMessage: function(messageID)
    {
       var messageArea = document.getElementById("messagearea");

        //Skapande av message-div
        var messageDiv = document.createElement("div");
        messageDiv.id = "message";
        messageArea.appendChild(messageDiv);

        //Skapande av messagetext-div
        var messageTextDiv = document.createElement("div");
        messageTextDiv.id = "messagetext";
        messageDiv.appendChild(messageTextDiv);

        //Skapande av message node
        var p = document.createElement("p");
        p.innerHTML = messageID.getHTMLText();
        messageTextDiv.appendChild(p);

        
    },
    
     renderMessages: function (messages) {
    var i;

    document.getElementById("messagearea").innerHTML = "";

    for (i = 0; i < messages.length; i += 1) {
    MessageBoard.renderMessage(messages[i]);
    }
    },

};

    window.onload = MessageBoard.init;


