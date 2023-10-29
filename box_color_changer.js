const button=document.querySelectorAll(".button")
const body=document.querySelector("body")

button.forEach(function(button){
console.log(button);
button.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target);
    // if(e.target.id==="grey"){
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="blue"){
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="green"){
    //     body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="red"){
    //     body.style.backgroundColor=e.target.id
    // }

    const as=2
    switch (as) {
        case 1:e.target.id="grey";
        body.style.backgroundColor=e.target.id
            break;
        case 2:e.target.id="blue";
        body.style.backgroundColor=e.target.id
            break;
            case 3:e.target.id="green";
            body.style.backgroundColor=e.target.id
            break;
            case 4:e.target.id="red";
            body.style.backgroundColor=e.target.id
            break;
        default:console.log("asad");
            break;
    }
})
})