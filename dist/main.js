/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createElements.js":
/*!*******************************!*\
  !*** ./src/createElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let element = (function(){


    function createElement(elemName){
        return document.createElement(elemName);
    }

    function  newDiv(){
        return createElement('div');
    }

    function newButton(){
        return createElement('button');
    }

    function newLi(){
        return createElement('li');
    }

    function newUl(){
        return createElement('ul');
    }

    function newInput(){
        return createElement('input')
    }

    function newInputOfType(type){
        let newIn = newInput();
        newIn.setAttribute('type',type);
        return newIn;
    }

    function delElem(selector){
        document.querySelector(selector).remove();
    }

    function newImg(imgSrc){
        let newImg = document.createElement('img');
        newImg.src = imgSrc;

        return newImg;

    }



    return {newDiv,newButton,newLi,newUl,delElem,newInputOfType,newImg};

})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _createElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElements.js */ "./src/createElements.js");



// let test = new Todo('compras','arroz');

// console.log(test);

(function () {
    let taskSectionUl = document.querySelector(".tasks-section > ul");
    let todoSectionUl = document.querySelector(".todo-list");
    let createTaskButton = document.querySelector(".tasks > button");
    let createTodoButton = document.querySelector(".todo-section > button");
    let currentTask = null;
    let currentTodos = null;
    let currentTasks = [];
    let currentTaskIndex = null;

    function updateTasksAttr(){
        // console.log('ee')
        for(let i = 0; i < currentTasks.length;++i){
            console.log(i);
            let actualTask = currentTasks[i];
            let buttonElm = actualTask.nextElementSibling;

            actualTask.setAttribute('data-task-index',i);
            buttonElm.setAttribute('data-task-index',i);
        }
    }

    function keydownBlur(e) {
        // console.log(e)
        if (e.key === "Enter" || e.key === "Escape") {
            e.currentTarget.blur();
        }
    }

    function createLiWithElmt(elmt) {
        let newLi = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newLi();
        // console.log(element)
        if (elmt) newLi.appendChild(elmt);

        return newLi;
    }

    function appendTodoSectionUl(elmt) {
        // let newLi = createLiWithElmt(elmt);

        todoSectionUl.appendChild(elmt);

        return elmt;
    }

    function appendTaskSectionUl(elmt) {
        let newLi = createLiWithElmt(elmt);

        taskSectionUl.appendChild(newLi);

        return newLi;
    }

    function createTask(task) {
        let newTask = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newDiv();
        newTask.classList.add("task");
        newTask.innerText = task;
        newTask.setAttribute("data-task", task);
        newTask.setAttribute("data-task-index", currentTasks.length);

        let newTaskLi = appendTaskSectionUl(newTask);
        let deleteBtn = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newButton();
        let newImg = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newImg("../img/trash.svg");

        deleteBtn.classList.add("delete-btn");
        deleteBtn.appendChild(newImg);
        deleteBtn.setAttribute("data-task-index", currentTasks.length);
        deleteBtn.addEventListener("click", (e) => {
            let eventTaskIndex = e.currentTarget.getAttribute('data-task-index');
            // console.log({currentTask,eventTaskIndex});
            if (currentTask === currentTasks[eventTaskIndex]) {
                // console.log(currentTasks)
                let nextSibling = (+eventTaskIndex + 1) % currentTasks.length;
                console.log({nextSibling, eventTaskIndex:+eventTaskIndex})

                if (nextSibling === +eventTaskIndex)
                    nextSibling = null;

                currentTasks[eventTaskIndex].classList.remove("focused-task");

                if (nextSibling !== null) {
                    currentTaskIndex = nextSibling;
                    currentTask = currentTasks[nextSibling];
                    currentTask.classList.add("focused-task");
                } else {
                    currentTask = null;
                    currentTaskIndex = null;
                }

                loadTodosOfCurrentTask();
            }

            let task = currentTasks[eventTaskIndex].getAttribute('data-task');
            // console.log(task);
            // return;

            e.currentTarget.parentNode.remove();

            currentTasks.splice(eventTaskIndex,1);

            // console.log('ee');
            updateTasksAttr();

            console.log(currentTasks);
            _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(task);
        });

        newTaskLi.classList.add("task-li");
        newTaskLi.appendChild(deleteBtn);
        currentTasks.push(newTask);

        if(currentTask === null){
            currentTask = newTask;
            currentTask.classList.add('focused-task');
            currentTaskIndex = 0;
            loadTodosOfCurrentTask();
        }

        return newTask;
    }

    function newTaskInputLeave(actualInput) {
        // let actualInput = e.currentTarget;
        // console.log('ewe')
        actualInput.parentNode.remove();
        // actualInput.removeEventListener('blur');

        if (actualInput.value !== "") {
            if (_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].findTask(actualInput.value)) {
                return;
            }

            let newTask = createTask(actualInput.value);

            // if (currentTask) {
            // currentTask.classList.remove("focused-task");
            // }
            // newTask.classList.add("focused-task");
            newTask.addEventListener("click", changeCurrentTask);
            // currentTask = newTask;

            _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTask(actualInput.value);
        }
    }

    function addNewTask(e) {
        // if(currentFocusedInput.value) {
        // console.log('uwu')
        // }

        let newInput = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInputOfType("text");
        newInput.classList.add("new-task-input");
        newInput.addEventListener("blur", (e) =>
            newTaskInputLeave(e.currentTarget)
        );
        newInput.addEventListener("keydown", keydownBlur);

        let newLi = appendTaskSectionUl(newInput);
        newLi.classList.add('li-input')
        newInput.focus();
        // currentFocusedInput = newInput;
    }

    function changeCurrentTask(e) {
        console.log(currentTasks);
        if(e.currentTarget === currentTask) return;
        currentTask.classList.remove("focused-task");
        e.currentTarget.classList.add("focused-task");

        currentTask = e.currentTarget;
        currentTaskIndex = e.currentTarget.getAttribute('data-task-index');
        loadTodosOfCurrentTask();
    }

    function loadTodosOfCurrentTask() {
        currentTodos = {};

        removeElements(todoSectionUl);

        if (!currentTask) return;

        let dataTask = currentTask.getAttribute("data-task");

        Object.assign(currentTodos, _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadTodos(dataTask));

        // console.log(dataTask);

        for (let actualTodoId in currentTodos) {
            // console.log(currentTodos[actualTodoId]);
            createTodoDOM(currentTodos[actualTodoId]);
        }
    }

    function loadTasks() {
        let initialTaskList = _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadTasks();

        for (let i = 0; i < initialTaskList.length; ++i) {
            let task = initialTaskList[i];
            let taskElem = createTask(task);
            taskElem.addEventListener("click", changeCurrentTask);
            // currentTasks.push(taskElem);

            if (i === 0) {
                taskElem.classList.add("focused-task");
                currentTask = taskElem;
                currentTaskIndex = 0;
                loadTodosOfCurrentTask();
            }
        }
    }

    function removeElements(elm) {
        while (elm.firstChild) {
            elm.firstChild.remove();
        }
    }

    function createTodoDOM(todo) {
        if (currentTask === null) return;

        let newRow = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newDiv();
        let newCheckbox = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInputOfType("checkbox");
        let newDate =
            todo && todo.date
                ? _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newDiv()
                : _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInputOfType("date");

        let newTitle = todo ? _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newDiv() : _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInputOfType("text");
        let deleteBtn = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newButton();
        let newImg = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newImg("../img/trash.svg");
        // deleteBtn.innerText = 'x';
        deleteBtn.classList.add("delete-btn");
        deleteBtn.type = "button";
        deleteBtn.appendChild(newImg);

        newRow.classList.add("todo-row");
        newCheckbox.classList.add("todo-finished");

        deleteBtn.addEventListener("click", (e) => {
            let todoId = newRow.getAttribute("data-id");
            let task = currentTask.getAttribute("data-task");

            delete currentTodos[todoId];
            newRow.remove();

            _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTodo(task, todoId);
        });

        newCheckbox.addEventListener("input", (e) => {
            // console.log(e.currentTarget.checked);
            let todoId = newRow.getAttribute("data-id");
            let task = currentTask.getAttribute("data-task");

            currentTodos[todoId].checked = e.currentTarget.checked;

            _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTodo(task, currentTodos[todoId]);
        });

        if (todo && todo.date) {
            newDate.classList.add("todo-date");
            newDate.innerText = todo.date;
        } else {
            newDate.classList.add("todo-date-input");
            newDate.addEventListener("blur", (e) => {
                let date = e.currentTarget.value;
                if (date != "") {
                    let newDiv = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newDiv();
                    let todoId = newRow.getAttribute("data-id");
                    let task = currentTask.getAttribute("data-task");
                    newDiv.classList.add("todo-date");
                    newDiv.innerText = date;
                    newRow.replaceChild(newDiv, newDate);

                    currentTodos[todoId].date = date;

                    _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTodo(task, currentTodos[todoId]);
                }
            });
        }

        newRow.appendChild(newCheckbox);
        newRow.appendChild(newTitle);
        newRow.appendChild(newDate);
        newRow.appendChild(deleteBtn);

        appendTodoSectionUl(newRow);

        if (!todo) {
            newTitle.classList.add("new-todo-input");
            newTitle.addEventListener("blur", (e) => {
                let title = e.currentTarget.value;
                let task = currentTask.getAttribute("data-task");

                if (title !== "") {
                    let actualDiv = e.currentTarget.parentNode;
                    let newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"](task, title);
                    let newDiv = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newDiv();

                    // e.currentTarget.remove();
                    // console.log(newTodo);

                    newDiv.classList.add("todo-title");
                    newDiv.innerText = newTodo.title;
                    newRow.setAttribute("data-id", newTodo.id);

                    actualDiv.replaceChild(newDiv, e.currentTarget);

                    currentTodos[newTodo.id] = newTodo;

                    _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTodo(task, newTodo);

                    // console.log(currentTodos);
                } else {
                    newRow.remove();
                }
            });
            newTitle.addEventListener("keydown", keydownBlur);
            newTitle.focus();
        } else {
            newTitle.classList.add("todo-title");
            newTitle.innerText = todo.title;
            newRow.setAttribute("data-id", todo.id);
            newCheckbox.checked = todo.checked;
        }
    }

    createTaskButton.addEventListener("focus", addNewTask);
    createTodoButton.addEventListener("focus", (e) => createTodoDOM());

    loadTasks();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxZQUFZLHlEQUFhO0FBQ3pCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlFQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLHlEQUFhO0FBQ2pDO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxnREFBSTtBQUMxQyxpQ0FBaUMsaUVBQWM7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQix5REFBYTs7QUFFakM7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGVsZW1lbnQgPSAoZnVuY3Rpb24oKXtcblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtTmFtZSl7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1OYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgbmV3RGl2KCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdCdXR0b24oKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0xpKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1VsKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0lucHV0KCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3SW5wdXRPZlR5cGUodHlwZSl7XG4gICAgICAgIGxldCBuZXdJbiA9IG5ld0lucHV0KCk7XG4gICAgICAgIG5ld0luLnNldEF0dHJpYnV0ZSgndHlwZScsdHlwZSk7XG4gICAgICAgIHJldHVybiBuZXdJbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxFbGVtKHNlbGVjdG9yKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3SW1nKGltZ1NyYyl7XG4gICAgICAgIGxldCBuZXdJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbmV3SW1nLnNyYyA9IGltZ1NyYztcblxuICAgICAgICByZXR1cm4gbmV3SW1nO1xuXG4gICAgfVxuXG5cblxuICAgIHJldHVybiB7bmV3RGl2LG5ld0J1dHRvbixuZXdMaSxuZXdVbCxkZWxFbGVtLG5ld0lucHV0T2ZUeXBlLG5ld0ltZ307XG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudDsiLCJjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCB0aXRsZSwgaXNOZXcgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICBcInRhc2tzXCIsXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbGlzdDogW10sIG5leHRJZDogMCB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cbiAgICAgICAgICAgIHRoaXMuaWQgPSB0YXNrcy5uZXh0SWQrKztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzLm5leHRJZCk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAgICAgfSBlbHNlIHRoaXMuaWQgPSBudWxsO1xuICAgIH1cblxuICAgIHRvZ2dsZVRvZG9DaGVjaygpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5jaGVja2VkID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBfY3JlYXRlVG9kb0Zyb21Mb2NhbFN0b3JhZ2UodG9kb0Zyb21Mb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICAgICAgICAgIHRvZG9Gcm9tTG9jYWxTdG9yYWdlLnRhc2ssXG4gICAgICAgICAgICB0b2RvRnJvbUxvY2FsU3RvcmFnZS50aXRsZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgbmV3VG9kby5kYXRlID0gdG9kb0Zyb21Mb2NhbFN0b3JhZ2UuZGF0ZTtcbiAgICAgICAgbmV3VG9kby5jaGVja2VkID0gdG9kb0Zyb21Mb2NhbFN0b3JhZ2UuY2hlY2tlZDtcbiAgICAgICAgbmV3VG9kby5pZCA9IHRvZG9Gcm9tTG9jYWxTdG9yYWdlLmlkO1xuXG4gICAgICAgIHJldHVybiBuZXdUb2RvO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVG9kb3ModGFzaykge1xuICAgICAgICBsZXQgc3RvcmFnZVRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2VUb2Rvcyk7XG5cbiAgICAgICAgbGV0IGxvY2FsVG9kb3MgPSB7fVxuXG4gICAgICAgIGZvcihsZXQgYWN0dWFsVG9kb0lkIGluIHN0b3JhZ2VUb2Rvcyl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlVG9kbylcbiAgICAgICAgICAgIGxldCBsb2NhbFRvZG8gPSB0aGlzLl9jcmVhdGVUb2RvRnJvbUxvY2FsU3RvcmFnZShzdG9yYWdlVG9kb3NbYWN0dWFsVG9kb0lkXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFRvZG8pO1xuXG4gICAgICAgICAgICBsb2NhbFRvZG9zW2xvY2FsVG9kby5pZF0gPSBsb2NhbFRvZG87XG5cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFRvZG9zO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHJlbW92ZVRvZG8odGFzayx0b2RvSWQpe1xuICAgICAgICBsZXQgdG9kb0xpc3RGcm9tVGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGFzaykpO1xuICAgICAgICBkZWxldGUgdG9kb0xpc3RGcm9tVGFza1t0b2RvSWRdO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2ssSlNPTi5zdHJpbmdpZnkodG9kb0xpc3RGcm9tVGFzaykpXG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2F2ZVRvZG8odGFzayx0b2RvKXtcbiAgICAgICAgbGV0IHRvZG9MaXN0RnJvbVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spKTtcbiAgICAgICAgdG9kb0xpc3RGcm9tVGFza1t0b2RvLmlkXSA9IHRvZG87XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzayxKU09OLnN0cmluZ2lmeSh0b2RvTGlzdEZyb21UYXNrKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZVRvZG9zKHRhc2ssIHRvZG9zKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2ssIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmRUYXNrKHRhc2spIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIFwidGFza3NcIixcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGxpc3Q6IFtdLCBuZXh0SWQ6IDAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xuICAgICAgICBsZXQgdGFza3NMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKS5saXN0O1xuXG4gICAgICAgIGlmICh0YXNrc0xpc3QpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdHVhbFRhc2sgPSB0YXNrc0xpc3RbaV07XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbFRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBhY3R1YWxUYXNrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUYXNrcygpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIFwidGFza3NcIixcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGxpc3Q6IFtdLCBuZXh0SWQ6IDAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKS5saXN0O1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlVGFzayh0YXNrKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICBcInRhc2tzXCIsXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBsaXN0OiBbXSwgbmV4dElkOiAwIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKSkge1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblxuICAgICAgICAgICAgdGFza3MubGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzaywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByZW1vdmVUYXNrKHRhc2spe1xuXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKSkge1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcbiAgICAgICAgICAgIGxldCB0YXNrSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrcyk7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrcy5saXN0Lmxlbmd0aDsrK2kpe1xuICAgICAgICAgICAgICAgIGxldCBhY3R1YWxUYXNrID0gdGFza3MubGlzdFtpXTtcbiAgICAgICAgICAgICAgICBpZihhY3R1YWxUYXNrID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFza3MubGlzdC5zcGxpY2UodGFza0luZGV4LDEpO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0YXNrKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAgICAgfVxuIFxuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvLmpzXCI7XG5pbXBvcnQgZWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50cy5qc1wiO1xuXG4vLyBsZXQgdGVzdCA9IG5ldyBUb2RvKCdjb21wcmFzJywnYXJyb3onKTtcblxuLy8gY29uc29sZS5sb2codGVzdCk7XG5cbihmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRhc2tTZWN0aW9uVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLXNlY3Rpb24gPiB1bFwiKTtcbiAgICBsZXQgdG9kb1NlY3Rpb25VbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICAgIGxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcyA+IGJ1dHRvblwiKTtcbiAgICBsZXQgY3JlYXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uID4gYnV0dG9uXCIpO1xuICAgIGxldCBjdXJyZW50VGFzayA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRUb2RvcyA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRUYXNrcyA9IFtdO1xuICAgIGxldCBjdXJyZW50VGFza0luZGV4ID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRhc2tzQXR0cigpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZWUnKVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhc2tzLmxlbmd0aDsrK2kpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICBsZXQgYWN0dWFsVGFzayA9IGN1cnJlbnRUYXNrc1tpXTtcbiAgICAgICAgICAgIGxldCBidXR0b25FbG0gPSBhY3R1YWxUYXNrLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgYWN0dWFsVGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pbmRleCcsaSk7XG4gICAgICAgICAgICBidXR0b25FbG0uc2V0QXR0cmlidXRlKCdkYXRhLXRhc2staW5kZXgnLGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5ZG93bkJsdXIoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpV2l0aEVsbXQoZWxtdCkge1xuICAgICAgICBsZXQgbmV3TGkgPSBlbGVtZW50Lm5ld0xpKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICAgIGlmIChlbG10KSBuZXdMaS5hcHBlbmRDaGlsZChlbG10KTtcblxuICAgICAgICByZXR1cm4gbmV3TGk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVG9kb1NlY3Rpb25VbChlbG10KSB7XG4gICAgICAgIC8vIGxldCBuZXdMaSA9IGNyZWF0ZUxpV2l0aEVsbXQoZWxtdCk7XG5cbiAgICAgICAgdG9kb1NlY3Rpb25VbC5hcHBlbmRDaGlsZChlbG10KTtcblxuICAgICAgICByZXR1cm4gZWxtdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUYXNrU2VjdGlvblVsKGVsbXQpIHtcbiAgICAgICAgbGV0IG5ld0xpID0gY3JlYXRlTGlXaXRoRWxtdChlbG10KTtcblxuICAgICAgICB0YXNrU2VjdGlvblVsLmFwcGVuZENoaWxkKG5ld0xpKTtcblxuICAgICAgICByZXR1cm4gbmV3TGk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gZWxlbWVudC5uZXdEaXYoKTtcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgbmV3VGFzay5pbm5lclRleHQgPSB0YXNrO1xuICAgICAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiLCB0YXNrKTtcbiAgICAgICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIiwgY3VycmVudFRhc2tzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IG5ld1Rhc2tMaSA9IGFwcGVuZFRhc2tTZWN0aW9uVWwobmV3VGFzayk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBlbGVtZW50Lm5ld0J1dHRvbigpO1xuICAgICAgICBsZXQgbmV3SW1nID0gZWxlbWVudC5uZXdJbWcoXCIuLi9pbWcvdHJhc2guc3ZnXCIpO1xuXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKG5ld0ltZyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIiwgY3VycmVudFRhc2tzLmxlbmd0aCk7XG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBldmVudFRhc2tJbmRleCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pbmRleCcpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe2N1cnJlbnRUYXNrLGV2ZW50VGFza0luZGV4fSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2sgPT09IGN1cnJlbnRUYXNrc1tldmVudFRhc2tJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VGFza3MpXG4gICAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gKCtldmVudFRhc2tJbmRleCArIDEpICUgY3VycmVudFRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7bmV4dFNpYmxpbmcsIGV2ZW50VGFza0luZGV4OitldmVudFRhc2tJbmRleH0pXG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dFNpYmxpbmcgPT09ICtldmVudFRhc2tJbmRleClcbiAgICAgICAgICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2tzW2V2ZW50VGFza0luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZC10YXNrXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrSW5kZXggPSBuZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhc2sgPSBjdXJyZW50VGFza3NbbmV4dFNpYmxpbmddO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFzay5jbGFzc0xpc3QuYWRkKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhc2tJbmRleCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbG9hZFRvZG9zT2ZDdXJyZW50VGFzaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrc1tldmVudFRhc2tJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgLy8gcmV0dXJuO1xuXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgY3VycmVudFRhc2tzLnNwbGljZShldmVudFRhc2tJbmRleCwxKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VlJyk7XG4gICAgICAgICAgICB1cGRhdGVUYXNrc0F0dHIoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tzKTtcbiAgICAgICAgICAgIFRvZG8ucmVtb3ZlVGFzayh0YXNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3VGFza0xpLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxpXCIpO1xuICAgICAgICBuZXdUYXNrTGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICAgICAgY3VycmVudFRhc2tzLnB1c2gobmV3VGFzayk7XG5cbiAgICAgICAgaWYoY3VycmVudFRhc2sgPT09IG51bGwpe1xuICAgICAgICAgICAgY3VycmVudFRhc2sgPSBuZXdUYXNrO1xuICAgICAgICAgICAgY3VycmVudFRhc2suY2xhc3NMaXN0LmFkZCgnZm9jdXNlZC10YXNrJyk7XG4gICAgICAgICAgICBjdXJyZW50VGFza0luZGV4ID0gMDtcbiAgICAgICAgICAgIGxvYWRUb2Rvc09mQ3VycmVudFRhc2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdUYXNrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1Rhc2tJbnB1dExlYXZlKGFjdHVhbElucHV0KSB7XG4gICAgICAgIC8vIGxldCBhY3R1YWxJbnB1dCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2V3ZScpXG4gICAgICAgIGFjdHVhbElucHV0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgIC8vIGFjdHVhbElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInKTtcblxuICAgICAgICBpZiAoYWN0dWFsSW5wdXQudmFsdWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGlmIChUb2RvLmZpbmRUYXNrKGFjdHVhbElucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKGFjdHVhbElucHV0LnZhbHVlKTtcblxuICAgICAgICAgICAgLy8gaWYgKGN1cnJlbnRUYXNrKSB7XG4gICAgICAgICAgICAvLyBjdXJyZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICAgICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ3VycmVudFRhc2spO1xuICAgICAgICAgICAgLy8gY3VycmVudFRhc2sgPSBuZXdUYXNrO1xuXG4gICAgICAgICAgICBUb2RvLnNhdmVUYXNrKGFjdHVhbElucHV0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE5ld1Rhc2soZSkge1xuICAgICAgICAvLyBpZihjdXJyZW50Rm9jdXNlZElucHV0LnZhbHVlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1d3UnKVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgbGV0IG5ld0lucHV0ID0gZWxlbWVudC5uZXdJbnB1dE9mVHlwZShcInRleHRcIik7XG4gICAgICAgIG5ld0lucHV0LmNsYXNzTGlzdC5hZGQoXCJuZXctdGFzay1pbnB1dFwiKTtcbiAgICAgICAgbmV3SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+XG4gICAgICAgICAgICBuZXdUYXNrSW5wdXRMZWF2ZShlLmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICk7XG4gICAgICAgIG5ld0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleWRvd25CbHVyKTtcblxuICAgICAgICBsZXQgbmV3TGkgPSBhcHBlbmRUYXNrU2VjdGlvblVsKG5ld0lucHV0KTtcbiAgICAgICAgbmV3TGkuY2xhc3NMaXN0LmFkZCgnbGktaW5wdXQnKVxuICAgICAgICBuZXdJbnB1dC5mb2N1cygpO1xuICAgICAgICAvLyBjdXJyZW50Rm9jdXNlZElucHV0ID0gbmV3SW5wdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQ3VycmVudFRhc2soZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza3MpO1xuICAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQgPT09IGN1cnJlbnRUYXNrKSByZXR1cm47XG4gICAgICAgIGN1cnJlbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c2VkLXRhc2tcIik7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZm9jdXNlZC10YXNrXCIpO1xuXG4gICAgICAgIGN1cnJlbnRUYXNrID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBjdXJyZW50VGFza0luZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrLWluZGV4Jyk7XG4gICAgICAgIGxvYWRUb2Rvc09mQ3VycmVudFRhc2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVG9kb3NPZkN1cnJlbnRUYXNrKCkge1xuICAgICAgICBjdXJyZW50VG9kb3MgPSB7fTtcblxuICAgICAgICByZW1vdmVFbGVtZW50cyh0b2RvU2VjdGlvblVsKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRUYXNrKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGRhdGFUYXNrID0gY3VycmVudFRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oY3VycmVudFRvZG9zLCBUb2RvLmxvYWRUb2RvcyhkYXRhVGFzaykpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFUYXNrKTtcblxuICAgICAgICBmb3IgKGxldCBhY3R1YWxUb2RvSWQgaW4gY3VycmVudFRvZG9zKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VG9kb3NbYWN0dWFsVG9kb0lkXSk7XG4gICAgICAgICAgICBjcmVhdGVUb2RvRE9NKGN1cnJlbnRUb2Rvc1thY3R1YWxUb2RvSWRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcbiAgICAgICAgbGV0IGluaXRpYWxUYXNrTGlzdCA9IFRvZG8ubG9hZFRhc2tzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0aWFsVGFza0xpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gaW5pdGlhbFRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IHRhc2tFbGVtID0gY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIHRhc2tFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDdXJyZW50VGFzayk7XG4gICAgICAgICAgICAvLyBjdXJyZW50VGFza3MucHVzaCh0YXNrRWxlbSk7XG5cbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGFza0VsZW0uY2xhc3NMaXN0LmFkZChcImZvY3VzZWQtdGFza1wiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzayA9IHRhc2tFbGVtO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIGxvYWRUb2Rvc09mQ3VycmVudFRhc2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzKGVsbSkge1xuICAgICAgICB3aGlsZSAoZWxtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGVsbS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kb0RPTSh0b2RvKSB7XG4gICAgICAgIGlmIChjdXJyZW50VGFzayA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBuZXdSb3cgPSBlbGVtZW50Lm5ld0RpdigpO1xuICAgICAgICBsZXQgbmV3Q2hlY2tib3ggPSBlbGVtZW50Lm5ld0lucHV0T2ZUeXBlKFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxldCBuZXdEYXRlID1cbiAgICAgICAgICAgIHRvZG8gJiYgdG9kby5kYXRlXG4gICAgICAgICAgICAgICAgPyBlbGVtZW50Lm5ld0RpdigpXG4gICAgICAgICAgICAgICAgOiBlbGVtZW50Lm5ld0lucHV0T2ZUeXBlKFwiZGF0ZVwiKTtcblxuICAgICAgICBsZXQgbmV3VGl0bGUgPSB0b2RvID8gZWxlbWVudC5uZXdEaXYoKSA6IGVsZW1lbnQubmV3SW5wdXRPZlR5cGUoXCJ0ZXh0XCIpO1xuICAgICAgICBsZXQgZGVsZXRlQnRuID0gZWxlbWVudC5uZXdCdXR0b24oKTtcbiAgICAgICAgbGV0IG5ld0ltZyA9IGVsZW1lbnQubmV3SW1nKFwiLi4vaW1nL3RyYXNoLnN2Z1wiKTtcbiAgICAgICAgLy8gZGVsZXRlQnRuLmlubmVyVGV4dCA9ICd4JztcbiAgICAgICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgICAgICBkZWxldGVCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChuZXdJbWcpO1xuXG4gICAgICAgIG5ld1Jvdy5jbGFzc0xpc3QuYWRkKFwidG9kby1yb3dcIik7XG4gICAgICAgIG5ld0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZpbmlzaGVkXCIpO1xuXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0b2RvSWQgPSBuZXdSb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgICAgIGxldCB0YXNrID0gY3VycmVudFRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpO1xuXG4gICAgICAgICAgICBkZWxldGUgY3VycmVudFRvZG9zW3RvZG9JZF07XG4gICAgICAgICAgICBuZXdSb3cucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIFRvZG8ucmVtb3ZlVG9kbyh0YXNrLCB0b2RvSWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBuZXdDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICAgIGxldCB0b2RvSWQgPSBuZXdSb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgICAgIGxldCB0YXNrID0gY3VycmVudFRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpO1xuXG4gICAgICAgICAgICBjdXJyZW50VG9kb3NbdG9kb0lkXS5jaGVja2VkID0gZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgICAgIFRvZG8uc2F2ZVRvZG8odGFzaywgY3VycmVudFRvZG9zW3RvZG9JZF0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodG9kbyAmJiB0b2RvLmRhdGUpIHtcbiAgICAgICAgICAgIG5ld0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gdG9kby5kYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3RGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlLWlucHV0XCIpO1xuICAgICAgICAgICAgbmV3RGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChkYXRlICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGVsZW1lbnQubmV3RGl2KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvSWQgPSBuZXdSb3cuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBjdXJyZW50VGFzay5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIik7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuaW5uZXJUZXh0ID0gZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LnJlcGxhY2VDaGlsZChuZXdEaXYsIG5ld0RhdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb2Rvc1t0b2RvSWRdLmRhdGUgPSBkYXRlO1xuXG4gICAgICAgICAgICAgICAgICAgIFRvZG8uc2F2ZVRvZG8odGFzaywgY3VycmVudFRvZG9zW3RvZG9JZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld0NoZWNrYm94KTtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld0RhdGUpO1xuICAgICAgICBuZXdSb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICBhcHBlbmRUb2RvU2VjdGlvblVsKG5ld1Jvdyk7XG5cbiAgICAgICAgaWYgKCF0b2RvKSB7XG4gICAgICAgICAgICBuZXdUaXRsZS5jbGFzc0xpc3QuYWRkKFwibmV3LXRvZG8taW5wdXRcIik7XG4gICAgICAgICAgICBuZXdUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrLmdldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0dWFsRGl2ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odGFzaywgdGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RGl2ID0gZWxlbWVudC5uZXdEaXYoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBlLmN1cnJlbnRUYXJnZXQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmlubmVyVGV4dCA9IG5ld1RvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Jvdy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIsIG5ld1RvZG8uaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbERpdi5yZXBsYWNlQ2hpbGQobmV3RGl2LCBlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUb2Rvc1tuZXdUb2RvLmlkXSA9IG5ld1RvZG87XG5cbiAgICAgICAgICAgICAgICAgICAgVG9kby5zYXZlVG9kbyh0YXNrLCBuZXdUb2RvKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VG9kb3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Jvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleWRvd25CbHVyKTtcbiAgICAgICAgICAgIG5ld1RpdGxlLmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdUaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgICAgICAgICAgIG5ld1RpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICBuZXdSb3cuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCB0b2RvLmlkKTtcbiAgICAgICAgICAgIG5ld0NoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBhZGROZXdUYXNrKTtcbiAgICBjcmVhdGVUb2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoZSkgPT4gY3JlYXRlVG9kb0RPTSgpKTtcblxuICAgIGxvYWRUYXNrcygpO1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==