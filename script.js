document.addEventListener('DOMContentLoaded' , function(){

 var btn = document.getElementById("contactBtn")
    var msgBox= document.getElementById("contactMsg");

  btn.addEventListener("click" , function(){
     msgBox.textContent = "Hi! Nice to meet you.";
  });

});