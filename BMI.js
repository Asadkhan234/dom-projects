const form=document.querySelector("form")
form.addEventListener("submit",function(e){
    e.preventDefault()
    const height= parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const cheacker=document.querySelector("#cheacker")
   

    const reasult=document.querySelector("#reasult")
// cheak validation on height
if(height === "" || height<0 || isNaN(height)){
    reasult.textContent= `Enter a valid height ${height}`
}else if(weight === "" || weight<0 || isNaN(weight)){
    reasult.textContent= `Enter a valid weight ${weight}`
}else{
    const bmi=(weight / ((height*height) / 1000).toFixed(2))
    // show the reasult
    reasult.innerHTML=`<span>${bmi + " BMI"}</span>`
}


})

if(reasult==18.5){
    cheacker.innerHTML="Under weight"
}else if (reasult==18.6 || cheacker==24.5){
    cheacker.innerHTML="Normal weight"
}else if(reasult==30){
    cheacker.innerHTML="Over weight"
}else{
   
}