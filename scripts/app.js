function init() {

// creating the variables:

const questionPickerbtn = document.querySelector('#questionPicker')
const displayQuestion = document.querySelector("#displayQuestion")
const displayanswer = document.querySelector("#displayAnswer")
let splitAnswer = document.querySelector("#splitAnswer")
let hiddenAnswer = document.querySelector("#hiddenAnswer")
let letterContainer = document.querySelector(".letters")
let letterBox = document.querySelector(".letterBox")
let AnswerContainer = document.querySelector(".AnswerPicked")
let answerBox = document.querySelector(".AnswerBox")
let player1 = document.querySelector(".Player1")
let player2 = document.querySelector(".Player2")
const playAgain = document.querySelector("#reset")
const gameWinner = document.querySelector(".winner")

// score :

let score=[0,0];
let current = 0;
let activePlayer = 1;

// the question Object array :


let quizQuestions =[

{
    question: "What geometric shape is generally used for stop signs?" ,
    answer: "octagon",

},
{
    question: "How many languages are written from right to left?" ,
    answer: "twelve",
},
{
    question: "Which animal can be seen on the Porsche logo?" ,
    answer: "horse",
},
{
    question: "What is the common name for dried plums?" ,
    answer: "prunes",
},
{
    question: "What is the most consumed drink in the world?" ,
    answer: "tea",
},
{
    question: "Dump, floater, and wipe are terms used in which team sport?" ,
    answer: "volleyball",
}
,
{
    question: "Area 51 is located in which U S state?" ,
    answer: "nevada",
},
{
    question: "Which country borders 14 nations and crosses 8 time zones?" ,
    answer: "russia",
},
{
    question: "The unicorn is the national animal of which country?" ,
    answer: "scotland",
},
{
    question: "What type of animal is a Flemish giant?" ,
    answer: "rabbit",
},
{
    question: "What is the hottest planet in the solar system?" ,
    answer: "venus",
},
{
    question: "What is the nearest planet to the sun?" ,
    answer: "mercury",
},
{
    question: "In public places in the state of Florida, what's illegal to do when wearing a swimsuit?" ,
    answer: "sing",
}

]

// creating the alpahpet letters:
const letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let letterArray = Array.from(letters);

console.log(letterArray)

letterArray.forEach(letter =>{

    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);

    span.appendChild(theLetter);
    span.className ="letterBox"
    letterBox = document.querySelector('.letterBox')
    letterContainer.appendChild(span)
})





// choosing the question 

function pickQuestion(event)
{

    let letterBox = document.querySelectorAll('.letterBox')
    letterBox.forEach((letterBox =>{
        letterBox.classList.remove('letterBox')
        letterBox.classList.add('letterBox2')
        

    })) 
    

  // selecting random question :
    var quiz = Math.floor(Math.random()*quizQuestions.length);
    randQuestion = quizQuestions[quiz].question
    randAnswer = quizQuestions[quiz].answer   
    console.log("the question is " + quizQuestions[quiz].question )
    console.log("the answer is "  + quizQuestions[quiz].answer)
    
     
 // displaying the questions , answers :   
    document.getElementById("displayQuestion").textContent = quizQuestions[quiz].question

    

 // spliting the answer into letters:

   splitAnswer = randAnswer.split ("")  
   // console.log(splitAnswer)

// creating a span with the answer :

let AnswerArray = Array.from(randAnswer);

console.log(randAnswer)
let i=0

AnswerArray.forEach(Answerletter =>{
    

    let span = document.createElement("span");
    span.setAttribute('id',`id${i}`)
    i = i+1
    let theAnswer = document.createTextNode(Answerletter);
    

    span.appendChild(theAnswer);
    span.className ="AnswerBox"
    AnswerContainer.appendChild(span)
})
  
// disable the question button after clicking
document.getElementById('questionPicker').disabled = true;
   }

questionPickerbtn.addEventListener('click', pickQuestion)



// Handling clicking the letter :

function pickLetter(e){
// choosen letter status
let theStatus= false;


    if(e.target.className ==="letterBox2"){
    e.target.classList.add("clicked");
    let clickedletter = e.target.innerHTML.toLowerCase();
    
     console.log(clickedletter)
    
     console.log(splitAnswer)
           
   
    splitAnswer.forEach((word,index)=>{

        if(clickedletter == word ){
             theStatus= true;
            
            console.log(`we found the letter at ${index}`)
            document.getElementById(`id${index}`).classList.add("ClickedCorrectly")
           

           
           
        }
       
       
             
                             
         
     })
// Scoring methodology :
     if (theStatus === true){
        if(activePlayer ===1){
            
            player1= player1+1
            document.getElementById('Player1').textContent = `Player One Socre:${player1}`
        }
        else {
            
            
            player2 = player2+1
            document.getElementById('Player2').textContent = `Player Two Socre:${player2}`
        }

        
        
        
        console.log(player1)
     }
     //switching between players 
        else{
            activePlayer = activePlayer === 1? 2:1;
            console.log(activePlayer)
            console.log(theStatus)  
           } 
    
        // winning conditions:
           const correctDivs = document.querySelectorAll('.ClickedCorrectly');

           if(correctDivs.length === splitAnswer.length){
            if(player1>player2) {

                console.log('player1 is the winner') 
                document.getElementById('winner').textContent= "Player One is the winner"
            }
            else if(player1<player2){
                console.log('player2 is the winner') 
                document.getElementById('winner').textContent= "Player Two is the winner"  
            }
            else{
                console.log('it is a tie') 
                document.getElementById('winner').textContent= "it is a tie"  
            }
            
           }     

}   





}

 
letterContainer.addEventListener('click', pickLetter) 


// reseting the game:

function resetGame(again){
    document.getElementById("displayQuestion").textContent = "Let's test our knowladge "
    document.getElementById('winner').textContent = ""
    document.getElementById('questionPicker').disabled = false;
    document.getElementById('Player1').textContent = "Player One Score:"
    document.getElementById('Player2').textContent = "Player Two score"
    activePlayer=1
    player1=0
    player2=0 
    AnswerContainer.textContent = " "
    let letterBox = document.querySelectorAll('.letterBox2')
    letterBox.forEach((letterBox =>{
        letterBox.classList.add('letterBox')
        letterBox.classList.remove('clicked')
        letterBox.classList.remove('letterBox2')
    
   })) 
    
    







}
playAgain.addEventListener('click', resetGame)



}



// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)