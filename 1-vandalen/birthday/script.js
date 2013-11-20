"use strict";

window.onload = function(){

    
    var birthday = function(date){
    
    var dayMs = 1000*60*60*24; //en dag i millisekunder
    
    var today = new Date();
    var myBirthday = new Date(date.replace(/(\d{4})\.(\d{2})\.(\d{2})/, '$3-$2-$1'));
    
    if(isNaN(myBirthday)){
    throw new Error("Ange formatet YYYY-MM-DD");
    }
    
    /*if(myBirthdayMs < todayMs){
    myBirthday.setFullYear(today.getFullYear() + 1);
    }
    else if(myBirthdayMs > todayMs){
    myBirthday.setFullYear(today.getFullYear());
    }*/
    
    myBirthday.setFullYear(today.getFullYear());
    var todayMs =today.getTime();
    var myBirthdayMs = myBirthday.getTime();
    
    var diff =myBirthdayMs - todayMs;
    
     if (today.getHours() > 12){
    return Math.round((diff/dayMs) +1);
    }
    
   else{
       
   } return Math.round(diff/dayMs);
    
    
    

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
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};