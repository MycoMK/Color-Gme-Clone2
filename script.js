let colors =[
     "rgb(255,0,0)",
     "rgb(160,82,0)",
     "rgb(0,255,0)",
     "rgb(0,255,255)",
     "rgb(0,0,255)",
     "rgb(255,0,255)",
     "rgb(0,0,0)",
     "rgb(255,255,255)",
     "rgb(255,255,0)",
     
     
]

let squares = document.querySelectorAll(".sqaures");

let pickedColor = colors(3);
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("message")

colorDisplay.textContent= pickedColor
messageDisplay.addEventListener("click",resetColors)


resetColors()
function resetColors(){
    for(i = 0; i < squares.length; i++){
        // adding click event to squares
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;

            if(clickedColor === pickedColor){
                messageDisplay.textContent = "correct"
            }else{
                this.style.backgroundColor = " #232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}


