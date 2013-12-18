"use strict";

    var MessageBoard = {
    
        messages: [],
        
        init : function() {
          
        var send = document.getElementById("submit");
        var textArea = document.getElementById("text");

        textArea.onkeypress = function (e) {
            
            if (e.keyCode == 13 && !e.shiftKey) {

                e.preventDefault();
                newMessage();
            
            }
            
        };

        send.onclick = function(e){
            e.preventDefault();
            newMessage();
        };
        
        function  newMessage() {
            
           

            MessageBoard.messages.push(new Message(textArea.value, new Date()));

            MessageBoard.renderMessages();
            textArea.value = "";
        }
    },
 
            
        
        renderMessages : function() {
            // Raderar alla meddelanden så att de inte upprepas
            document.getElementById("outText").innerHTML= "";
            
            // loopar samtliga meddelanden
            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                MessageBoard.renderMessage(i);
            }
            
            //räknar och skriver ut antal inlägg på sidan
            var messageCounter = document.getElementById("messageCounter");
            var length = (MessageBoard.messages.length);
            messageCounter.innerHTML = length;
        },
        
        renderMessage : function(messageID) {
            
            var div = document.getElementById("outText"); 
            var dateText = document.createElement("p");
            var messText = document.createElement("p");
            dateText.className = "dateText";
            messText.className = "messText";
            dateText.innerHTML = MessageBoard.messages[messageID].getDate().toLocaleTimeString();
            messText.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            messText.appendChild(dateText);
            div.appendChild(messText);            
           
            // knapp för att se fullt datum och lokal tid
            var time = document.createElement("a");
            var imgTime = document.createElement("img");
            imgTime.className = "imgTime";
            imgTime.setAttribute("src", "clock.jpg");
            imgTime.alt = "ShowDateTime";
            dateText.appendChild(time);
            time.appendChild(imgTime);
            
            //innehållet i utskriften för datum och tid
            imgTime.onclick = function() {
                alert ("Meddelandet skrevs " + MessageBoard.messages[messageID].getDate().toLocaleDateString() +
                " klockan " + MessageBoard.messages[messageID].getDate().toLocaleTimeString());
            };
            
            // knapp för att ta bort inlägg
            var a = document.createElement("a");
            var imgDelete = document.createElement("img");
            imgDelete.className = "imgDelete";
            imgDelete.setAttribute("src", "erase.png");
            dateText.appendChild(a);
            a.appendChild(imgDelete);
            
            // Raderar meddelanden via deleteknappen
            a.onclick = function() {
                
                if(window.confirm("är du säker på att du vill ta bort meddelandet?")){
                MessageBoard.removeMessage(messageID);
                }
            };
        },
        
        removeMessage : function(deleteMess) {
            MessageBoard.messages.splice(deleteMess, 1);
            MessageBoard.renderMessages();
        }
    };
        window.onload = MessageBoard.init;
