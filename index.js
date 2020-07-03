// rock paper scissors code

let p1 = prompt(" pick player 1: rock, paper or scissors ");
let p2 = prompt(" pick player 2: rock, paper or scissors ");

let rowshambow = (choice1,choice2) => {
if (choice1 === choice2 ){
    alert("it is a tie! ")
}
}
if(choice1 === "rock" && choice2 === "paper"){
    alert(" player 2 wins ")

}else if (choice1 === "paper" && choice2 === "rock"){
    alert(" player 1 wins")
}

if(choice1 === "scissors" && choice2 === "rock"){
    alert(" player 2 wins ")
}else if (choice1 === "rock " && choice2 ==="scissors"){
    alert(" player 1 wins ")
}

if(choice1 === " scissors " && choice2 === " paper "){
    alert(" player 1 wins ")
}else if (choice1 === " paper " && choice2 === " scissors "){
    alert(" player 2 wins ")
}


rowshambow(p1 , p2);