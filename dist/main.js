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
                // console.log(nextSibling)

                if (nextSibling === eventTaskIndex)
                    nextSibling = null;

                e.currentTarget.classList.remove("focused-task");

                if (nextSibling) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpQ0FBaUMsaUVBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IseURBQWE7QUFDakM7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLGdEQUFJO0FBQzFDLGlDQUFpQyxpRUFBYzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLHlEQUFhOztBQUVqQztBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZWxlbWVudCA9IChmdW5jdGlvbigpe1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1OYW1lKXtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbU5hbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICBuZXdEaXYoKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0J1dHRvbigpe1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3TGkoKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3VWwoKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3SW5wdXQoKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdJbnB1dE9mVHlwZSh0eXBlKXtcbiAgICAgICAgbGV0IG5ld0luID0gbmV3SW5wdXQoKTtcbiAgICAgICAgbmV3SW4uc2V0QXR0cmlidXRlKCd0eXBlJyx0eXBlKTtcbiAgICAgICAgcmV0dXJuIG5ld0luO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbEVsZW0oc2VsZWN0b3Ipe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdJbWcoaW1nU3JjKXtcbiAgICAgICAgbGV0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBuZXdJbWcuc3JjID0gaW1nU3JjO1xuXG4gICAgICAgIHJldHVybiBuZXdJbWc7XG5cbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHtuZXdEaXYsbmV3QnV0dG9uLG5ld0xpLG5ld1VsLGRlbEVsZW0sbmV3SW5wdXRPZlR5cGUsbmV3SW1nfTtcblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50OyIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIHRpdGxlLCBpc05ldyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRlID0gbnVsbDtcblxuICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwidGFza3NcIixcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBsaXN0OiBbXSwgbmV4dElkOiAwIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblxuICAgICAgICAgICAgdGhpcy5pZCA9IHRhc2tzLm5leHRJZCsrO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza3MubmV4dElkKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgICB9IGVsc2UgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9kb0NoZWNrKCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIF9jcmVhdGVUb2RvRnJvbUxvY2FsU3RvcmFnZSh0b2RvRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKFxuICAgICAgICAgICAgdG9kb0Zyb21Mb2NhbFN0b3JhZ2UudGFzayxcbiAgICAgICAgICAgIHRvZG9Gcm9tTG9jYWxTdG9yYWdlLnRpdGxlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICBuZXdUb2RvLmRhdGUgPSB0b2RvRnJvbUxvY2FsU3RvcmFnZS5kYXRlO1xuICAgICAgICBuZXdUb2RvLmNoZWNrZWQgPSB0b2RvRnJvbUxvY2FsU3RvcmFnZS5jaGVja2VkO1xuICAgICAgICBuZXdUb2RvLmlkID0gdG9kb0Zyb21Mb2NhbFN0b3JhZ2UuaWQ7XG5cbiAgICAgICAgcmV0dXJuIG5ld1RvZG87XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUb2Rvcyh0YXNrKSB7XG4gICAgICAgIGxldCBzdG9yYWdlVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZVRvZG9zKTtcblxuICAgICAgICBsZXQgbG9jYWxUb2RvcyA9IHt9XG5cbiAgICAgICAgZm9yKGxldCBhY3R1YWxUb2RvSWQgaW4gc3RvcmFnZVRvZG9zKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2VUb2RvKVxuICAgICAgICAgICAgbGV0IGxvY2FsVG9kbyA9IHRoaXMuX2NyZWF0ZVRvZG9Gcm9tTG9jYWxTdG9yYWdlKHN0b3JhZ2VUb2Rvc1thY3R1YWxUb2RvSWRdKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsVG9kbyk7XG5cbiAgICAgICAgICAgIGxvY2FsVG9kb3NbbG9jYWxUb2RvLmlkXSA9IGxvY2FsVG9kbztcblxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsVG9kb3M7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgcmVtb3ZlVG9kbyh0YXNrLHRvZG9JZCl7XG4gICAgICAgIGxldCB0b2RvTGlzdEZyb21UYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKSk7XG4gICAgICAgIGRlbGV0ZSB0b2RvTGlzdEZyb21UYXNrW3RvZG9JZF07XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzayxKU09OLnN0cmluZ2lmeSh0b2RvTGlzdEZyb21UYXNrKSlcbiAgICB9XG5cblxuICAgIHN0YXRpYyBzYXZlVG9kbyh0YXNrLHRvZG8pe1xuICAgICAgICBsZXQgdG9kb0xpc3RGcm9tVGFzayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGFzaykpO1xuICAgICAgICB0b2RvTGlzdEZyb21UYXNrW3RvZG8uaWRdID0gdG9kbztcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YXNrLEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0RnJvbVRhc2spKVxuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlVG9kb3ModGFzaywgdG9kb3MpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzaywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZmluZFRhc2sodGFzaykge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgXCJ0YXNrc1wiLFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbGlzdDogW10sIG5leHRJZDogMCB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmb3VuZCA9IG51bGw7XG4gICAgICAgIGxldCB0YXNrc0xpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpLmxpc3Q7XG5cbiAgICAgICAgaWYgKHRhc2tzTGlzdCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0xpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0dWFsVGFzayA9IHRhc2tzTGlzdFtpXTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsVGFzayA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGFjdHVhbFRhc2s7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9hZFRhc2tzKCkge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgXCJ0YXNrc1wiLFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbGlzdDogW10sIG5leHRJZDogMCB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpLmxpc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVUYXNrKHRhc2spIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIFwidGFza3NcIixcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGxpc3Q6IFtdLCBuZXh0SWQ6IDAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spKSB7XG4gICAgICAgICAgICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuXG4gICAgICAgICAgICB0YXNrcy5saXN0LnB1c2godGFzayk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YXNrLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRhc2sodGFzayl7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spKSB7XG4gICAgICAgICAgICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgICAgICAgICAgbGV0IHRhc2tJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxpc3QubGVuZ3RoOysraSl7XG4gICAgICAgICAgICAgICAgbGV0IGFjdHVhbFRhc2sgPSB0YXNrcy5saXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmKGFjdHVhbFRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0luZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrcy5saXN0LnNwbGljZSh0YXNrSW5kZXgsMSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRhc2spO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgICB9XG4gXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCBlbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzLmpzXCI7XG5cbi8vIGxldCB0ZXN0ID0gbmV3IFRvZG8oJ2NvbXByYXMnLCdhcnJveicpO1xuXG4vLyBjb25zb2xlLmxvZyh0ZXN0KTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdGFza1NlY3Rpb25VbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3Mtc2VjdGlvbiA+IHVsXCIpO1xuICAgIGxldCB0b2RvU2VjdGlvblVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWxpc3RcIik7XG4gICAgbGV0IGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzID4gYnV0dG9uXCIpO1xuICAgIGxldCBjcmVhdGVUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb24gPiBidXR0b25cIik7XG4gICAgbGV0IGN1cnJlbnRUYXNrID0gbnVsbDtcbiAgICBsZXQgY3VycmVudFRvZG9zID0gbnVsbDtcbiAgICBsZXQgY3VycmVudFRhc2tzID0gW107XG4gICAgbGV0IGN1cnJlbnRUYXNrSW5kZXggPSBudWxsO1xuXG4gICAgZnVuY3Rpb24ga2V5ZG93bkJsdXIoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpV2l0aEVsbXQoZWxtdCkge1xuICAgICAgICBsZXQgbmV3TGkgPSBlbGVtZW50Lm5ld0xpKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICAgIGlmIChlbG10KSBuZXdMaS5hcHBlbmRDaGlsZChlbG10KTtcblxuICAgICAgICByZXR1cm4gbmV3TGk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVG9kb1NlY3Rpb25VbChlbG10KSB7XG4gICAgICAgIC8vIGxldCBuZXdMaSA9IGNyZWF0ZUxpV2l0aEVsbXQoZWxtdCk7XG5cbiAgICAgICAgdG9kb1NlY3Rpb25VbC5hcHBlbmRDaGlsZChlbG10KTtcblxuICAgICAgICByZXR1cm4gZWxtdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUYXNrU2VjdGlvblVsKGVsbXQpIHtcbiAgICAgICAgbGV0IG5ld0xpID0gY3JlYXRlTGlXaXRoRWxtdChlbG10KTtcblxuICAgICAgICB0YXNrU2VjdGlvblVsLmFwcGVuZENoaWxkKG5ld0xpKTtcblxuICAgICAgICByZXR1cm4gbmV3TGk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrKSB7XG4gICAgICAgIGxldCBuZXdUYXNrID0gZWxlbWVudC5uZXdEaXYoKTtcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgbmV3VGFzay5pbm5lclRleHQgPSB0YXNrO1xuICAgICAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiLCB0YXNrKTtcbiAgICAgICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIiwgY3VycmVudFRhc2tzLmxlbmd0aCk7XG5cbiAgICAgICAgbGV0IG5ld1Rhc2tMaSA9IGFwcGVuZFRhc2tTZWN0aW9uVWwobmV3VGFzayk7XG4gICAgICAgIGxldCBkZWxldGVCdG4gPSBlbGVtZW50Lm5ld0J1dHRvbigpO1xuICAgICAgICBsZXQgbmV3SW1nID0gZWxlbWVudC5uZXdJbWcoXCIuLi9pbWcvdHJhc2guc3ZnXCIpO1xuXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKG5ld0ltZyk7XG4gICAgICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staW5kZXhcIiwgY3VycmVudFRhc2tzLmxlbmd0aCk7XG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBldmVudFRhc2tJbmRleCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pbmRleCcpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coe2N1cnJlbnRUYXNrLGV2ZW50VGFza0luZGV4fSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudFRhc2sgPT09IGN1cnJlbnRUYXNrc1tldmVudFRhc2tJbmRleF0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VGFza3MpXG4gICAgICAgICAgICAgICAgbGV0IG5leHRTaWJsaW5nID0gKCtldmVudFRhc2tJbmRleCArIDEpICUgY3VycmVudFRhc2tzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXh0U2libGluZylcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0U2libGluZyA9PT0gZXZlbnRUYXNrSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZC10YXNrXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrSW5kZXggPSBuZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhc2sgPSBjdXJyZW50VGFza3NbbmV4dFNpYmxpbmddO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFzay5jbGFzc0xpc3QuYWRkKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhc2tJbmRleCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbG9hZFRvZG9zT2ZDdXJyZW50VGFzaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrc1tldmVudFRhc2tJbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICAgICAgLy8gcmV0dXJuO1xuXG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgY3VycmVudFRhc2tzLnNwbGljZShldmVudFRhc2tJbmRleCwxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrcyk7XG4gICAgICAgICAgICBUb2RvLnJlbW92ZVRhc2sodGFzayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5ld1Rhc2tMaS5jbGFzc0xpc3QuYWRkKFwidGFzay1saVwiKTtcbiAgICAgICAgbmV3VGFza0xpLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIGN1cnJlbnRUYXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gICAgICAgIGlmKGN1cnJlbnRUYXNrID09PSBudWxsKXtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrID0gbmV3VGFzaztcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQtdGFzaycpO1xuICAgICAgICAgICAgY3VycmVudFRhc2tJbmRleCA9IDA7XG4gICAgICAgICAgICBsb2FkVG9kb3NPZkN1cnJlbnRUYXNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdUYXNrSW5wdXRMZWF2ZShhY3R1YWxJbnB1dCkge1xuICAgICAgICAvLyBsZXQgYWN0dWFsSW5wdXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdld2UnKVxuICAgICAgICBhY3R1YWxJbnB1dC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAvLyBhY3R1YWxJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJyk7XG5cbiAgICAgICAgaWYgKGFjdHVhbElucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAoVG9kby5maW5kVGFzayhhY3R1YWxJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzayhhY3R1YWxJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIGlmIChjdXJyZW50VGFzaykge1xuICAgICAgICAgICAgLy8gY3VycmVudFRhc2suY2xhc3NMaXN0LnJlbW92ZShcImZvY3VzZWQtdGFza1wiKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImZvY3VzZWQtdGFza1wiKTtcbiAgICAgICAgICAgIG5ld1Rhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUN1cnJlbnRUYXNrKTtcbiAgICAgICAgICAgIC8vIGN1cnJlbnRUYXNrID0gbmV3VGFzaztcblxuICAgICAgICAgICAgVG9kby5zYXZlVGFzayhhY3R1YWxJbnB1dC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGROZXdUYXNrKGUpIHtcbiAgICAgICAgLy8gaWYoY3VycmVudEZvY3VzZWRJbnB1dC52YWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndXd1JylcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBuZXdJbnB1dCA9IGVsZW1lbnQubmV3SW5wdXRPZlR5cGUoXCJ0ZXh0XCIpO1xuICAgICAgICBuZXdJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2staW5wdXRcIik7XG4gICAgICAgIG5ld0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIChlKSA9PlxuICAgICAgICAgICAgbmV3VGFza0lucHV0TGVhdmUoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICApO1xuICAgICAgICBuZXdJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlkb3duQmx1cik7XG5cbiAgICAgICAgbGV0IG5ld0xpID0gYXBwZW5kVGFza1NlY3Rpb25VbChuZXdJbnB1dCk7XG4gICAgICAgIG5ld0xpLmNsYXNzTGlzdC5hZGQoJ2xpLWlucHV0JylcbiAgICAgICAgbmV3SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgLy8gY3VycmVudEZvY3VzZWRJbnB1dCA9IG5ld0lucHV0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUN1cnJlbnRUYXNrKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tzKTtcbiAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0ID09PSBjdXJyZW50VGFzaykgcmV0dXJuO1xuICAgICAgICBjdXJyZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImZvY3VzZWQtdGFza1wiKTtcblxuICAgICAgICBjdXJyZW50VGFzayA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgY3VycmVudFRhc2tJbmRleCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzay1pbmRleCcpO1xuICAgICAgICBsb2FkVG9kb3NPZkN1cnJlbnRUYXNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRvZG9zT2ZDdXJyZW50VGFzaygpIHtcbiAgICAgICAgY3VycmVudFRvZG9zID0ge307XG5cbiAgICAgICAgcmVtb3ZlRWxlbWVudHModG9kb1NlY3Rpb25VbCk7XG5cbiAgICAgICAgaWYgKCFjdXJyZW50VGFzaykgcmV0dXJuO1xuXG4gICAgICAgIGxldCBkYXRhVGFzayA9IGN1cnJlbnRUYXNrLmdldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiKTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRUb2RvcywgVG9kby5sb2FkVG9kb3MoZGF0YVRhc2spKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhVGFzayk7XG5cbiAgICAgICAgZm9yIChsZXQgYWN0dWFsVG9kb0lkIGluIGN1cnJlbnRUb2Rvcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFRvZG9zW2FjdHVhbFRvZG9JZF0pO1xuICAgICAgICAgICAgY3JlYXRlVG9kb0RPTShjdXJyZW50VG9kb3NbYWN0dWFsVG9kb0lkXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gICAgICAgIGxldCBpbml0aWFsVGFza0xpc3QgPSBUb2RvLmxvYWRUYXNrcygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdGlhbFRhc2tMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGluaXRpYWxUYXNrTGlzdFtpXTtcbiAgICAgICAgICAgIGxldCB0YXNrRWxlbSA9IGNyZWF0ZVRhc2sodGFzayk7XG4gICAgICAgICAgICB0YXNrRWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlQ3VycmVudFRhc2spO1xuICAgICAgICAgICAgLy8gY3VycmVudFRhc2tzLnB1c2godGFza0VsZW0pO1xuXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRhc2tFbGVtLmNsYXNzTGlzdC5hZGQoXCJmb2N1c2VkLXRhc2tcIik7XG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2sgPSB0YXNrRWxlbTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza0luZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBsb2FkVG9kb3NPZkN1cnJlbnRUYXNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50cyhlbG0pIHtcbiAgICAgICAgd2hpbGUgKGVsbS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBlbG0uZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvZG9ET00odG9kbykge1xuICAgICAgICBpZiAoY3VycmVudFRhc2sgPT09IG51bGwpIHJldHVybjtcblxuICAgICAgICBsZXQgbmV3Um93ID0gZWxlbWVudC5uZXdEaXYoKTtcbiAgICAgICAgbGV0IG5ld0NoZWNrYm94ID0gZWxlbWVudC5uZXdJbnB1dE9mVHlwZShcImNoZWNrYm94XCIpO1xuICAgICAgICBsZXQgbmV3RGF0ZSA9XG4gICAgICAgICAgICB0b2RvICYmIHRvZG8uZGF0ZVxuICAgICAgICAgICAgICAgID8gZWxlbWVudC5uZXdEaXYoKVxuICAgICAgICAgICAgICAgIDogZWxlbWVudC5uZXdJbnB1dE9mVHlwZShcImRhdGVcIik7XG5cbiAgICAgICAgbGV0IG5ld1RpdGxlID0gdG9kbyA/IGVsZW1lbnQubmV3RGl2KCkgOiBlbGVtZW50Lm5ld0lucHV0T2ZUeXBlKFwidGV4dFwiKTtcbiAgICAgICAgbGV0IGRlbGV0ZUJ0biA9IGVsZW1lbnQubmV3QnV0dG9uKCk7XG4gICAgICAgIGxldCBuZXdJbWcgPSBlbGVtZW50Lm5ld0ltZyhcIi4uL2ltZy90cmFzaC5zdmdcIik7XG4gICAgICAgIC8vIGRlbGV0ZUJ0bi5pbm5lclRleHQgPSAneCc7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgZGVsZXRlQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQobmV3SW1nKTtcblxuICAgICAgICBuZXdSb3cuY2xhc3NMaXN0LmFkZChcInRvZG8tcm93XCIpO1xuICAgICAgICBuZXdDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwidG9kby1maW5pc2hlZFwiKTtcblxuICAgICAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdG9kb0lkID0gbmV3Um93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrLmdldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiKTtcblxuICAgICAgICAgICAgZGVsZXRlIGN1cnJlbnRUb2Rvc1t0b2RvSWRdO1xuICAgICAgICAgICAgbmV3Um93LnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBUb2RvLnJlbW92ZVRvZG8odGFzaywgdG9kb0lkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZCk7XG4gICAgICAgICAgICBsZXQgdG9kb0lkID0gbmV3Um93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrLmdldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiKTtcblxuICAgICAgICAgICAgY3VycmVudFRvZG9zW3RvZG9JZF0uY2hlY2tlZCA9IGUuY3VycmVudFRhcmdldC5jaGVja2VkO1xuXG4gICAgICAgICAgICBUb2RvLnNhdmVUb2RvKHRhc2ssIGN1cnJlbnRUb2Rvc1t0b2RvSWRdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRvZG8gJiYgdG9kby5kYXRlKSB7XG4gICAgICAgICAgICBuZXdEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGVcIik7XG4gICAgICAgICAgICBuZXdEYXRlLmlubmVyVGV4dCA9IHRvZG8uZGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZS1pbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld0RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEaXYgPSBlbGVtZW50Lm5ld0RpdigpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0lkID0gbmV3Um93LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gY3VycmVudFRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpO1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmlubmVyVGV4dCA9IGRhdGU7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Jvdy5yZXBsYWNlQ2hpbGQobmV3RGl2LCBuZXdEYXRlKTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VG9kb3NbdG9kb0lkXS5kYXRlID0gZGF0ZTtcblxuICAgICAgICAgICAgICAgICAgICBUb2RvLnNhdmVUb2RvKHRhc2ssIGN1cnJlbnRUb2Rvc1t0b2RvSWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChuZXdDaGVja2JveCk7XG4gICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChuZXdEYXRlKTtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgYXBwZW5kVG9kb1NlY3Rpb25VbChuZXdSb3cpO1xuXG4gICAgICAgIGlmICghdG9kbykge1xuICAgICAgICAgICAgbmV3VGl0bGUuY2xhc3NMaXN0LmFkZChcIm5ldy10b2RvLWlucHV0XCIpO1xuICAgICAgICAgICAgbmV3VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBjdXJyZW50VGFzay5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdHVhbERpdiA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKHRhc2ssIHRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGVsZW1lbnQubmV3RGl2KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZS5jdXJyZW50VGFyZ2V0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdUb2RvKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICAgICAgICAgICAgICAgIG5ld0Rpdi5pbm5lclRleHQgPSBuZXdUb2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICBuZXdSb3cuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBuZXdUb2RvLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxEaXYucmVwbGFjZUNoaWxkKG5ld0RpdiwgZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VG9kb3NbbmV3VG9kby5pZF0gPSBuZXdUb2RvO1xuXG4gICAgICAgICAgICAgICAgICAgIFRvZG8uc2F2ZVRvZG8odGFzaywgbmV3VG9kbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFRvZG9zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdSb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlkb3duQmx1cik7XG4gICAgICAgICAgICBuZXdUaXRsZS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICAgICAgICBuZXdUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgbmV3Um93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdG9kby5pZCk7XG4gICAgICAgICAgICBuZXdDaGVja2JveC5jaGVja2VkID0gdG9kby5jaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgYWRkTmV3VGFzayk7XG4gICAgY3JlYXRlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKGUpID0+IGNyZWF0ZVRvZG9ET00oKSk7XG5cbiAgICBsb2FkVGFza3MoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=