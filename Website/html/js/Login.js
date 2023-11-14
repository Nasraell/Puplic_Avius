const submit = document.getElementById('submit');



submit.addEventListener("click", function(){
var US_Name = document.getElementById("LgUser_Name").value;
var US_Passwort = document.getElementById("password").value;

window.location.href = 'page2.html';


if(US_Name == "TAS" && US_Passwort == "1501" ){
    alert("Test");
  
};
});
