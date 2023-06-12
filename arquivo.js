//Função que adiciona tarefa
function addTask(){

    //Titulo da Tarefa
     var taskTitle = document.querySelector('#caixa').value;

     if(taskTitle){

        //CLONAGEM DO TEMPLATE
        var template = document.querySelector('.template')

        const newTask = template.cloneNode(true)

        //Adicionando o Título

        newTask.querySelector('.title-task').textContent = taskTitle

        //Remover classes desnecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")
        newTask.classList.remove("finish")

        //Adicionando Tarefa na Lista
        var list = document.querySelector('#lista')
        list.appendChild(newTask)

        //Adicona o evento de Remover
        var removeBtn = newTask.querySelector('.remove').addEventListener('click', function(){
            removeTask(this)
        })

        //Adicona o Evento de completar tarefa
        var doneBtn = newTask.querySelector('.done').addEventListener('click', function(){
            completeTask(this)
        })
        

        //Limpar Caixa Texto
        document.querySelector('#caixa').value = ''
     }
}

//Função de Remover tarefa
function removeTask(task){
    task.parentNode.remove(true)
}

//Função de Completar Tarefa
function completeTask(task){
    const taskToComplete = task.parentNode
    taskToComplete.classList.toggle('finish')
}


//Evento que adiciona tarefa

var addBtn = document.querySelector('#adicionar')

addBtn.addEventListener('click', function(e){
    
    e.preventDefault()

    addTask()
})
