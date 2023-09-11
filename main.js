let color = 'black';

document.addEventListener("DOMContentLoaded", function(){
  
  createContainer(16);
  
  let btn = document.querySelector(".popup")
  btn.addEventListener("click", () => {
    let size = getSize();
    createContainer(size);
  })

})


function createContainer(size){
  let contaienr = document.querySelector(".container");

  contaienr.style.gridTemplateColumns  = `repeat(${size},1fr)`;
  contaienr.style.gridTemplateRows  = `repeat(${size},1fr)`;

  let numDivs = size * size;

  for(let i =0;i<numDivs;i++){
    

    let div = document.createElement("div");
    div.setAttribute("class","divss");
    div.addEventListener("mouseover", rgbDiv)
    //div.setAttribute("style","background:yellow")
    contaienr.insertAdjacentElement("beforeend",div);
  }

}


function rgbDiv(){
  
  if(color == "random"){
    this.style.backgroundColor =  `hsl(${Math.random() * 360}, 100%,50%)`
  }
  else{
    this.style.backgroundColor = "black"
  }
  
}

function setColor(colorChoise){
  color = colorChoise;
  
}

function reset(){
  let c = document.querySelectorAll(".divss")
  c.forEach((div) => div.style.backgroundColor = "white")
}
function getSize(){
  let input = prompt("what  will be the size of tha board");
  let message = document.querySelector("#message");
   if(input == ""){
    message.innerHTML = "Please Provide a valid numbger";
   }
   else if(input < 0 || input > 200){
    message.innerHTML = "Provide a number between 1 and 100"
   }
   else{
    message.innerHTML = "you can play"
   }
  return input;
}


