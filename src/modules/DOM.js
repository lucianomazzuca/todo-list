import {dbProjects, Task} from "./projectsController";

const event = function () {
    let currentProject = 1;

    //Cache DOM
    const formProject = document.querySelector("#project-form");
    const formTask = document.querySelector("#task-form")
    const projectContainer = document.getElementsByClassName(
        "project-container"
    );
    const btnSubmitProject = document.querySelector("#sumbmit-project");
    const btnAddProject = document.getElementById("add-project");
    const btnAddTask = document.getElementById("add-task-btn");
    const btnSubmitTask = document.getElementById('sumbmit-task');


    //Bind Events
    btnAddProject.addEventListener("click", openFormProject);
    btnSubmitProject.addEventListener("click", getNewProjectName);
    btnAddTask.addEventListener("click", openFormTask);
    btnSubmitTask.addEventListener('click', getNewTaskName);

    function bindProjectLinks() {
        const projectLink = document.querySelectorAll(".project");
        projectLink.forEach((project) => {
            project.addEventListener("click", renderTasks);
        });
    }

    
    function openFormProject() {
        formProject.style.display = "flex";
    }

    function closeFormProject() {
        formProject.style.display = "none";
    }

    function openFormTask() {
        formTask.style.display = "flex";
    }

    function closeFormTask() {
        formTask.style.display = 'none';
    }

    function deleteProjectContainer() {
        const elements = document.getElementsByClassName("project");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    function getNewProjectName(e) {
        e.preventDefault();
        const projectName = document.querySelector("#project-name").value;

        dbProjects.addProject(projectName);
        console.log(dbProjects.getAllProjects());
        deleteProjectContainer();
        renderProjectsSidebar();
        bindProjectLinks()
        closeFormProject();
    }

    function getNewTaskName(e) {
        e.preventDefault();

        //cache task
        const taskTitle = document.querySelector("#task-title").value;
        const taskDescription = document.querySelector('#task-description').value;
        const taskDate = document.querySelector('#task-date').value;
        const taskPriority = document.querySelector('#task-priority').value;

        const newTask = new Task(taskTitle, taskDescription, taskPriority, taskDate);

        dbProjects.addTask(currentProject, newTask);
        console.log(dbProjects.getTaskFromProject(currentProject));
        renderTasks();
        closeFormTask();
    }
    
    function deleteTaskContainer() {
        const elements = document.getElementsByClassName("task-card");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    function getTasks(index) {
        let projectIndex = index;
        let tasks = dbProjects.getTaskFromProject(projectIndex);

        console.log(tasks);
        return tasks;
    }

    function renderTasks(e) {
        if(e == undefined){
            currentProject = 1;
        } else{
            currentProject = e.target.id;
        }
        const tasks = getTasks(currentProject);
        deleteTaskContainer();

        tasks.forEach(function (task, index) {
            //Render card
            const divTask = document.createElement("div");
            divTask.classList.add("task-card");
            divTask.id = index;
            document.querySelector(".task-container").appendChild(divTask);

            //Title
            const title = document.createElement("div");
            title.classList.add("title");
            title.innerText = task.name;
            divTask.appendChild(title);

            //Expire
            const date = document.createElement("div");
            date.classList.add("expire");
            date.innerText = task.dueDate;
            divTask.appendChild(date);

            //Button
            const btnDetail = document.createElement("button");
            btnDetail.innerText = "Details";
            const divDetail = document.createElement("div");
            divDetail.classList.add("task-details");
            divDetail.appendChild(btnDetail);
            divTask.appendChild(divDetail);

            const btnDelete = document.createElement("button");
            btnDelete.innerText = "Delete";
            const divDelete = document.createElement("div");
            divDelete.classList.add("task-delete");
            divDelete.appendChild(btnDelete);
            divTask.appendChild(divDelete);
        });
    }

    bindProjectLinks()

    return {
        getNewProjectName,
    };
};

function renderProjectsSidebar() {
    let projects = dbProjects.getAllProjects();

    projects.forEach(function (project, index) {
        const divProject = document.createElement("div");
        divProject.classList.add("project");
        divProject.id = index;
        divProject.innerText = project.name;
        document.querySelector(".project-container").appendChild(divProject);
    });
}

renderProjectsSidebar();
event();

export default event;
