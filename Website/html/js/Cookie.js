let Cookie = localStorage.getItem("Cookiepopupvalue");
const Reset = document.getElementById('Reset');

window.addEventListener("load", function() {



if (Cookie === " " || Cookie === "false"){
    if ( confirm("Press a button!") ) {
    localStorage.removeItem("Cookiepopupvalue");
     alert("Vielen dank fürs Bestätigen ") ;
     localStorage.setItem("Cookiepopupvalue","True");
          } else{

            localStorage.removeItem("Cookiepopupvalue");
            alert("else") ;
            localStorage.setItem("Cookiepopupvalue","false");
          } ;
        };
});

Reset.addEventListener("click",function(){
    localStorage.setItem("Cookiepopupvalue","false");
});



/*

    if (Cookie === false) {
        if ( confirm("Press a button!") ) {
        localStorage.setItem("Cookiepopupvalue",true);
          } ;

    };

*/



