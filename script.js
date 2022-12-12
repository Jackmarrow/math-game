const answer = document.getElementById("answer");
const question = document.getElementById("question");
const newScore = document.getElementById("score");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const correctAnswer = num1 * num2;

let score = JSON.parse(sessionStorage.getItem("score"));

question.innerText = `What is ${num1} multiply by ${num2} ?`;

if(!score){
    score = 0;
}

newScore.innerText = `score: ${score}`;

if(score >= 0){
    newScore.style.color = 'green';
}

else{
    newScore.style.color = 'red';
}

function checkAnswer(){
    if(parseInt(answer.value) === correctAnswer){
        score++
        updateScore();
    }
    else{
        score--
        console.log(score);
        updateScore();
    }

}

function updateScore(){
    sessionStorage.setItem("score",JSON.stringify(score))
}

