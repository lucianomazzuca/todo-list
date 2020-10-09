/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ \"./src/modules/DOM.js\");\n/* harmony import */ var _modules_projectsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/projectsController */ \"./src/modules/projectsController.js\");\n\r\n\r\n\r\n\r\n\r\n(function sidebar() {\r\n    \r\n})();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projectsController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsController */ \"./src/modules/projectsController.js\");\n\r\n\r\nconst event = function () {\r\n    //Cache DOM\r\n    const formProject = document.querySelector(\"#project-form\");\r\n    const projectContainer = document.getElementsByClassName(\r\n        \"project-container\"\r\n    );\r\n    const btnSubmitProject = document.querySelector(\"#sumbmit-project\");\r\n    const btnAddProject = document.getElementById(\"add-project\");\r\n\r\n    \r\n    //Bind Events\r\n    btnAddProject.addEventListener(\"click\", openFormProject);\r\n    btnSubmitProject.addEventListener(\"click\", getNewProjectName);\r\n\r\n    function bindProjectLinks() {\r\n        const projectLink = document.querySelectorAll(\".project\");\r\n        projectLink.forEach((project) => {\r\n            project.addEventListener(\"click\", renderTasks);\r\n        });\r\n    }\r\n\r\n    function openFormProject() {\r\n        formProject.style.display = \"flex\";\r\n    }\r\n\r\n    function closeFormProject() {\r\n        formProject.style.display = \"none\";\r\n    }\r\n\r\n    function deleteProjectContainer() {\r\n        const elements = document.getElementsByClassName(\"project\");\r\n        while (elements.length > 0) {\r\n            elements[0].parentNode.removeChild(elements[0]);\r\n        }\r\n    }\r\n\r\n    function getNewProjectName(e) {\r\n        e.preventDefault();\r\n        const projectName = document.querySelector(\"#project-name\").value;\r\n\r\n        _projectsController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProject(projectName);\r\n        console.log(_projectsController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProjects());\r\n        deleteProjectContainer();\r\n        renderProjectsSidebar();\r\n        bindProjectLinks()\r\n        closeFormProject();\r\n    }\r\n\r\n    function getTasks(e) {\r\n        let projectIndex = e.target.id;\r\n        let tasks = _projectsController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTaskFromProject(projectIndex);\r\n\r\n        console.log(tasks);\r\n        return tasks;\r\n    }\r\n\r\n    function deleteTaskContainer() {\r\n        const elements = document.getElementsByClassName(\"task-card\");\r\n        while (elements.length > 0) {\r\n            elements[0].parentNode.removeChild(elements[0]);\r\n        }\r\n    }\r\n\r\n    function renderTasks(e) {\r\n        const tasks = getTasks(e);\r\n        deleteTaskContainer();\r\n\r\n        tasks.forEach(function (task, index) {\r\n            //Render card\r\n            const divTask = document.createElement(\"div\");\r\n            divTask.classList.add(\"task-card\");\r\n            divTask.id = index;\r\n            document.querySelector(\".task-container\").appendChild(divTask);\r\n\r\n            //Title\r\n            const title = document.createElement(\"div\");\r\n            title.classList.add(\"title\");\r\n            title.innerText = task.name;\r\n            divTask.appendChild(title);\r\n\r\n            //Expire\r\n            const date = document.createElement(\"div\");\r\n            date.classList.add(\"expire\");\r\n            date.innerText = task.dueDate;\r\n            divTask.appendChild(date);\r\n\r\n            //Button\r\n            const btnDetail = document.createElement(\"button\");\r\n            btnDetail.innerText = \"Details\";\r\n            const divDetail = document.createElement(\"div\");\r\n            divDetail.classList.add(\"task-details\");\r\n            divDetail.appendChild(btnDetail);\r\n            divTask.appendChild(divDetail);\r\n\r\n            const btnDelete = document.createElement(\"button\");\r\n            btnDelete.innerText = \"Delete\";\r\n            const divDelete = document.createElement(\"div\");\r\n            divDelete.classList.add(\"task-delete\");\r\n            divDelete.appendChild(btnDelete);\r\n            divTask.appendChild(divDelete);\r\n        });\r\n    }\r\n\r\n    bindProjectLinks()\r\n\r\n    return {\r\n        getNewProjectName,\r\n    };\r\n};\r\n\r\nfunction renderProjectsSidebar() {\r\n    let projects = _projectsController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAllProjects();\r\n\r\n    projects.forEach(function (project, index) {\r\n        const divProject = document.createElement(\"div\");\r\n        divProject.classList.add(\"project\");\r\n        divProject.id = index;\r\n        divProject.innerText = project.name;\r\n        document.querySelector(\".project-container\").appendChild(divProject);\r\n    });\r\n}\r\n\r\nrenderProjectsSidebar();\r\nevent();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (event);\r\n\n\n//# sourceURL=webpack:///./src/modules/DOM.js?");

