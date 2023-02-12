import Todo from './todo.js' 
import element from './createElements.js';


// let test = new Todo('compras','arroz');

// console.log(test);


(function () {

    let taskSectionUl = document.querySelector('.tasks-section > ul');
    let createTaskButton = document.querySelector('.tasks > button');


    function appendTaskSectionUl(elmt){
        let newLi = element.newLi();
        // console.log(element)
        if(elmt)
            newLi.appendChild(elmt);

        taskSectionUl.appendChild(newLi);

        return newLi;

    }


    function newTaskInputLeave(actualInput){

        // let actualInput = e.currentTarget;
        actualInput.parentNode.remove();

        if(actualInput.value !== '') {
            // newTask.classList.add('.task');
            // newTask.innerText = actualInput.value;
            let newTask = appendTaskSectionUl();
            newTask.classList.add('task');
            newTask.innerText = actualInput.value;

        }



    }


    function addNewTask(e){
        let newInput = element.newInputOfType('text');
        newInput.classList.add('new-task-input')
        newInput.addEventListener('blur',(e) => newTaskInputLeave(e.currentTarget) );
        newInput.addEventListener('keydown',(e) =>  {
            // console.log(e)
            if(e.key === 'Enter'){
                e.currentTarget.blur();
            }
        });

        appendTaskSectionUl(newInput);

        newInput.focus();


    }







    createTaskButton.addEventListener('click',addNewTask);


})()




