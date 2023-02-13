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

        if (todo && todo.date) {
            newDate.classList.add("todo-date");
            newDate.innerText = todo.date;
        } else newDate.classList.add("todo-date-input");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxxQkFBcUIsaUVBQWM7QUFDbkMsMEJBQTBCLHlFQUFzQjtBQUNoRDtBQUNBO0FBQ0Esa0JBQWtCLGlFQUFjO0FBQ2hDLGtCQUFrQix5RUFBc0I7O0FBRXhDLDhCQUE4QixpRUFBYyxLQUFLLHlFQUFzQjs7QUFFdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0RBQUk7QUFDMUMsaUNBQWlDLGlFQUFjOztBQUUvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxvQkFBb0IseURBQWE7O0FBRWpDO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3JlYXRlRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBlbGVtZW50ID0gKGZ1bmN0aW9uKCl7XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbU5hbWUpe1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtTmFtZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gIG5ld0Rpdigpe1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3QnV0dG9uKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdMaSgpe1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdVbCgpe1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdJbnB1dCgpe1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0lucHV0T2ZUeXBlKHR5cGUpe1xuICAgICAgICBsZXQgbmV3SW4gPSBuZXdJbnB1dCgpO1xuICAgICAgICBuZXdJbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLHR5cGUpO1xuICAgICAgICByZXR1cm4gbmV3SW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsRWxlbShzZWxlY3Rvcil7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLnJlbW92ZSgpO1xuICAgIH1cblxuXG5cbiAgICByZXR1cm4ge25ld0RpdixuZXdCdXR0b24sbmV3TGksbmV3VWwsZGVsRWxlbSxuZXdJbnB1dE9mVHlwZX07XG5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudDsiLCJjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrLCB0aXRsZSwgaXNOZXcgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKGlzTmV3KSB7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAgICAgICBcInRhc2tzXCIsXG4gICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbGlzdDogW10sIG5leHRJZDogMCB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cbiAgICAgICAgICAgIHRoaXMuaWQgPSB0YXNrcy5uZXh0SWQrKztcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzLm5leHRJZCk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgICAgICAgfSBlbHNlIHRoaXMuaWQgPSBudWxsO1xuICAgIH1cblxuICAgIHRvZ2dsZVRvZG9DaGVjaygpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5jaGVja2VkID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBfY3JlYXRlVG9kb0Zyb21Mb2NhbFN0b3JhZ2UodG9kb0Zyb21Mb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyhcbiAgICAgICAgICAgIHRvZG9Gcm9tTG9jYWxTdG9yYWdlLnRhc2ssXG4gICAgICAgICAgICB0b2RvRnJvbUxvY2FsU3RvcmFnZS50aXRsZSxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICk7XG5cbiAgICAgICAgbmV3VG9kby5kYXRlID0gdG9kb0Zyb21Mb2NhbFN0b3JhZ2UuZGF0ZTtcbiAgICAgICAgbmV3VG9kby5jaGVja2VkID0gdG9kb0Zyb21Mb2NhbFN0b3JhZ2UuY2hlY2tlZDtcbiAgICAgICAgbmV3VG9kby5pZCA9IHRvZG9Gcm9tTG9jYWxTdG9yYWdlLmlkO1xuXG4gICAgICAgIHJldHVybiBuZXdUb2RvO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVG9kb3ModGFzaykge1xuICAgICAgICBsZXQgc3RvcmFnZVRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3JhZ2VUb2Rvcyk7XG5cbiAgICAgICAgbGV0IGxvY2FsVG9kb3MgPSB7fVxuXG4gICAgICAgIGZvcihsZXQgYWN0dWFsVG9kb0lkIGluIHN0b3JhZ2VUb2Rvcyl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdG9yYWdlVG9kbylcbiAgICAgICAgICAgIGxldCBsb2NhbFRvZG8gPSB0aGlzLl9jcmVhdGVUb2RvRnJvbUxvY2FsU3RvcmFnZShzdG9yYWdlVG9kb3NbYWN0dWFsVG9kb0lkXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFRvZG8pO1xuXG4gICAgICAgICAgICBsb2NhbFRvZG9zW2xvY2FsVG9kby5pZF0gPSBsb2NhbFRvZG87XG5cblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFRvZG9zO1xuICAgIH1cblxuXG4gICAgc3RhdGljIHNhdmVUb2RvKHRhc2ssdG9kbyl7XG4gICAgICAgIGxldCB0b2RvTGlzdEZyb21UYXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0YXNrKSk7XG4gICAgICAgIHRvZG9MaXN0RnJvbVRhc2tbdG9kby5pZF0gPSB0b2RvO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2ssSlNPTi5zdHJpbmdpZnkodG9kb0xpc3RGcm9tVGFzaykpXG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVUb2Rvcyh0YXNrLCB0b2Rvcykge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YXNrLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaW5kVGFzayh0YXNrKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICBcInRhc2tzXCIsXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBsaXN0OiBbXSwgbmV4dElkOiAwIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcbiAgICAgICAgbGV0IHRhc2tzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkubGlzdDtcblxuICAgICAgICBpZiAodGFza3NMaXN0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBhY3R1YWxUYXNrID0gdGFza3NMaXN0W2ldO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxUYXNrID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gYWN0dWFsVGFzaztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVGFza3MoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgICBcInRhc2tzXCIsXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyBsaXN0OiBbXSwgbmV4dElkOiAwIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkubGlzdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2F2ZVRhc2sodGFzaykge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICAgXCJ0YXNrc1wiLFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbGlzdDogW10sIG5leHRJZDogMCB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0odGFzaykpIHtcbiAgICAgICAgICAgIGxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSk7XG5cbiAgICAgICAgICAgIHRhc2tzLmxpc3QucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRhc2ssIEpTT04uc3RyaW5naWZ5KHt9KSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCBlbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzLmpzXCI7XG5cbi8vIGxldCB0ZXN0ID0gbmV3IFRvZG8oJ2NvbXByYXMnLCdhcnJveicpO1xuXG4vLyBjb25zb2xlLmxvZyh0ZXN0KTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdGFza1NlY3Rpb25VbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3Mtc2VjdGlvbiA+IHVsXCIpO1xuICAgIGxldCB0b2RvU2VjdGlvblVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXNlY3Rpb24gPiB1bFwiKTtcbiAgICBsZXQgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MgPiBidXR0b25cIik7XG4gICAgbGV0IGNyZWF0ZVRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tc2VjdGlvbiA+IGJ1dHRvblwiKTtcbiAgICBsZXQgY3VycmVudFRhc2sgPSBudWxsO1xuICAgIGxldCBjdXJyZW50VG9kb3MgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24ga2V5ZG93bkJsdXIoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpV2l0aEVsbXQoZWxtdCkge1xuICAgICAgICBsZXQgbmV3TGkgPSBlbGVtZW50Lm5ld0xpKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXG4gICAgICAgIGlmIChlbG10KSBuZXdMaS5hcHBlbmRDaGlsZChlbG10KTtcblxuICAgICAgICByZXR1cm4gbmV3TGk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVG9kb1NlY3Rpb25VbChlbG10KSB7XG4gICAgICAgIGxldCBuZXdMaSA9IGNyZWF0ZUxpV2l0aEVsbXQoZWxtdCk7XG5cbiAgICAgICAgdG9kb1NlY3Rpb25VbC5hcHBlbmRDaGlsZChuZXdMaSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0xpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRhc2tTZWN0aW9uVWwoZWxtdCkge1xuICAgICAgICBsZXQgbmV3TGkgPSBjcmVhdGVMaVdpdGhFbG10KGVsbXQpO1xuXG4gICAgICAgIHRhc2tTZWN0aW9uVWwuYXBwZW5kQ2hpbGQobmV3TGkpO1xuXG4gICAgICAgIHJldHVybiBuZXdMaTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBhcHBlbmRUYXNrU2VjdGlvblVsKCk7XG4gICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIG5ld1Rhc2suaW5uZXJUZXh0ID0gdGFzaztcbiAgICAgICAgbmV3VGFzay5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIiwgdGFzayk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1Rhc2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3VGFza0lucHV0TGVhdmUoYWN0dWFsSW5wdXQpIHtcbiAgICAgICAgLy8gbGV0IGFjdHVhbElucHV0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZXdlJylcbiAgICAgICAgYWN0dWFsSW5wdXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcbiAgICAgICAgLy8gYWN0dWFsSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicpO1xuXG4gICAgICAgIGlmIChhY3R1YWxJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgaWYgKFRvZG8uZmluZFRhc2soYWN0dWFsSW5wdXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2soYWN0dWFsSW5wdXQudmFsdWUpO1xuXG4gICAgICAgICAgICAvLyBpZiAoY3VycmVudFRhc2spIHtcbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICAgICAgbmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsY2hhbmdlQ3VycmVudFRhc2spXG4gICAgICAgICAgICBjdXJyZW50VGFzayA9IG5ld1Rhc2s7XG5cbiAgICAgICAgICAgIFRvZG8uc2F2ZVRhc2soYWN0dWFsSW5wdXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTmV3VGFzayhlKSB7XG4gICAgICAgIC8vIGlmKGN1cnJlbnRGb2N1c2VkSW5wdXQudmFsdWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3V3dScpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgbmV3SW5wdXQgPSBlbGVtZW50Lm5ld0lucHV0T2ZUeXBlKFwidGV4dFwiKTtcbiAgICAgICAgbmV3SW5wdXQuY2xhc3NMaXN0LmFkZChcIm5ldy10YXNrLWlucHV0XCIpO1xuICAgICAgICBuZXdJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT5cbiAgICAgICAgICAgIG5ld1Rhc2tJbnB1dExlYXZlKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgKTtcbiAgICAgICAgbmV3SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5ZG93bkJsdXIpO1xuXG4gICAgICAgIGFwcGVuZFRhc2tTZWN0aW9uVWwobmV3SW5wdXQpO1xuICAgICAgICBuZXdJbnB1dC5mb2N1cygpO1xuICAgICAgICAvLyBjdXJyZW50Rm9jdXNlZElucHV0ID0gbmV3SW5wdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQ3VycmVudFRhc2soZSkge1xuICAgICAgICBjdXJyZW50VGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiZm9jdXNlZC10YXNrXCIpO1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImZvY3VzZWQtdGFza1wiKTtcblxuICAgICAgICBjdXJyZW50VGFzayA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgbG9hZFRvZG9zT2ZDdXJyZW50VGFzaygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VGFzayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRvZG9zT2ZDdXJyZW50VGFzaygpe1xuICAgICAgICBpZighY3VycmVudFRhc2spIHJldHVybjtcbiAgICAgICAgbGV0IGRhdGFUYXNrID0gY3VycmVudFRhc2suZ2V0QXR0cmlidXRlKCdkYXRhLXRhc2snKTtcblxuICAgICAgICBjdXJyZW50VG9kb3MgPSBUb2RvLmxvYWRUb2RvcyhkYXRhVGFzayk7XG5cbiAgICAgICAgcmVtb3ZlRWxlbWVudHModG9kb1NlY3Rpb25VbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFUYXNrKTtcblxuICAgICAgICBmb3IobGV0IGFjdHVhbFRvZG9JZCBpbiBjdXJyZW50VG9kb3Mpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFRvZG9zW2FjdHVhbFRvZG9JZF0pO1xuICAgICAgICAgICAgY3JlYXRlVG9kb0RPTShjdXJyZW50VG9kb3NbYWN0dWFsVG9kb0lkXSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUYXNrcygpIHtcbiAgICAgICAgbGV0IGluaXRpYWxUYXNrTGlzdCA9IFRvZG8ubG9hZFRhc2tzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbml0aWFsVGFza0xpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCB0YXNrID0gaW5pdGlhbFRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IHRhc2tFbGVtID0gY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIHRhc2tFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VDdXJyZW50VGFzayk7XG5cbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGFza0VsZW0uY2xhc3NMaXN0LmFkZChcImZvY3VzZWQtdGFza1wiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFzayA9IHRhc2tFbGVtO1xuICAgICAgICAgICAgICAgIGxvYWRUb2Rvc09mQ3VycmVudFRhc2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHMoZWxtKXtcblxuICAgICAgICB3aGlsZShlbG0uZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBlbG0uZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kb0RPTSh0b2RvKSB7XG4gICAgICAgIGlmIChjdXJyZW50VGFzayA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBuZXdSb3cgPSBlbGVtZW50Lm5ld0RpdigpO1xuICAgICAgICBsZXQgbmV3Q2hlY2tib3ggPSBlbGVtZW50Lm5ld0lucHV0T2ZUeXBlKFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxldCBuZXdEYXRlID1cbiAgICAgICAgICAgIHRvZG8gJiYgdG9kby5kYXRlXG4gICAgICAgICAgICAgICAgPyBlbGVtZW50Lm5ld0RpdigpXG4gICAgICAgICAgICAgICAgOiBlbGVtZW50Lm5ld0lucHV0T2ZUeXBlKFwiZGF0ZVwiKTtcblxuICAgICAgICBsZXQgbmV3VGl0bGUgPSB0b2RvID8gZWxlbWVudC5uZXdEaXYoKSA6IGVsZW1lbnQubmV3SW5wdXRPZlR5cGUoXCJ0ZXh0XCIpO1xuXG4gICAgICAgIG5ld1Jvdy5jbGFzc0xpc3QuYWRkKFwidG9kby1yb3dcIik7XG4gICAgICAgIG5ld0NoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWZpbmlzaGVkXCIpO1xuXG4gICAgICAgIGlmICh0b2RvICYmIHRvZG8uZGF0ZSkge1xuICAgICAgICAgICAgbmV3RGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kYXRlXCIpO1xuICAgICAgICAgICAgbmV3RGF0ZS5pbm5lclRleHQgPSB0b2RvLmRhdGU7XG4gICAgICAgIH0gZWxzZSBuZXdEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRhdGUtaW5wdXRcIik7XG5cbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld0NoZWNrYm94KTtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld0RhdGUpO1xuXG4gICAgICAgIGFwcGVuZFRvZG9TZWN0aW9uVWwobmV3Um93KTtcblxuICAgICAgICBpZiAoIXRvZG8pIHtcbiAgICAgICAgICAgIG5ld1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJuZXctdG9kby1pbnB1dFwiKTtcbiAgICAgICAgICAgIG5ld1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrID0gY3VycmVudFRhc2suZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3R1YWxEaXYgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyh0YXNrLCB0aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdEaXYgPSBlbGVtZW50Lm5ld0RpdigpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGUuY3VycmVudFRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmV3VG9kbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgICAgICAgICAgICAgICAgICBuZXdEaXYuaW5uZXJUZXh0ID0gbmV3VG9kby50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgbmV3VG9kby5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsRGl2LnJlcGxhY2VDaGlsZChuZXdEaXYsIGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRvZG9zW25ld1RvZG8uaWRdID0gbmV3VG9kbztcblxuICAgICAgICAgICAgICAgICAgICBUb2RvLnNhdmVUb2RvKHRhc2ssIG5ld1RvZG8pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRUb2Rvcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Um93LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBuZXdUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBrZXlkb3duQmx1cik7XG4gICAgICAgICAgICBuZXdUaXRsZS5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gICAgICAgICAgICBuZXdUaXRsZS5pbm5lclRleHQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgbmV3Um93LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdG9kby5pZCk7XG4gICAgICAgICAgICBuZXdDaGVja2JveC5jaGVja2VkID0gdG9kby5jaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgYWRkTmV3VGFzayk7XG4gICAgY3JlYXRlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKGUpID0+IGNyZWF0ZVRvZG9ET00oKSk7XG5cbiAgICBsb2FkVGFza3MoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=