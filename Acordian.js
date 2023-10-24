const acordian=document.getElementsByClassName("contentbx");

for(i=0;i<acordian.length;i++){
    acordian[i].addEventListener("click",function(){
        this.classList.toggle("active")
    })
}