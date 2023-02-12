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
        let todoTasks = localStorage.getItem(task);

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

    static loadTodos() {
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem("tasks", {list:[],nextId:0});
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

    let taskSectionUl = document.querySelector('.tasks-section > ul');
    let createTaskButton = document.querySelector('.tasks > button');


    function appendTaskSectionUl(elmt){
        let newLi = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newLi();
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
        let newInput = _createElements_js__WEBPACK_IMPORTED_MODULE_1__["default"].newInputOfType('text');
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





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBLFlBQVk7O0FBRVosQ0FBQzs7QUFFRCxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQzNDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxpQkFBaUI7QUFDNUQ7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzlFcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDYzs7O0FBRzFDOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLG9CQUFvQixnRUFBYTtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7OztBQUdBO0FBQ0EsdUJBQXVCLHlFQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7OztBQUdBOzs7Ozs7OztBQVFBOzs7QUFHQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NyZWF0ZUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZWxlbWVudCA9IChmdW5jdGlvbigpe1xuXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1OYW1lKXtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbU5hbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uICBuZXdEaXYoKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld0J1dHRvbigpe1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3TGkoKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3VWwoKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV3SW5wdXQoKXtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXdJbnB1dE9mVHlwZSh0eXBlKXtcbiAgICAgICAgbGV0IG5ld0luID0gbmV3SW5wdXQoKTtcbiAgICAgICAgbmV3SW4uc2V0QXR0cmlidXRlKCd0eXBlJyx0eXBlKTtcbiAgICAgICAgcmV0dXJuIG5ld0luO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbEVsZW0oc2VsZWN0b3Ipe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5yZW1vdmUoKTtcbiAgICB9XG5cblxuXG4gICAgcmV0dXJuIHtuZXdEaXYsbmV3QnV0dG9uLG5ld0xpLG5ld1VsLGRlbEVsZW0sbmV3SW5wdXRPZlR5cGV9O1xuXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnQ7IiwiY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGFzaywgdGl0bGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdG9nZ2xlVG9kb0NoZWNrKCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0aGlzLmNoZWNrZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpbmRUb2RvKHRhc2ssaWQpe1xuICAgICAgICBsZXQgZm91bmQgPSBudWxsO1xuICAgICAgICBsZXQgdG9kb1Rhc2tzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGFzayk7XG5cbiAgICAgICAgaWYodG9kb1Rhc2tzKXtcblxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9UYXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBhY3R1YWxUb2RvID0gdG9kb1Rhc2tzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxUb2RvLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gYWN0dWFsVG9kbztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRvZG8odG9kbykge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odG9kby50YXNrKSkge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gbnVsbDtcbiAgICAgICAgICAgIGxldCB0b2RvVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RvLnRhc2spO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9UYXNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGxldCBhY3R1YWxUb2RvID0gdG9kb1Rhc2tzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChhY3R1YWxUb2RvLmlkID09PSB0b2RvLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICB0b2RvVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXRpYyBzYXZlVG9kbyh0b2RvKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0b2RvLnRhc2spID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpLnB1c2godG9kby50YXNrKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRvZG8udGFzaywgW10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVtb3ZlVG9kbyh0b2RvKSA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgbGV0IGlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKS5pZDtcbiAgICAgICAgICAgIHRvZG8uaWQgPSBpZDtcbiAgICAgICAgICAgICsraWQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRvZG9UYXNrcy5wdXNoKHRvZG8pO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkVG9kb3MoKSB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIHtsaXN0OltdLG5leHRJZDowfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvIGZyb20gJy4vdG9kby5qcycgXG5pbXBvcnQgZWxlbWVudCBmcm9tICcuL2NyZWF0ZUVsZW1lbnRzLmpzJztcblxuXG4vLyBsZXQgdGVzdCA9IG5ldyBUb2RvKCdjb21wcmFzJywnYXJyb3onKTtcblxuLy8gY29uc29sZS5sb2codGVzdCk7XG5cblxuKGZ1bmN0aW9uICgpIHtcblxuICAgIGxldCB0YXNrU2VjdGlvblVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLXNlY3Rpb24gPiB1bCcpO1xuICAgIGxldCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzID4gYnV0dG9uJyk7XG5cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRhc2tTZWN0aW9uVWwoZWxtdCl7XG4gICAgICAgIGxldCBuZXdMaSA9IGVsZW1lbnQubmV3TGkoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgICAgaWYoZWxtdClcbiAgICAgICAgICAgIG5ld0xpLmFwcGVuZENoaWxkKGVsbXQpO1xuXG4gICAgICAgIHRhc2tTZWN0aW9uVWwuYXBwZW5kQ2hpbGQobmV3TGkpO1xuXG4gICAgICAgIHJldHVybiBuZXdMaTtcblxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gbmV3VGFza0lucHV0TGVhdmUoYWN0dWFsSW5wdXQpe1xuXG4gICAgICAgIC8vIGxldCBhY3R1YWxJbnB1dCA9IGUuY3VycmVudFRhcmdldDtcbiAgICAgICAgYWN0dWFsSW5wdXQucGFyZW50Tm9kZS5yZW1vdmUoKTtcblxuICAgICAgICBpZihhY3R1YWxJbnB1dC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnLnRhc2snKTtcbiAgICAgICAgICAgIC8vIG5ld1Rhc2suaW5uZXJUZXh0ID0gYWN0dWFsSW5wdXQudmFsdWU7XG4gICAgICAgICAgICBsZXQgbmV3VGFzayA9IGFwcGVuZFRhc2tTZWN0aW9uVWwoKTtcbiAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgbmV3VGFzay5pbm5lclRleHQgPSBhY3R1YWxJbnB1dC52YWx1ZTtcblxuICAgICAgICB9XG5cblxuXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBhZGROZXdUYXNrKGUpe1xuICAgICAgICBsZXQgbmV3SW5wdXQgPSBlbGVtZW50Lm5ld0lucHV0T2ZUeXBlKCd0ZXh0Jyk7XG4gICAgICAgIG5ld0lucHV0LmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrLWlucHV0JylcbiAgICAgICAgbmV3SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsKGUpID0+IG5ld1Rhc2tJbnB1dExlYXZlKGUuY3VycmVudFRhcmdldCkgKTtcbiAgICAgICAgbmV3SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsKGUpID0+ICB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcGVuZFRhc2tTZWN0aW9uVWwobmV3SW5wdXQpO1xuXG4gICAgICAgIG5ld0lucHV0LmZvY3VzKCk7XG5cblxuICAgIH1cblxuXG5cblxuXG5cblxuICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGFkZE5ld1Rhc2spO1xuXG5cbn0pKClcblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9