class Todo {
    constructor(task, title, isNew = true) {
        this.task = task;
        this.title = title;
        this.checked = false;
        this.date = null;

        if (isNew) {
            if (localStorage.getItem("tasks") === null) {
                localStorage.setItem(
                    "tasks",
                    JSON.stringify({ list: [], nextId: 0 })
                );
            }

            let tasks = JSON.parse(localStorage.getItem("tasks"));

            this.id = tasks.nextId++;
            // console.log(tasks.nextId);

            localStorage.setItem("tasks", JSON.stringify(tasks));
        } else this.id = null;
    }

    toggleTodoCheck() {
        this.checked = this.checked ? false : true;
    }

    static _createTodoFromLocalStorage(todoFromLocalStorage) {
        let newTodo = new Todo(
            todoFromLocalStorage.task,
            todoFromLocalStorage.title,
            false
        );

        newTodo.date = todoFromLocalStorage.date;
        newTodo.checked = todoFromLocalStorage.checked;
        newTodo.id = todoFromLocalStorage.id;

        return newTodo;
    }

    static loadTodos(task) {
        let storageTodos = JSON.parse(localStorage.getItem(task));
        // console.log(storageTodos);

        let localTodos = {}

        for(let actualTodoId in storageTodos){
            // console.log(storageTodo)
            let localTodo = this._createTodoFromLocalStorage(storageTodos[actualTodoId]);
            // console.log(localTodo);

            localTodos[localTodo.id] = localTodo;


        }
        return localTodos;
    }


    static removeTodo(task,todoId){
        let todoListFromTask = JSON.parse(localStorage.getItem(task));
        delete todoListFromTask[todoId];

        localStorage.setItem(task,JSON.stringify(todoListFromTask))
    }


    static saveTodo(task,todo){
        let todoListFromTask = JSON.parse(localStorage.getItem(task));
        todoListFromTask[todo.id] = todo;

        localStorage.setItem(task,JSON.stringify(todoListFromTask))
    }

    static saveTodos(task, todos) {
        localStorage.setItem(task, JSON.stringify(todos));
    }

    static findTask(task) {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem(
                "tasks",
                JSON.stringify({ list: [], nextId: 0 })
            );
        }

        let found = null;
        let tasksList = JSON.parse(localStorage.getItem("tasks")).list;

        if (tasksList) {
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

    static loadTasks() {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem(
                "tasks",
                JSON.stringify({ list: [], nextId: 0 })
            );
        }

        return JSON.parse(localStorage.getItem("tasks")).list;
    }

    static saveTask(task) {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem(
                "tasks",
                JSON.stringify({ list: [], nextId: 0 })
            );
        }

        if (!localStorage.getItem(task)) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));

            tasks.list.push(task);
            localStorage.setItem(task, JSON.stringify({}));
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }

    static removeTask(task){

        if (localStorage.getItem(task)) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            let taskIndex = null;

            // console.log(tasks);

            for(let i = 0; i < tasks.list.length;++i){
                let actualTask = tasks.list[i];
                if(actualTask === task) {
                    taskIndex = i;
                    break;
                }
            }

            tasks.list.splice(taskIndex,1);

            localStorage.removeItem(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
 

    }
}

export default Todo;