/***/ }),

/***/ "./src/modules/projectsController.js":
/*!*******************************************!*\
  !*** ./src/modules/projectsController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\r\n    constructor(name){\r\n        this.name = name,\r\n        this.tasks = []\r\n    };\r\n\r\n    getName() {\r\n        return this.name\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n}\r\n\r\nfunction Task(name, description, priority, dueDate) {\r\n    let isDone = false;\r\n\r\n    function changeStatus() {\r\n        this.isDone = !this.isDone;\r\n    }\r\n\r\n    return{\r\n        name, description, priority, dueDate, isDone, changeStatus\r\n    }\r\n}\r\n\r\nconst dbProjects = (function() {\r\n    let projects = [];\r\n\r\n    function getAllProjects() {\r\n        return projects;\r\n    };\r\n\r\n    function addProject(projectName) {\r\n        let project = new Project(projectName);\r\n        projects.push(project);\r\n    };\r\n\r\n    function delProject(projectIndex) {\r\n        projects.splice(projectIndex, 1);\r\n    };\r\n\r\n    function addTask(projectIndex, task) {\r\n        projects[projectIndex].tasks.push(task);\r\n    };\r\n\r\n    function delTask(projectIndex, taskIndex){\r\n        projects[projectIndex].tasks.splice(taskIndex, 1);\r\n    };\r\n\r\n    function changeTaskDoneStatus(projectIndex, taskIndex){\r\n        projects[projectIndex].tasks[taskIndex].changeStatus();\r\n    }\r\n\r\n    function getTaskFromProject(projectIndex){\r\n        return projects[projectIndex].tasks;\r\n    }\r\n\r\n    return{\r\n        addProject,\r\n        getAllProjects,\r\n        delProject,\r\n        addTask,\r\n        delTask,\r\n        changeTaskDoneStatus,\r\n        getTaskFromProject\r\n    }\r\n})();\r\n\r\n\r\nlet project1 = new Project('Lunes');\r\nlet project2 = new Project('Martes');\r\n\r\nlet task1 = new Task('ir al gimnasio', 'Hacer pecho y hombros', 'media', '10/10/2020');\r\nlet task2 = new Task('Preparar la cena', 'Hacer pecho y hombros', 'media', '10/10/2020');\r\nlet task3 = new Task('Armar la cama', 'Hacer pecho y hombros', 'media', '10/10/2020');\r\n\r\ndbProjects.addProject('Lunes')\r\ndbProjects.addTask(0, task1);\r\ndbProjects.addTask(0, task2);\r\ndbProjects.addTask(0, task3);\r\n\r\ndbProjects.addProject('Martes')\r\ndbProjects.addTask(1, task1);\r\ndbProjects.addTask(1, task2);\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dbProjects);\n\n//# sourceURL=webpack:///./src/modules/projectsController.js?");

/***/ })

/******/ });