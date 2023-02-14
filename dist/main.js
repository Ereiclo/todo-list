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



    return {newDiv,newButton,newLi,newUl,delElem,newInputOfType};

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
    let todoSectionUl = document.querySelector(".todo-section > ul");
    let createTaskButton = document.querySelector(".tasks > button");
    let createTodoButton = document.querySelector(".todo-section > button");
    let currentTask = null;
    let currentTodos = null;

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
        let newLi = createLiWithElmt(elmt);

        todoSectionUl.appendChild(newLi);

        return newLi;
    }

    function appendTaskSectionUl(elmt) {
        let newLi = createLiWithElmt(elmt);

        taskSectionUl.appendChild(newLi);

        return newLi;
    }

    function createTask(task) {
        let newTask = appendTaskSectionUl();
        newTask.classList.add("task");
        newTask.innerText = task;
        newTask.setAttribute("data-task", task);

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
            newTask.addEventListener('click',changeCurrentTask)
            currentTask = newTask;

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

        appendTaskSectionUl(newInput);
        newInput.focus();
        // currentFocusedInput = newInput;
    }

    function changeCurrentTask(e) {
        currentTask.classList.remove("focused-task");
        e.currentTarget.classList.add("focused-task");

        currentTask = e.currentTarget;
        loadTodosOfCurrentTask();
        // console.log(currentTask);
    }

    function loadTodosOfCurrentTask(){
        if(!currentTask) return;
        let dataTask = currentTask.getAttribute('data-task');

        currentTodos = _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadTodos(dataTask);

        removeElements(todoSectionUl);
        // console.log(dataTask);

        for(let actualTodoId in currentTodos){
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

            if (i === 0) {
                taskElem.classList.add("focused-task");
                currentTask = taskElem;
                loadTodosOfCurrentTask();
            }
        }
    }


    function removeElements(elm){

        while(elm.firstChild){
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

        newRow.classList.add("todo-row");
        newCheckbox.classList.add("todo-finished");


        newCheckbox.addEventListener('input',(e) => {
            console.log(e.currentTarget.checked);
            let todoId = newRow.getAttribute('data-id');
            let task = currentTask.getAttribute('data-task');

            currentTodos[todoId].checked = e.currentTarget.checked;

            _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTodo(task,currentTodos[todoId]);
        })

        if (todo && todo.date) {
            newDate.classList.add("todo-date");
            newDate.innerText = todo.date;
        } else {
            newDate.classList.add("todo-date-input");
            newDate.addEventListener('blur', (e) => {
                let date = e.currentTarget.value;
                if(date != ''){
                    let newDiv = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newDiv();
                    let todoId = newRow.getAttribute('data-id');
                    let task = currentTask.getAttribute('data-task');
                    newDiv.classList.add('todo-date');
                    newDiv.innerText = date;
                    newRow.replaceChild(newDiv,newDate);

                    currentTodos[todoId].date = date;

                    _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveTodo(task,currentTodos[todoId]);

                }
            })
        } 

        newRow.appendChild(newCheckbox);
        newRow.appendChild(newTitle);
        newRow.appendChild(newDate);

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
                    newRow.parentNode.remove();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBLFlBQVk7O0FBRVosQ0FBQzs7QUFFRCxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQzNDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxxQkFBcUI7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzdIcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDYTs7QUFFMUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdFQUFhO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHlEQUFhO0FBQzdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVkseURBQWE7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIseUVBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsMERBQWM7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw4QkFBOEIsMERBQWM7O0FBRTVDLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsaUVBQWM7QUFDbkMsMEJBQTBCLHlFQUFzQjtBQUNoRDtBQUNBO0FBQ0Esa0JBQWtCLGlFQUFjO0FBQ2hDLGtCQUFrQix5RUFBc0I7O0FBRXhDLDhCQUE4QixpRUFBYyxLQUFLLHlFQUFzQjs7QUFFdkU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsWUFBWSx5REFBYTtBQUN6QixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpRUFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQix5REFBYTs7QUFFakM7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxnREFBSTtBQUMxQyxpQ0FBaUMsaUVBQWM7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQix5REFBYTs7QUFFakM7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGVsZW1lbnQgPSAoZnVuY3Rpb24oKXtcblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtTmFtZSl7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1OYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgbmV3RGl2KCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdCdXR0b24oKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0xpKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1VsKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0lucHV0KCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3SW5wdXRPZlR5cGUodHlwZSl7XG4gICAgICAgIGxldCBuZXdJbiA9IG5ld0lucHV0KCk7XG4gICAgICAgIG5ld0luLnNldEF0dHJpYnV0ZSgndHlwZScsdHlwZSk7XG4gICAgICAgIHJldHVybiBuZXdJbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxFbGVtKHNlbGVjdG9yKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlKCk7XG4gICAgfVxuXG5cblxuICAgIHJldHVybiB7bmV3RGl2LG5ld0J1dHRvbixuZXdMaSxuZXdVbCxkZWxFbGVtLG5ld0lucHV0T2ZUeXBlfTtcblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50OyIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIHRpdGxlLCBpc05ldyA9IHRydWUpIHtcbiAgICAgICAgdGhpcy50YXNrID0gdGFzaztcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRlID0gbnVsbDtcblxuICAgICAgICBpZiAoaXNOZXcpIHtcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgICAgIFwidGFza3NcIixcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBsaXN0OiBbXSwgbmV4dElkOiAwIH0pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblxuICAgICAgICAgICAgdGhpcy5pZCA9IHRhc2tzLm5leHRJZCsrO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza3MubmV4dElkKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICAgICAgICB9IGVsc2UgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9kb0NoZWNrKCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIF9jcmVhdGVUb2RvRnJvbUxvY2FsU3RvcmFnZSh0b2RvRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKFxuICAgICAgICAgICAgdG9kb0Zyb21Mb2NhbFN0b3JhZ2UudGFzayxcbiAgICAgICAgICAgIHRvZG9Gcm9tTG9jYWxTdG9yYWdlLnRpdGxlLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcblxuICAgICAgICBuZXdUb2RvLmRhdGUgPSB0b2RvRnJvbUxvY2FsU3RvcmFnZS5kYXRlO1xuICAgICAgICBuZXdUb2RvLmNoZWNrZWQgPSB0b2RvRnJvbUxvY2FsU3RvcmFnZS5jaGVja2VkO1xuICAgICAgICBuZXdUb2RvLmlkID0gdG9kb0Zyb21Mb2NhbFN0b3JhZ2UuaWQ7XG5cbiAgICAgICAgcmV0dXJuIG5ld1RvZG87XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUb2Rvcyh0YXNrKSB7XG4gICAgICAgIGxldCBzdG9yYWdlVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RvcmFnZVRvZG9zKTtcblxuICAgICAgICBsZXQgbG9jYWxUb2RvcyA9IHt9XG5cbiAgICAgICAgZm9yKGxldCBhY3R1YWxUb2RvSWQgaW4gc3RvcmFnZVRvZG9zKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2VUb2RvKVxuICAgICAgICAgICAgbGV0IGxvY2FsVG9kbyA9IHRoaXMuX2NyZWF0ZVRvZG9Gcm9tTG9jYWxTdG9yYWdlKHN0b3JhZ2VUb2Rvc1thY3R1YWxUb2RvSWRdKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsVG9kbyk7XG5cbiAgICAgICAgICAgIGxvY2FsVG9kb3NbbG9jYWxUb2RvLmlkXSA9IGxvY2FsVG9kbztcblxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsVG9kb3M7XG4gICAgfVxuXG5cbiAgICBzdGF0aWMgc2F2ZVRvZG8odGFzayx0b2RvKXtcbiAgICAgICAgbGV0IHRvZG9MaXN0RnJvbVRhc2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spKTtcbiAgICAgICAgdG9kb0xpc3RGcm9tVGFza1t0b2RvLmlkXSA9IHRvZG87XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzayxKU09OLnN0cmluZ2lmeSh0b2RvTGlzdEZyb21UYXNrKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZVRvZG9zKHRhc2ssIHRvZG9zKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2ssIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmRUYXNrKHRhc2spIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIFwidGFza3NcIixcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGxpc3Q6IFtdLCBuZXh0SWQ6IDAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xuICAgICAgICBsZXQgdGFza3NMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKS5saXN0O1xuXG4gICAgICAgIGlmICh0YXNrc0xpc3QpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdHVhbFRhc2sgPSB0YXNrc0xpc3RbaV07XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbFRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBhY3R1YWxUYXNrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUYXNrcygpIHtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgIFwidGFza3NcIixcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGxpc3Q6IFtdLCBuZXh0SWQ6IDAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKS5saXN0O1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlVGFzayh0YXNrKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICBcInRhc2tzXCIsXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBsaXN0OiBbXSwgbmV4dElkOiAwIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKSkge1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcblxuICAgICAgICAgICAgdGFza3MubGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzaywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kby5qc1wiO1xuaW1wb3J0IGVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudHMuanNcIjtcblxuLy8gbGV0IHRlc3QgPSBuZXcgVG9kbygnY29tcHJhcycsJ2Fycm96Jyk7XG5cbi8vIGNvbnNvbGUubG9nKHRlc3QpO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGxldCB0YXNrU2VjdGlvblVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1zZWN0aW9uID4gdWxcIik7XG4gICAgbGV0IHRvZG9TZWN0aW9uVWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvbiA+IHVsXCIpO1xuICAgIGxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcyA+IGJ1dHRvblwiKTtcbiAgICBsZXQgY3JlYXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1zZWN0aW9uID4gYnV0dG9uXCIpO1xuICAgIGxldCBjdXJyZW50VGFzayA9IG51bGw7XG4gICAgbGV0IGN1cnJlbnRUb2RvcyA9IG51bGw7XG5cbiAgICBmdW5jdGlvbiBrZXlkb3duQmx1cihlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTGlXaXRoRWxtdChlbG10KSB7XG4gICAgICAgIGxldCBuZXdMaSA9IGVsZW1lbnQubmV3TGkoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgICAgaWYgKGVsbXQpIG5ld0xpLmFwcGVuZENoaWxkKGVsbXQpO1xuXG4gICAgICAgIHJldHVybiBuZXdMaTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUb2RvU2VjdGlvblVsKGVsbXQpIHtcbiAgICAgICAgbGV0IG5ld0xpID0gY3JlYXRlTGlXaXRoRWxtdChlbG10KTtcblxuICAgICAgICB0b2RvU2VjdGlvblVsLmFwcGVuZENoaWxkKG5ld0xpKTtcblxuICAgICAgICByZXR1cm4gbmV3TGk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVGFza1NlY3Rpb25VbChlbG10KSB7XG4gICAgICAgIGxldCBuZXdMaSA9IGNyZWF0ZUxpV2l0aEVsbXQoZWxtdCk7XG5cbiAgICAgICAgdGFza1NlY3Rpb25VbC5hcHBlbmRDaGlsZChuZXdMaSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0xpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzaykge1xuICAgICAgICBsZXQgbmV3VGFzayA9IGFwcGVuZFRhc2tTZWN0aW9uVWwoKTtcbiAgICAgICAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgbmV3VGFzay5pbm5lclRleHQgPSB0YXNrO1xuICAgICAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiLCB0YXNrKTtcblxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdUYXNrSW5wdXRMZWF2ZShhY3R1YWxJbnB1dCkge1xuICAgICAgICAvLyBsZXQgYWN0dWFsSW5wdXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdld2UnKVxuICAgICAgICBhY3R1YWxJbnB1dC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAvLyBhY3R1YWxJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJyk7XG5cbiAgICAgICAgaWYgKGFjdHVhbElucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAoVG9kby5maW5kVGFzayhhY3R1YWxJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzayhhY3R1YWxJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIGlmIChjdXJyZW50VGFzaykge1xuICAgICAgICAgICAgICAgIC8vIGN1cnJlbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c2VkLXRhc2tcIik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJmb2N1c2VkLXRhc2tcIik7XG4gICAgICAgICAgICBuZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjaGFuZ2VDdXJyZW50VGFzaylcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrID0gbmV3VGFzaztcblxuICAgICAgICAgICAgVG9kby5zYXZlVGFzayhhY3R1YWxJbnB1dC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGROZXdUYXNrKGUpIHtcbiAgICAgICAgLy8gaWYoY3VycmVudEZvY3VzZWRJbnB1dC52YWx1ZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndXd1JylcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGxldCBuZXdJbnB1dCA9IGVsZW1lbnQubmV3SW5wdXRPZlR5cGUoXCJ0ZXh0XCIpO1xuICAgICAgICBuZXdJbnB1dC5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2staW5wdXRcIik7XG4gICAgICAgIG5ld0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIChlKSA9PlxuICAgICAgICAgICAgbmV3VGFza0lucHV0TGVhdmUoZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICApO1xuICAgICAgICBuZXdJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlkb3duQmx1cik7XG5cbiAgICAgICAgYXBwZW5kVGFza1NlY3Rpb25VbChuZXdJbnB1dCk7XG4gICAgICAgIG5ld0lucHV0LmZvY3VzKCk7XG4gICAgICAgIC8vIGN1cnJlbnRGb2N1c2VkSW5wdXQgPSBuZXdJbnB1dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VDdXJyZW50VGFzayhlKSB7XG4gICAgICAgIGN1cnJlbnRUYXNrLmNsYXNzTGlzdC5yZW1vdmUoXCJmb2N1c2VkLXRhc2tcIik7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZm9jdXNlZC10YXNrXCIpO1xuXG4gICAgICAgIGN1cnJlbnRUYXNrID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBsb2FkVG9kb3NPZkN1cnJlbnRUYXNrKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVG9kb3NPZkN1cnJlbnRUYXNrKCl7XG4gICAgICAgIGlmKCFjdXJyZW50VGFzaykgcmV0dXJuO1xuICAgICAgICBsZXQgZGF0YVRhc2sgPSBjdXJyZW50VGFzay5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFzaycpO1xuXG4gICAgICAgIGN1cnJlbnRUb2RvcyA9IFRvZG8ubG9hZFRvZG9zKGRhdGFUYXNrKTtcblxuICAgICAgICByZW1vdmVFbGVtZW50cyh0b2RvU2VjdGlvblVsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVRhc2spO1xuXG4gICAgICAgIGZvcihsZXQgYWN0dWFsVG9kb0lkIGluIGN1cnJlbnRUb2Rvcyl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VG9kb3NbYWN0dWFsVG9kb0lkXSk7XG4gICAgICAgICAgICBjcmVhdGVUb2RvRE9NKGN1cnJlbnRUb2Rvc1thY3R1YWxUb2RvSWRdKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICAgICAgICBsZXQgaW5pdGlhbFRhc2tMaXN0ID0gVG9kby5sb2FkVGFza3MoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRpYWxUYXNrTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBpbml0aWFsVGFza0xpc3RbaV07XG4gICAgICAgICAgICBsZXQgdGFza0VsZW0gPSBjcmVhdGVUYXNrKHRhc2spO1xuICAgICAgICAgICAgdGFza0VsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUN1cnJlbnRUYXNrKTtcblxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0YXNrRWxlbS5jbGFzc0xpc3QuYWRkKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrID0gdGFza0VsZW07XG4gICAgICAgICAgICAgICAgbG9hZFRvZG9zT2ZDdXJyZW50VGFzaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50cyhlbG0pe1xuXG4gICAgICAgIHdoaWxlKGVsbS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIGVsbS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvRE9NKHRvZG8pIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYXNrID09PSBudWxsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IG5ld1JvdyA9IGVsZW1lbnQubmV3RGl2KCk7XG4gICAgICAgIGxldCBuZXdDaGVja2JveCA9IGVsZW1lbnQubmV3SW5wdXRPZlR5cGUoXCJjaGVja2JveFwiKTtcbiAgICAgICAgbGV0IG5ld0RhdGUgPVxuICAgICAgICAgICAgdG9kbyAmJiB0b2RvLmRhdGVcbiAgICAgICAgICAgICAgICA/IGVsZW1lbnQubmV3RGl2KClcbiAgICAgICAgICAgICAgICA6IGVsZW1lbnQubmV3SW5wdXRPZlR5cGUoXCJkYXRlXCIpO1xuXG4gICAgICAgIGxldCBuZXdUaXRsZSA9IHRvZG8gPyBlbGVtZW50Lm5ld0RpdigpIDogZWxlbWVudC5uZXdJbnB1dE9mVHlwZShcInRleHRcIik7XG5cbiAgICAgICAgbmV3Um93LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXJvd1wiKTtcbiAgICAgICAgbmV3Q2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRvZG8tZmluaXNoZWRcIik7XG5cblxuICAgICAgICBuZXdDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5jaGVja2VkKTtcbiAgICAgICAgICAgIGxldCB0b2RvSWQgPSBuZXdSb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGN1cnJlbnRUYXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10YXNrJyk7XG5cbiAgICAgICAgICAgIGN1cnJlbnRUb2Rvc1t0b2RvSWRdLmNoZWNrZWQgPSBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZDtcblxuICAgICAgICAgICAgVG9kby5zYXZlVG9kbyh0YXNrLGN1cnJlbnRUb2Rvc1t0b2RvSWRdKTtcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAodG9kbyAmJiB0b2RvLmRhdGUpIHtcbiAgICAgICAgICAgIG5ld0RhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZGF0ZVwiKTtcbiAgICAgICAgICAgIG5ld0RhdGUuaW5uZXJUZXh0ID0gdG9kby5kYXRlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3RGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlLWlucHV0XCIpO1xuICAgICAgICAgICAgbmV3RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZihkYXRlICE9ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGVsZW1lbnQubmV3RGl2KCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvSWQgPSBuZXdSb3cuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gY3VycmVudFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3RvZG8tZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuaW5uZXJUZXh0ID0gZGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LnJlcGxhY2VDaGlsZChuZXdEaXYsbmV3RGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRvZG9zW3RvZG9JZF0uZGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgICAgICAgICAgICAgVG9kby5zYXZlVG9kbyh0YXNrLGN1cnJlbnRUb2Rvc1t0b2RvSWRdKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gXG5cbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld0NoZWNrYm94KTtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld0RhdGUpO1xuXG4gICAgICAgIGFwcGVuZFRvZG9TZWN0aW9uVWwobmV3Um93KTtcblxuICAgICAgICBpZiAoIXRvZG8pIHtcbiAgICAgICAgICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJuZXctdG9kby1pbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gY3VycmVudFRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3R1YWxEaXYgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0YXNrLCB0aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEaXYgPSBlbGVtZW50Lm5ld0RpdigpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGUuY3VycmVudFRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VG9kbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuaW5uZXJUZXh0ID0gbmV3VG9kby50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgbmV3VG9kby5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsRGl2LnJlcGxhY2VDaGlsZChuZXdEaXYsIGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRvZG9zW25ld1RvZG8uaWRdID0gbmV3VG9kbztcblxuICAgICAgICAgICAgICAgICAgICBUb2RvLnNhdmVUb2RvKHRhc2ssIG5ld1RvZG8pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRUb2Rvcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlkb3duQmx1cik7XG4gICAgICAgICAgICBuZXdUaXRsZS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICAgICAgICBuZXdUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgbmV3Um93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdG9kby5pZCk7XG4gICAgICAgICAgICBuZXdDaGVja2JveC5jaGVja2VkID0gdG9kby5jaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgYWRkTmV3VGFzayk7XG4gICAgY3JlYXRlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKGUpID0+IGNyZWF0ZVRvZG9ET00oKSk7XG5cbiAgICBsb2FkVGFza3MoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=