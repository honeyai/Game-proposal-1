// ==================== rock paper scissors code =============================
let rowshambow = (choice1,choice2) => {

    if (choice1 === choice2 ){
        alert("it is a tie! ")
        let p1 = prompt(" pick player 1: rock, paper or scissors ");
        let p2 = prompt(" pick player 2: rock, paper or scissors ");
        rowshambow(p1 , p2);
    
    }
    
    if(choice1 === "rock" && choice2 === "paper"){
        alert(" player 2 wins ")
        if(user2 === 'run down the hall'){
        pageRedirect()
        }else if(user2 === 'knock on doors'){
            pageRedirect1()
        }
    
    }else if (choice1 === "paper" && choice2 === "rock"){
        alert(" player 1 wins")
        if(user === 'run down the hall'){
            pageRedirect()
            }else if(user === 'knock on doors'){
                pageRedirect1()
            }
    }
    
    if(choice1 === "scissors" && choice2 === "rock"){
        alert(" player 2 wins ")
        if(user2 === 'run down the hall'){
            pageRedirect()
            }else if(user2 === 'knock on doors'){
                pageRedirect1()
            }
    }else if (choice1 === "rock " && choice2 ==="scissors"){
        alert(" player 1 wins ")
        if(user === 'run down the hall'){
            pageRedirect()
            }else if(user === 'knock on doors'){
                pageRedirect1()
            }
    }
    
    if(choice1 === "scissors" && choice2 === "paper"){
        alert(" player 1 wins ")
        if(user === 'run down the hall'){
            pageRedirect()
            }else if(user === 'knock on doors'){
                pageRedirect1()
            }
    }else if (choice1 === "paper" && choice2 === "scissors"){
        alert(" player 2 wins ")
        if(user2 === 'run down the hall'){
            pageRedirect()
            }else if(user2 === 'knock on doors'){
                pageRedirect1()
            }
    }
    
    }
    
    function test2(){
        if( user === user2 && user === 'run down the hall')
        {
            pageRedirect()
        }else if(user === user2 && user === 'knock on doors')
        {
            pageRedirect1()
        }else if(user !== user2) 
        {
        let p1 = prompt(" pick player 1: rock, paper or scissors ");
        let p2 = prompt(" pick player 2: rock, paper or scissors ");
        
        rowshambow(p1 , p2);
        
        }
    }
    
    //====================== Story code (butterfly effect) ======================
    // story will be a horror game based. This will mostly focus on a child who is moving to a new city. mother as recieved a new job and the father is able to work anywhere due to his job. wihtin the story, the day by day events will result the outcome of the bigger story. ultimately this story will have an ending with the death of the mom and dad in the hands of the child.
    
    
    //============= most of the code that will be laid out throughout the story =========
    var user;
    function choose(choice){
        
        user = choice;
    }
    
    var user2;
    function choose2(choice2){
        user2 = choice2;
    }
    
    function test(){
            var input = user;
        console.log(input); 
            document.getElementById("off").disabled = true;
    }
    
    function test1(){
        var input2 = user2;
        console.log(input2);
        document.getElementById("off1").disabled = true;
        // code i found to disable button https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pushbutton_disabled2
        if(user === null && user2 === null){
            
        }else{
            test2() 
        }
    }
    
    