"use strict";

window.onload = function(){
   
        var secret = Math.floor( Math.random() * (100-1)+1) + 1; //ett slumpat tal.
        var guessCounter = 0;
        
        // I denna funktion ska du skriva koden för att hantera "spelet"
        var guess = function(number){
            
                console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
                console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
            
                //kollar om det inte är ett nummer och kastar ut felmeddelande
                if (isNaN(number) || number === ""){
                    return [false, "FEL! Du måste age ett tal!"];
                }
               
               //kollar så att gissningen är mellan talen 0 - 100
                else if (number < 0 || number > 100){
                    return [false, "Gissningen är utanför intervallet 0 - 100"];
                }
               //om talet godkänns körs gissningen och "gissningsräknaren" ökar med 1 för varje gissning
                else{
                    guessCounter += 1;
                }
               
               //om gissningen är rätt
                if (number == secret){
                    return [true, "Rätt! Det hemliga talet var "+ secret +" , du behövde "+ guessCounter +" gissningar"];                
               }
                    
                //om gissningen är för låg
                else if (number < secret){
                    return [false, "Talet är högre!"];
                }
                
                //om gissningen är för hög
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