const listitems=document.querySelector("#listitems")
const unorderlist=document.querySelector("ul")
const searchbutton=document.querySelector("#button")

function submitHandler() {
    let val = listitems.value
    const li = `
    <li id=${val}>
    <h1>${val}</h1>
    <div>
        <span class="listButton" id="edit" onclick="editHandler('${val}')">edit</span>
        <span class="listButton" id="delete" onclick="deleteHandler('${val}')">delete</span>
    </div>
</li>
`
     unorderlist.innerHTML += li
    listitems.value = ""
}

function editHandler(val){
    const li=document.getElementById(val)
    listitems.val=li.children[0].textContent
    searchbutton.textContent="Edit"
    searchbutton.setAttribute("onclick",`newEditHandler('${val}')`)
}



function deleteHandler(val){
    const li=document.getElementById(val)
    unorderlist.removeChild(li)

}


function newEditHandler(val){
    const li=document.getElementById(val)
    li.children[0].innerHTML = listitems.value
    searchbutton.textContent="Search"
    searchbutton.setAttribute("onclick",`submitHandler()`)
    listitems.value=""

}
