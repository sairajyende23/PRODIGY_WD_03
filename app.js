let boxes = document.querySelectorAll('.box');

let reset = document.querySelector('.reset-btn');

let newGameBtn = document.querySelector('.new-btn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector('.msg');



let count=0;

let turn0 = true;
let borderR=true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turn0 = true;
    count = 0;
    enabledBoxes();
    msgContainer.classList.add("hide");

}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerHTML="O";
            

            turn0 = false;
            borderR = false;
        }else{
            box.innerHTML="X";
            

            turn0 = true;
        }
       
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
         if (count === 9 && !isWinner){
            gameDraw();
         }

        
        
    });
});

const gameDraw=()=>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const showWinner = (winner)=>{
    msg.innerHTML = `Congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const enabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML = "";
    }
}

const disabledBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}




const checkWinner = ()=>{
    for(let pattern of winPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val===pos2Val && pos2Val===pos3Val && pos3Val===pos1Val){
                
                showWinner(pos1Val);
                
                disabledBoxes();

                
                
            

                
            }
        };
        
    }
};

newGameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);