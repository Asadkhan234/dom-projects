
let slide=document.querySelectorAll(".slide-container")
let index=0;
let but=document.querySelector(".rev")
// document.body.style.color="red"

function next1(){
    slide[index].classList.remove("active")
    index=(index+1) % slide.length;
    slide[index].classList.add("active")
    document.body.style.color="red"

}

function back(){
    slide[index].classList .remove("active")
    index=(index-1+slide.length) % slide.length;
    slide[index].classList.add("active")
    document.body.style.color="blue"

}