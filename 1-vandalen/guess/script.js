"use strict";

window.onload = function(){
   
        var secret = Math.floor( Math.random() * (100-1)+1) + 1; //ett slumpat tal.
        var guessCounter = 0;
        
        // I denna funktion ska du skriva koden för att hantera "spelet"
        var guess = function(number){
            
                console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
                console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
            
                if (isNaN(number) || number === ""){
                    return [false, "FEL! Du måste age ett tal!"];
                }
                else{
                    guessCounter += 1;
                    console.log(guessCounter);
                }
                
                if (number < 0 || number > 100){
                    return [false, "Gissningen är utanför intervallet 0 - 100"];
                }
                
               else if (number == secret){
                    return [true, "Rätt! Det hemliga talet var "+ secret +" , du behövde "+ guessCounter +" gissningar"];                
               }
                    
                else if (number < secret){
                    return [false, "Talet är högre!"];
                }
                
                else if(number > secret){
                    return [false, "Talet är lägre!"];
                }
               
                
            
        };
        
        // ------------------------------------------------------------------------------



        // Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
        var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
        var input = document.querySelector("#number");
        var submit = document.querySelector("#send");

        // Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
        submit.addEventListener("click", function(e){
                e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

                var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
                p.innerHTML = answer[1];                // Skriver ut texten från arrayen som skapats i funktionen.        

                if(answer[0] === true){                                // Om spelet är slut, avaktivera knappen.
                        submit.disabled = true;
                }
        
        });
};