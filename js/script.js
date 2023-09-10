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
        inpuBox.value=""
    }

}