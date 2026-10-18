const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const num1El = document.getElementById("generated-num1")
const num2El = document.getElementById("generated-num2")
const genBtn = document.getElementById("generator-btn")

genBtn.addEventListener('click' , function () {
  let psw1 = ""
  let psw2 = ""
  const length = 15

  for (let i = 0; i<length;i++){
    psw1+= characters[Math.floor(Math.random()*characters.length)]
     psw2+= characters[Math.floor(Math.random()*characters.length)]
  }
num1El.textContent = psw1
num2El.textContent = psw2
  })