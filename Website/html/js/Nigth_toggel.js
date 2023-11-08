const Day_Night = document.getElementById('Day_Night');
let Desinge = localStorage.getItem("Desinge_save");



Day_Night.addEventListener('click', function handleClick() {
    const initialText = '🌑';
  
    if (Day_Night.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      Day_Night.textContent = '☀️';
    } else {
        Day_Night.textContent = initialText;
    }
  });

  document.getElementById("Day_Night").addEventListener("click", function () {

    var Night = document.getElementById("Night");
    var Day = document.getElementById("Day");

  
    
    if (Night.getAttribute("disabled") === "disabled"  ) {
      localStorage.removeItem("Desinge_save");
      Night.removeAttribute("disabled");
      Day.setAttribute("disabled", "disabled");
      localStorage.setItem("Desinge_save", "Night");
    } else {
      localStorage.removeItem("Desinge_save");
      Day.removeAttribute("disabled");
        Night.setAttribute("disabled", "disabled");
        localStorage.setItem("Desinge_save", "Day");
    }
});


if(Desinge == "Day" ){
  Day.removeAttribute("disabled");
  Night.setAttribute("disabled", "disabled");
  Day_Night.textContent = '☀️';
}else if( Desinge =="Night"){
  Day_Night.textContent = initialText;
  Night.removeAttribute("disabled");
      Day.setAttribute("disabled", "disabled");
};




function clock() {
  var time = new Date(),
      
    
      hours = time.getHours(),
  
      minutes = time.getMinutes(),
      

      seconds = time.getSeconds();
  
  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);
  
    function harold(standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }
  }
  setInterval(clock, 100);