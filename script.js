//JS
var piece1;
var piece2;

const solvebtn = document.getElementsByClassName("solve");
const alertbtn = document.getElementsByClassName("alertBtn")[0];
const pieces = document.getElementsByClassName("piece");

alertbtn.addEventListener("click", dClick);
solvebtn[0].addEventListener("click", start);
for (let i = 0; i < pieces.length; i++){
    pieces[i].addEventListener("click", function(){pclick(pieces[i]);});
}

function start(){
    // Math.floor(Math.random() * (max - min)) + min;
    let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    console.log("Start clicked!");

    for (let i = 1; i <= 8; i++){
        let ran1 = Math.floor(Math.random() * (nums.length - 1));
        let ran2 = Math.floor(Math.random() * (nums.length - 1));

        if(i != 8){
            ran1=nums[ran1];
            ran2=nums[ran2];
        
            while (ran1 == ran2){
                ran2 = Math.floor(Math.random() * (nums.length - 1));
                ran2=nums[ran2];
            }

        }else{
            ran1=nums[0];
            ran2=nums[1];
        }
        

        nums.splice(nums.indexOf(ran1), 1);
        nums.splice(nums.indexOf(ran2), 1);

        let temp = document.getElementById(ran1).src;
        document.getElementById(ran1).src = document.getElementById(ran2).src;
        document.getElementById(ran2).src = temp;
    }

}

function win(){
    let won = true;
    currentPieces=document.getElementsByClassName("piece");
    console.log(currentPieces);

    for(let i = 0; i < currentPieces.length; i++){
        let puzzlePiece = pieces[i].firstElementChild;
        if(puzzlePiece.src != pieces[i].firstElementChild.src){
            won = false;
        }
        console.log(puzzlePiece);
        console.log(pieces[i].firstElementChild);
    }

    if(won){
        document.getElementsByClassName("alert")[0].hidden = false;
    }
}

function pclick(p){
    if (piece1 == null){
        piece1 = p;
    }else{
        piece2 = p;
    }

    if(piece1 != null && piece2 != null){
        let temp = piece1.firstElementChild.src;
        piece1.firstElementChild.src = piece2.firstElementChild.src;
        piece2.firstElementChild.src = temp;

        piece1=null;
        piece2=null;

        win();
    }
}

function dClick(){
    document.getElementsByClassName("alert")[0].hidden = true;
}