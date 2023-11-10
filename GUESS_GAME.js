const randomnumber=(Math.ceil(Math.random()*20))
console.log(randomnumber);

const  input=document.querySelector("#input")
const checkbutton=document.querySelector(".check")
const high=document.querySelector(".high")
var scoreHtml=document.querySelector(".score")
let score=20
scoreHtml.textContent=score;
const highScore=document.querySelector(".hsco")
const questionmark=document.querySelector(".que")


const Again = document.querySelector(".btn")
Again.addEventListener("click" , function(){
    location.reload()
    input.value=""
})



checkbutton.addEventListener("click" , function(){
    if(input.value == randomnumber){
     high.textContent="You has Won !"
     document.body.style.backgroundColor="green"
    highScore.textContent=`High score : ${scoreHtml.textContent}`
    questionmark.textContent=randomnumber
    }else {
         input.value="";
        high.textContent = input.value>randomnumber ? "To High!":"T0 Low!";
        scoreHtml.textContent = scoreHtml.textContent-1 ;
    }
})
    