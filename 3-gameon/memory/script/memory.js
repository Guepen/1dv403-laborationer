"use strict";

var Memory = {
    
    boards: [],
    turned: [],
    rows: 4,
    cols: 4,
    countTries: 0,
    
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
          console.log(memoryPic);
          Memory.turnPicture(a, memoryPic);
         }
         
        }
        
    },
    
     turnPicture: function(a, memoryPic){
         
         var countClicks = 0;
         
         a.onclick = function(){
             
             if (a.getElementsByTagName("img")[0].getAttribute("src") !== "pics/0.png"){
                 return false;
             }
             
             Memory.turned.push(a);
             
             if(Memory.turned.length < 3){
             
             a.querySelector("img").setAttribute("src", "pics/" + Memory.boards[memoryPic] + ".png");
             }
             
             if(Memory.turned.length === 2){
                 setTimeout(function() {
                     
                      Memory.checkIfSame(Memory.turned);
                     
                 }, 900);
                
             }
             
             countClicks++;
             
             
         };
        
    },
    
    checkIfSame: function(check){
        
        
        if(check[0].getElementsByTagName("img")[0].getAttribute("src") === check[1].getElementsByTagName("img")[0].getAttribute("src")){
            
            console.log(Memory.turned);
            Memory.turned = [];
            
            Memory.countTries++;
            
            if(Memory.countTries === (Memory.rows*Memory.cols)/2){
                
                alert("Grattis!");
            }
        }
        
        else{
            
            check[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            check[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            Memory.turned = [];
            
            Memory.countTries++;
        }
        
    },
    
};

window.onload = Memory.init();



