"use strict";

var Memory = {
    
    boards: [],
    
    init: function(rows, cols){
       // alert("test");
        
        Memory.boards = RandomGenerator.getPictureArray(4, 4);
        
        console.log(Memory.boards);
        
        Memory.RunPicture();
        
    },
    
    
    RunPicture: function(){
        
        var main = document.getElementById("main");
        var table = document.createElement("table");
        table.className = "table";
        main.appendChild(table);
        
        for (var rows = 0; rows < 4 ; rows++) {
            
          var tr = document.createElement("tr");
          table.appendChild(tr);
        
         for (var cols = 0; cols < 4; cols++){
             
          var img = document.createElement("img");
          img.setAttribute( "src", "pics/0.png");
                
          var a = document.createElement("a");
          a.id="backSide"+ cols;
          var td = document.createElement("td");
          tr.appendChild(td);
          a.appendChild(img);
          a.href = "#";
          td.appendChild(a);
          
          Memory.turnPicture(a);
         }
         
        }
        
    },
    
     turnPicture: function(a){
         
         a.onclick = function(){
             
             
             
         };
        
        
        
    },
    
};

window.onload = Memory.init();



