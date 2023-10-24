let gameboard=document.querySelector("#gameboard")
let infoDisplay=document.querySelector("#info")
let tic=document.querySelector(".tic")
// document.body.style.color="blue"



const startCell=[
    "","","","","","","","",""
]


let go="circle"
infoDisplay.textContent="CIRCLE GOES FIRST"

function createBoard(){
    startCell.forEach((cell,index)=>{
       const cellElement= document.createElement("div")
       cellElement.classList.add("square")
       cellElement.id=index;
       cellElement.addEventListener("click",addGo)
       gameboard.append(cellElement)
       
    })
}

createBoard()

function addGo(e){ 
const goDisplay=document.createElement("div")
goDisplay.classList.add(go)
e.target.append(goDisplay)
go=go==="circle" ? "cross":"circle"
infoDisplay.textContent="IT IS NOW "+go+"'s GO."
e.target.removeEventListener("click",addGo)
document.body.style.color="blue"
// document.body.style.color="red"
checkScore()
}

function checkScore(){

    const Allsquare= document.querySelectorAll(".square")
   
    winningCombos=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]

    ]

    winningCombos.forEach(array =>{

      const circlewins=  array.every(cell => 
            Allsquare[cell].firstChild?.classList.contains("circle"))

         if(circlewins){
            infoDisplay.textContent="CIRCLE WINS!"
            Allsquare.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
         }


    })




    winningCombos.forEach(array =>{

        const crosswins=  array.every(cell => 
              Allsquare[cell].firstChild?.classList.contains("cross"))
  
           if(crosswins){
              infoDisplay.textContent="CROSS WINS!"
              Allsquare.forEach(square => square.replaceWith(square.cloneNode(true)))
              return
           }
  
  
      })
  
    
}