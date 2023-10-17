




let numwork=document.querySelector(".number")
let number=0;


function decreaseHandler() {
   
    console.log("set hai");
    if(number>=-100){
        number--;
    numwork.textContent=number
    numwork.style.color="red"
    }

}

function resetHandler(){
    console.log("set hai");
    number=0
    numwork.textContent=number
    numwork.style.color="blue"
}


function increaseHandler(){
   
    console.log("set hai");
    ++number
    numwork.textContent=number
    numwork.style.color="green"
}