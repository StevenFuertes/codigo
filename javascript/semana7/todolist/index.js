import { Task } from "./task.js"

const inputTask = document.querySelector(".input_task")
const btnCreate = document.querySelector(".btn_create")
const listTask = document.querySelector(".container_list_task")

const arrayTasks= []


btnCreate.onclick = function(){
    const taskText = inputTask.value

    if (taskText === "") {
        alert("Debe completar la caja de texto")
        return
    }

    const task = new Task(taskText, new Date(),1)
    arrayTasks.push(task)
    // console.log(arrayTasks)
    listTask.innerHTML += task.render()

    inputTask.value = ""
}