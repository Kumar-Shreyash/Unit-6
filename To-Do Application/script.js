const container=document.getElementById("container")
const display=document.getElementById("display")
const addBtn=document.getElementById("addBtn")
const clearBtn=document.getElementById("clearBtn")

const todo=document.getElementById("todo")
let todos=[]
addBtn.addEventListener("click",addTodo)
clearBtn.addEventListener("click",clearCompleted)
function addTodo(){
    let task=todo.value.trim()
    if(task===""){
        return
    }
    todos=[...todos,{task,completed:false}]
    todo.value=""
    displayTodos()
}

function displayTodos(){
    display.innerHTML=""
    
    todos.forEach((ele)=>{
        let div=document.createElement("div")
        div.innerText=ele.task

        div.addEventListener("click",()=>{
            ele.completed=!ele.completed
            div.style.textDecoration=ele.completed?"line-through":""
        })

        display.appendChild(div)
    })

}

function clearCompleted(){
    todos=todos.filter((ele)=>{
        return ele.completed!==true
    })
    displayTodos()
}