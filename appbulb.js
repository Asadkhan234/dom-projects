
let dark = document.getElementById("dark");
let light = document.getElementById("light")




document.body.style.background = 'black'
document.body.style.color = 'white'

const bulb = document.getElementById('bulb')

function onhandletr(){
    // document.body.style.backgroundColor="black"
    dark.style.display="none"
    light.style.display="block"
    bulb.src = 'bulbOn.jpg'
}

function offhandletr(){
    // document.body.style.backgroundColor="white"
    light.style.display="none"
    dark.style.display="block"
    bulb.src = 'bulboff.jpg'
}

