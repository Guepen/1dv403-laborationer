"use strict";

window.onload = function(){

	var convertString = function(str){
	str = str.replace(/["a","A"]/g, "#");//byter ut a och A mot #
	var i = 0;
	var converted = "";//den konverterade strängen

	//om inte användaren har skrivti in något så skriv felmeddelande ut
	if(str.length === 0){
    throw new Error("Du måste ange text");
	}
    
    //kollar om bokstaven är en versal eller gemen och konverterar den till det motsatta
    for ( i; i < str.length; i++){ 
        console.log(str.charAt(i));
        if(str.charAt(i) == str.charAt(i).toUpperCase()){
        converted += str.charAt(i).toLowerCase();
        }
        else if(str.charAt(i) == str.charAt(i).toLowerCase()){
            converted += str.charAt(i).toUpperCase();
        }
        
    }
    
    return converted;
        
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};