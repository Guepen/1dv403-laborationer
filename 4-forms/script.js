"use strict";

var Validator = {
    
    firstName: "",
    lastName: "",
    email: "",
    zipcode: "",
    send: "",
    myForm: "",
    counter: 0,
    counterF: 0,
    counterS: 0,
    counterL: 0,
    
    init: function(){
        
        //alert("test");
        Validator.firstName = document.getElementById("fn");
        Validator.lastName = document.getElementById("ln");
        Validator.email = document.getElementById("email");
        Validator.zipcode = document.getElementById("zip");
        Validator.send = document.getElementById("send");
        Validator.myForm =document.getElementById("myform");
        var text = "";
        var postal = "";
        
        var checkValid = function(c){
            
            if(c < 2){
            
             Validator.send.disabled = true;
             console.log(c);
             }
             
             else if(c > 3){
                 
                Validator.send.disabled = false;
                console.log(c);

             }
             
              console.log(c);
             
            
        };
        
        var checkZip = function (p) {
           // alert("test");
            
            console.log(p);
             
            var remove = document.getElementById("error4");
            if(remove){
                remove.parentNode.removeChild(remove);
            }
             
             var div = document.getElementById("z");
             text = document.createTextNode("Ange ett giltligt postnummer");
             var p2 = document.createElement("p");
             p2.id = "error4";
             
             div.appendChild(p2);
             p2.appendChild(text);
             
             //checkedZip();
    
        };
        
        
        checkValid(Validator.counterL);
        
    
        Validator.firstName.onblur = function(){
            
            if (Validator.firstName.value === "" || Validator.firstName.value === null) {
                var div = document.getElementById("fName");
                    
                     text = document.createTextNode("Detta fält får inte lämnas blankt");
                     var p = document.createElement("p");
                     p.id = "error";
                
                     div.appendChild(p);
                     p.appendChild(text);
                     Validator.counterF++;
            }
                
                else if(Validator.counterF > 0){
                    
                    
                    var remove = document.getElementById("error");
                    remove.parentNode.removeChild(remove);
                     
                    Validator.counterF = 0;
                     
                     checkValid(Validator.counterL +=1);
                }
                
                else{
                    
                     checkValid(Validator.counterL +=1);
                    

                }
                
                 console.log(Validator.counterL);
    },
    
        Validator.lastName.onblur = function(){
           
           if (Validator.lastName.value === "" || Validator.lastName.value === null) {
                
                var div = document.getElementById("lName");
                
                    
                     text = document.createTextNode("Detta fält får inte lämnas blankt");
                     var p = document.createElement("p");
                     p.id = "error2";
                
                     div.appendChild(p);
                     p.appendChild(text);
                     
                     Validator.counterS++;
                    
            }
                
                else if(Validator.counterS > 0){
                    
                    var remove = document.getElementById("error2");
                    remove.parentNode.removeChild(remove);
                    
                    Validator.counterS = 0;
                    checkValid(Validator.counterL += 1);
                    
                }
                
                else{
                    
                    checkValid(Validator.counterL += 1);
                    
            }
        
        };
        
        Validator.email.onblur = function(){
            
            if (!Validator.email.value.match(/^[0-9a-z.]{1,64}@[a-z]*?\.[a-z]{2,}$/im)){
                     var div = document.getElementById("e");
                    
                     text = document.createTextNode("Detta fält får inte lämnas blankt");
                     var p = document.createElement("p");
                     p.id = "error3";
                     
                
                     div.appendChild(p);
                     p.appendChild(text);
                     
                     Validator.counter++;
            }
            
            else if(Validator.counter > 0){
                
                 var remove = document.getElementById("error3");
                 remove.parentNode.removeChild(remove);
                
                 checkValid(Validator.counterL += 1);
                 Validator.counter = 0;
            }
            
            else{
                
                checkValid(Validator.counterL += 1);
                
            }
            
        };
        
        Validator.zipcode.onblur = function(){
    
            
         postal = Validator.zipcode.value;
         
        
        if(postal.match(/^\d{3}[ ]\d{2}$/) || postal.match(/^[SE]+[ ]\d{5}$/) || postal.match(/^[SE]+\d{5}$/) || postal.match(/^[SE]+\d{3}-\d{2}$/) || postal.match(/^[SE]+\d{3}[ ]\d{2}$/)|| postal.match(/^[SE]+[ ]\d{3}-\d{2}$/) || postal.match(/^[SE]+[ ]\d{3}[ ]\d{2}$/) || postal.match(/^\d{3}-\d{2}$/) || postal.match(/^\d{5}$/)){
            //alert("JAAAAAAAA");
        
            postal = postal.replace(" ", "");
            postal = postal.replace("SE", "");
            postal = postal.replace("-", "");
            postal = postal.replace("SE", "", "-", "");
            postal = postal.replace(" ", "", " ", "");
            
            checkValid(Validator.counterL += 1);
            var remove = document.getElementById("error4");
            if(remove){
                remove.parentNode.removeChild(remove);
            }
        }
        
        else{
             
            checkZip(postal);
            
        }

         
        Validator.zipcode.value = postal; 
        // console.log(postal.length);
        };
    
        
        
           
            Validator.send.onclick = function(e) {
                
                e.preventDefault();
                
                //alert("test");
                var body = document.getElementById("body");
                var cont = document.createElement("div");
                cont.id = "cont";
                var popup = document.createElement("div");
                popup.className = "popup";
                popup.id = "popupID";
                var cancel = document.createElement("button");
                var buttonText = document.createTextNode("cancel");
                //cancel.className = "cancel";
                cancel.appendChild(buttonText);
                var table = document.createElement("table");
                var inputFor = document.getElementsByTagName("input");
                var select =document.getElementById("price");
               
                
                for(var i = 0; i < inputFor.length; i++){
                    
                    var input = inputFor[i].getAttribute("for");
                    var inputV = inputFor[i].value;
                    console.log(inputV);
                    console.log(input);
                    var tdL = document.createElement("td");
                     var td = document.createElement("td");
                     var tr = document.createElement("tr");
                    tdL = document.createTextNode(inputV);
                   
                    td.appendChild(document.createTextNode(input));
                    
                    tr.appendChild(td);
                    tr.appendChild(tdL);
                    table.appendChild(tr);
                    
                    
                    /*var form = document.getElementById("myform");
                    form.elements.name.value;*/
                    
                    //console.log(input);
                }
                
                var selectAtt = select.getAttribute("name");
                var optionCho = document.createTextNode(select.options[select.selectedIndex].value)
                console.log(selectAtt);
                console.log(optionCho);
                var priceType = document.createTextNode(selectAtt);
                console.log(priceType);
                
                var tdName = document.createElement("td");
                tdName.appendChild(priceType);
                var tdOp = document.createElement("td");
                tdOp.appendChild(optionCho);
                var tr2 = document.createElement("tr");
                tr2.appendChild(tdName);
                tr2.appendChild(tdOp);
                table.appendChild(tr2);
             
             
                
                popup.appendChild(table);
                
                
                
                
                cancel.onclick = function(){ 
                    popup.parentNode.removeChild(popup);
                    opa.parentNode.removeChild(opa);
                
                };
                
                
                var confirm = document.createElement("button");
                var confirmText = document.createTextNode("confrim");
                confirm.appendChild(confirmText);
                
                confirm.onclick = function(){
                    
                    var sub = document.getElementById("myform").submit();
                    
                };
                
                var fir = document.getElementById("fn").value
                
                
                
                var opa = document.createElement("div");
                opa.id = "cover";
                var container = document.getElementById("container");
                
                
                var p = document.createElement("p");
                var textNode = document.createTextNode("Test");
                body.appendChild(cont);
                cont.appendChild(popup);
                popup.appendChild(p);
                p.appendChild(textNode);
                popup.appendChild(cancel);
                popup.appendChild(confirm);
                
                body.insertBefore(opa, body.firstChild);
                //opa.appe(container);
                
                
                
                
          

            
      
            
        };
        
    },

    
    };
    
    window.onload = Validator.init;
    
    