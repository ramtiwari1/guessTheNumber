let win = 5
for(let i = 0; i<5; i++){
    let ans = parseInt(prompt("guess the number between 0 to 10 you will get 5 chances :"))
    if(ans!=win){
        if(ans<win){
            console.log("Entered number is smaller than the right number");
        }
        else{
            console.log("Entered number is grater than the right number");
        }
    }else{
        console.log("You win");
        break;
    }
}