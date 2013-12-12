"use strict";

var Memory = {
    
    boards: [], //array innehållandes alla nedåtvända bilderna
    turned: [], // arrary som innehåller 2 uppvända bilder
    rows: 4,
    cols: 4,
    countTries: 0,
    countTriesToWin: 0,
    
    init: function(){
      
        Memory.boards = RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
        
        console.log(Memory.boards);
        
        Memory.RunPicture();
        
    },
    
    
    RunPicture: function(){
        
        var memoryPic = -1; // varje bild kommer att vara en egen siffra 
        var main = document.getElementById("main");
        var table = document.createElement("table");
        table.className = "table";
        main.appendChild(table);
        
        for (var r = 0; r < Memory.rows; r++) {
            
          var tr = document.createElement("tr");
          table.appendChild(tr);
        
         for (var c = 0; c < Memory.cols; c++){
             
          var img = document.createElement("img");
          img.setAttribute( "src", "pics/0.png"); //bilden med frågetecknet sätts som startbild på samtilga bilder
                
          var a = document.createElement("a");
          var td = document.createElement("td");
          tr.appendChild(td);
          a.appendChild(img);
          a.href = "#";
          td.appendChild(a);
          memoryPic+=1;
          Memory.turnPicture(a, memoryPic); // anropar funktionen turnPicture och skickar med 2 parametrar
          //console.log(memoryPic);
         }
         
        }
        
    },
    
     turnPicture: function(a, memoryPic){
         
         a.onclick = function(){
             
             //gör så det inte går att klicka på en redan uppvänd bild
             if (a.querySelector("img").getAttribute("src") !== "pics/0.png"){
                 
                 return false;
             }
             
             Memory.turned.push(a); //"pushar" in de bilderna man tryckt på till arrayen turned
             
             //om turned arrayen innehåller mindre än tre element så kan man vända på en bild
             if(Memory.turned.length < 3){
                 
                 a.querySelector("img").setAttribute("src", "pics/" + Memory.boards[memoryPic] + ".png");
             }
             
            //om turned arrayen innehåller 2 element körs funktionen checkIfSame
             if(Memory.turned.length === 2){
                 
                 Memory.checkIfSame(Memory.turned, a);
                
             }
             
         };
        
    },
    
    checkIfSame: function(check, a){
        
        //kollar om de två uppvända bilderna är identiska
        if(check[0].querySelector("img").getAttribute("src") === check[1].querySelector("img").getAttribute("src")){
            
            //kunde tömt arrayen på ett enklare sätt t.ex. Memory.turned = []; men kul att testa lite nytt!
            Memory.turned.pop(); //tar bort det sista elementet i arrayen
            Memory.turned.shift(); //tar bort det första elementet i arrayen.
            console.log(Memory.turned);
            
            Memory.countTries++;
            Memory.countTriesToWin++;
            
        }
        
        //om bilderna inte är identiska
        else{
            
            setTimeout(function() {
                
            check[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            check[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            Memory.turned = [];
            
             Memory.countTriesToWin++;
                
            }, 900);
            
        }
        
        //kollar om alla bilderna är uppvända, i så fall har användaren "vunnit".
        if(Memory.countTries == Memory.boards.length/2){
            setTimeout(function() {
                
                alert("Grattis, du klarade det och det krävdes " + Memory.countTriesToWin + " försök");
                
            }, 900);
        }
        
    },
    
};

window.onload = Memory.init();



