class Todo {
    constructor(task, title) {
        this.id = null;
        this.task = task;
        this.title = title;
        this.checked = false;
        this.date = null;
    }

    toggleTodoCheck() {
        this.checked = this.checked ? false : true;
    }

    static findTodo(task,id){
        let found = null;
        let todoTasks = JSON.parse(localStorage.getItem(task));

        if(todoTasks){


            for (let i = 0; i < todoTasks.length; ++i) {
                let actualTodo = todoTasks[i];
                if (actualTodo.id == id) {
                    found = actualTodo;
                    break;
                }
            }

        }

        return found;
    }

    static findTask(task){
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks",JSON.stringify({list:[],nextId:0}));
        }


        let found = null;
        let tasksList = JSON.parse(localStorage.getItem("tasks")).list;

        if(tasksList){


            for (let i = 0; i < tasksList.length; ++i) {
                let actualTask = tasksList[i];
                if (actualTask === task) {
                    found = actualTask;
                    break;
                }
            }

        }

        return found;


    }

    static removeTodo(todo) {
        if (localStorage.getItem(todo.task)) {
            let found = null;
            let todoTasks = localStorage.getItem(todo.task);

            for (let i = 0; i < todoTasks.length; ++i) {
                let actualTodo = todoTasks[i];
                if (actualTodo.id === todo.id) {
                    found = i;
                    break;
                }
            }

            if (found) {
                todoTasks.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    static saveTodo(todo) {
        if (localStorage.getItem(todo.task) === null) {
            localStorage.getItem("tasks").push(todo.task);
            localStorage.setItem(todo.task, []);
        }

        if(removeTodo(todo) === false){
            let id = localStorage.getItem("tasks").id;
            todo.id = id;
            ++id;
        }


        todoTasks.push(todo);
    }


    static loadTasks(){
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks",JSON.stringify({list:[],nextId:0}));
        }


        return JSON.parse(localStorage.getItem("tasks")).list;




    }

    static loadTodos() {

    }

    static saveTask(task){
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks",JSON.stringify({list:[],nextId:0}));
        }


        if(!localStorage.getItem(task)){
            let tasks = JSON.parse(localStorage.getItem("tasks"))

            tasks.list.push(task);
            localStorage.setItem(task,JSON.stringify([]));
            localStorage.setItem("tasks",JSON.stringify(tasks));
        }



    }
}

export default Todo;
