"use strict";
function check(form)/*function som kollar användarnamn och lösenord*/
{
 if(form.userid.value == "ligan" && form.pswrd.value == "gymnastik")/*följande kollar om användarnamn och lösen stämmer*/
  {
    window.open('info.html');/*om det stämmer öppnas en ny sida*/
  }
 else if(form.userid.value == "ligan" && form.pswrd.value != "gymnastik")/*stämmer användarnamnet men inte lösenordet skickas ett felmedelande*/
 {
   alert("Fel lösenord! Vänligen försök igen.");
  }
  else if(form.userid.value !="ligan" && form.pswrd.value == "gymnastik")/*stämmer lösenordet men inte användarnamnet skickas ett felmedelande*/
  {
      alert("Fel användarnamn! Vänligen försök igen.");
  }
  else if(form.userid.value != "ligan" && form.pswrd.value != "gymnastik")/*stämmer varken användarnamnet och lösenordet skickas ett felmedelande*/
  {
      alert("Fel användarnamn och lösenord! Vänligen försök igen.");
  }
  else
  {
      alert("Ett oväntat fel har uppstått");/*vid annat tillfälle skickas ett oidentifierat felmeddelande*/
  }
  
}