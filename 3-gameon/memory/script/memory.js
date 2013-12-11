"use strict";

var Memory = {
    
    boards: [],
    rows: 4,
    cols: 4,
    
    init: function(){
       // alert("test");
        
        Memory.boards = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
        
        console.log(Memory.boards);
        
        Memory.RunPicture();
        
    },
    
    
    RunPicture: function(){
        
        var memoryPic = -1;
        var main = document.getElementById("main");
        var table = document.createElement("table");
        table.className = "table";
        main.appendChild(table);
        
        for (var r = 0; r < Memory.rows; r++) {
            
          var tr = document.createElement("tr");
          table.appendChild(tr);
        
         for (var c = 0; c < Memory.cols; c++){
             
          var img = document.createElement("img");
          img.setAttribute( "src", "pics/0.png");
                
          var a = document.createElement("a");
          var td = document.createElement("td");
          tr.appendChild(td);
          a.appendChild(img);
          a.href = "#";
          td.appendChild(a);
          memoryPic+=1;
          
          Memory.turnPicture(a, memoryPic);
         }
         
        }
        
    },
    
     turnPicture: function(a, memoryPic){
         
         a.onclick = function(){
             
             a.querySelector("img").setAttribute("src", "pics/" + Memory.boards[memoryPic] + ".png");
             
         };
        
        
        
    },
    
};

window.onload = Memory.init();



