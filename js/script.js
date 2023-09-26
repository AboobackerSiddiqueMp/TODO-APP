const inpuBox=document.getElementById("inputbox")
const listContainer=document.getElementById("list-container")
function addTask(){

    if(inpuBox.value===''){
        alert("you must write somthing")
    }
    else{
        let li= document.createElement("li")
        li.innerHTML=inpuBox.value
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inpuBox.value=""
    saveData()


}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()

    }
})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
    console.log(data)
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showList()