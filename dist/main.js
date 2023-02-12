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
    let createTaskButton = document.querySelector(".tasks > button");
    let currentTask = null;

    function appendTaskSectionUl(elmt) {
        let newLi = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newLi();
        // console.log(element)
        if (elmt) newLi.appendChild(elmt);

        taskSectionUl.appendChild(newLi);

        return newLi;
    }

    function createTask(task) {
        let newTask = appendTaskSectionUl();
        newTask.classList.add("task");
        newTask.innerText = task;

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

            createTask(actualInput.value);
            // newTask.classList.add('.task');
            // newTask.innerText = actualInput.value;
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
        newInput.addEventListener("keydown", (e) => {
            // console.log(e)
            if (e.key === "Enter" || e.key === "Escape") {
                e.currentTarget.blur();
            }
        });

        appendTaskSectionUl(newInput);
        newInput.focus();
        // currentFocusedInput = newInput;
    }

    function changeCurrentTask(e){

        currentTask.classList.remove('focused-task');
        e.currentTarget.classList.add('focused-task');

        currentTask = e.currentTarget;
        console.log(currentTask);

    }

    function loadTasks() {
        let initialTaskList = _todo_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadTasks();


        for(let i = 0; i < initialTaskList.length;++i){
            
            let task = initialTaskList[i];
            let taskElem = createTask(task);
            taskElem.addEventListener('click',changeCurrentTask);

            if(i === 0){
                taskElem.classList.add('focused-task');
                currentTask = taskElem;

                

            }
        }
    }

    

    createTaskButton.addEventListener("focus", addNewTask);
    loadTasks();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBLFlBQVk7O0FBRVosQ0FBQzs7QUFFRCxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQzNDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsaUJBQWlCO0FBQzFFOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHlEQUF5RCxpQkFBaUI7QUFDMUU7OztBQUdBOzs7OztBQUtBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5REFBeUQsaUJBQWlCO0FBQzFFOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUN2SXBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ2E7O0FBRTFDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdFQUFhO0FBQ2pDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IseURBQWE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFhO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLHlFQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QiwwREFBYzs7O0FBRzVDLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jcmVhdGVFbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGVsZW1lbnQgPSAoZnVuY3Rpb24oKXtcblxuXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChlbGVtTmFtZSl7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1OYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiAgbmV3RGl2KCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdCdXR0b24oKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0xpKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1VsKCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0lucHV0KCl7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3SW5wdXRPZlR5cGUodHlwZSl7XG4gICAgICAgIGxldCBuZXdJbiA9IG5ld0lucHV0KCk7XG4gICAgICAgIG5ld0luLnNldEF0dHJpYnV0ZSgndHlwZScsdHlwZSk7XG4gICAgICAgIHJldHVybiBuZXdJbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxFbGVtKHNlbGVjdG9yKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikucmVtb3ZlKCk7XG4gICAgfVxuXG5cblxuICAgIHJldHVybiB7bmV3RGl2LG5ld0J1dHRvbixuZXdMaSxuZXdVbCxkZWxFbGVtLG5ld0lucHV0T2ZUeXBlfTtcblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50OyIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIHRpdGxlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIHRvZ2dsZVRvZG9DaGVjaygpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5jaGVja2VkID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaW5kVG9kbyh0YXNrLGlkKXtcbiAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcbiAgICAgICAgbGV0IHRvZG9UYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGFzaykpO1xuXG4gICAgICAgIGlmKHRvZG9UYXNrcyl7XG5cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvVGFza3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWN0dWFsVG9kbyA9IHRvZG9UYXNrc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsVG9kby5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGFjdHVhbFRvZG87XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaW5kVGFzayh0YXNrKXtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIixKU09OLnN0cmluZ2lmeSh7bGlzdDpbXSxuZXh0SWQ6MH0pKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcbiAgICAgICAgbGV0IHRhc2tzTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkubGlzdDtcblxuICAgICAgICBpZih0YXNrc0xpc3Qpe1xuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NMaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdHVhbFRhc2sgPSB0YXNrc0xpc3RbaV07XG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbFRhc2sgPT09IHRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBhY3R1YWxUYXNrO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcblxuXG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRvZG8odG9kbykge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odG9kby50YXNrKSkge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB0b2RvVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RvLnRhc2spO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9UYXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBhY3R1YWxUb2RvID0gdG9kb1Rhc2tzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxUb2RvLmlkID09PSB0b2RvLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0b2RvVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlVG9kbyh0b2RvKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RvLnRhc2spID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpLnB1c2godG9kby50YXNrKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZG8udGFzaywgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVtb3ZlVG9kbyh0b2RvKSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbGV0IGlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKS5pZDtcbiAgICAgICAgICAgIHRvZG8uaWQgPSBpZDtcbiAgICAgICAgICAgICsraWQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRvZG9UYXNrcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGxvYWRUYXNrcygpe1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLEpTT04uc3RyaW5naWZ5KHtsaXN0OltdLG5leHRJZDowfSkpO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKS5saXN0O1xuXG5cblxuXG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUb2RvcygpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlVGFzayh0YXNrKXtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIixKU09OLnN0cmluZ2lmeSh7bGlzdDpbXSxuZXh0SWQ6MH0pKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKHRhc2spKXtcbiAgICAgICAgICAgIGxldCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSlcblxuICAgICAgICAgICAgdGFza3MubGlzdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFzayxKU09OLnN0cmluZ2lmeShbXSkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICAgIH1cblxuXG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG8uanNcIjtcbmltcG9ydCBlbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzLmpzXCI7XG5cbi8vIGxldCB0ZXN0ID0gbmV3IFRvZG8oJ2NvbXByYXMnLCdhcnJveicpO1xuXG4vLyBjb25zb2xlLmxvZyh0ZXN0KTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdGFza1NlY3Rpb25VbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3Mtc2VjdGlvbiA+IHVsXCIpO1xuICAgIGxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcyA+IGJ1dHRvblwiKTtcbiAgICBsZXQgY3VycmVudFRhc2sgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gYXBwZW5kVGFza1NlY3Rpb25VbChlbG10KSB7XG4gICAgICAgIGxldCBuZXdMaSA9IGVsZW1lbnQubmV3TGkoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgICAgaWYgKGVsbXQpIG5ld0xpLmFwcGVuZENoaWxkKGVsbXQpO1xuXG4gICAgICAgIHRhc2tTZWN0aW9uVWwuYXBwZW5kQ2hpbGQobmV3TGkpO1xuXG4gICAgICAgIHJldHVybiBuZXdMaTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spIHtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBhcHBlbmRUYXNrU2VjdGlvblVsKCk7XG4gICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIG5ld1Rhc2suaW5uZXJUZXh0ID0gdGFzaztcblxuICAgICAgICByZXR1cm4gbmV3VGFzaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdUYXNrSW5wdXRMZWF2ZShhY3R1YWxJbnB1dCkge1xuICAgICAgICAvLyBsZXQgYWN0dWFsSW5wdXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdld2UnKVxuICAgICAgICBhY3R1YWxJbnB1dC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAvLyBhY3R1YWxJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJyk7XG5cbiAgICAgICAgaWYgKGFjdHVhbElucHV0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBpZiAoVG9kby5maW5kVGFzayhhY3R1YWxJbnB1dC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNyZWF0ZVRhc2soYWN0dWFsSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgLy8gbmV3VGFzay5jbGFzc0xpc3QuYWRkKCcudGFzaycpO1xuICAgICAgICAgICAgLy8gbmV3VGFzay5pbm5lclRleHQgPSBhY3R1YWxJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgIFRvZG8uc2F2ZVRhc2soYWN0dWFsSW5wdXQudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTmV3VGFzayhlKSB7XG4gICAgICAgIC8vIGlmKGN1cnJlbnRGb2N1c2VkSW5wdXQudmFsdWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3V3dScpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBsZXQgbmV3SW5wdXQgPSBlbGVtZW50Lm5ld0lucHV0T2ZUeXBlKFwidGV4dFwiKTtcbiAgICAgICAgbmV3SW5wdXQuY2xhc3NMaXN0LmFkZChcIm5ldy10YXNrLWlucHV0XCIpO1xuICAgICAgICBuZXdJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoZSkgPT5cbiAgICAgICAgICAgIG5ld1Rhc2tJbnB1dExlYXZlKGUuY3VycmVudFRhcmdldClcbiAgICAgICAgKTtcbiAgICAgICAgbmV3SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcGVuZFRhc2tTZWN0aW9uVWwobmV3SW5wdXQpO1xuICAgICAgICBuZXdJbnB1dC5mb2N1cygpO1xuICAgICAgICAvLyBjdXJyZW50Rm9jdXNlZElucHV0ID0gbmV3SW5wdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQ3VycmVudFRhc2soZSl7XG5cbiAgICAgICAgY3VycmVudFRhc2suY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXNlZC10YXNrJyk7XG4gICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdmb2N1c2VkLXRhc2snKTtcblxuICAgICAgICBjdXJyZW50VGFzayA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2spO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRhc2tzKCkge1xuICAgICAgICBsZXQgaW5pdGlhbFRhc2tMaXN0ID0gVG9kby5sb2FkVGFza3MoKTtcblxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbml0aWFsVGFza0xpc3QubGVuZ3RoOysraSl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB0YXNrID0gaW5pdGlhbFRhc2tMaXN0W2ldO1xuICAgICAgICAgICAgbGV0IHRhc2tFbGVtID0gY3JlYXRlVGFzayh0YXNrKTtcbiAgICAgICAgICAgIHRhc2tFbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjaGFuZ2VDdXJyZW50VGFzayk7XG5cbiAgICAgICAgICAgIGlmKGkgPT09IDApe1xuICAgICAgICAgICAgICAgIHRhc2tFbGVtLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQtdGFzaycpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrID0gdGFza0VsZW07XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG5cbiAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBhZGROZXdUYXNrKTtcbiAgICBsb2FkVGFza3MoKTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=