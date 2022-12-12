const answer = document.getElementById("answer").value;
const question = document.getElementById("question");
const score = document.getElementById("score");
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
function checkAnswer(){
    if(answer === num1 * num2){
        question.innerText = `What is ${num1} multiply by ${num2}`
    }
}


