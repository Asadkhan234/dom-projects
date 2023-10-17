

// var araay=["red","blue","green","violet","pink","green"]

// let colorName=document.querySelector("span");


// function colorHandler(){
// let text=Math.floor(Math.random()*6)
// document.body.style.backgroundColor=araay[text]
// colorName.textContent=araay[text]
// console.log(text);
// console.log("set ahi");
// }

var araay1=["red","blue","green","white","gold","green"]
var araay2=["red","green","black","white","yellow","gold"]
let colorName1=document.querySelector("span")
let bute=document.querySelector("#asad")
let para=document.querySelector("p")

function colorHandler1 (){
    console.log("wah bhi");
    let colorchanger=Math.floor(Math.random()*6)
    document.body.style.backgroundColor=araay1[colorchanger]
    colorName1.textContent=araay1[colorchanger]
    bute.style.backgroundColor=araay1[colorchanger]
    let colorchanger1=Math.floor(Math.random()*6)
    bute.textContent=araay1[colorchanger]
    bute.style.color=araay2[colorchanger1]
    para.style.color=araay2[colorchanger1]
}