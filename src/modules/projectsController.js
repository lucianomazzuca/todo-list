class Project {
    constructor(name){
        this.name = name,
        this.tasks = []
    };

    getName() {
        return this.name
    }

    getTasks() {
        return this.tasks;
    }
}

function Task(name, description, priority, dueDate) {
    let isDone = false;

    function changeStatus() {
        this.isDone = !this.isDone;
    }

    return{
        name, description, priority, dueDate, isDone, changeStatus
    }
}

const dbProjects = (function() {
    let projects = [];

    function getAllProjects() {
        return projects;
    };

    function addProject(newProject) {
        projects.push(newProject);
    };

    function delProject(projectIndex) {
        projects.splice(projectIndex, 1);
    };

    function addTask(projectIndex, task) {
        projects[projectIndex].tasks.push(task);
    };

    function delTask(projectIndex, taskIndex){
        projects[projectIndex].tasks.splice(taskIndex, 1);
    };

    function changeTaskDoneStatus(projectIndex, taskIndex){
        projects[projectIndex].tasks[taskIndex].changeStatus();
    }

    function getTaskFromProject(projectIndex){
        return projects[projectIndex].tasks;
    }

    return{
        addProject,
        getAllProjects,
        delProject,
        addTask,
        delTask,
        changeTaskDoneStatus,
        getTaskFromProject
    }
})();


let project1 = new Project('Lunes');
let project2 = new Project('Martes');

let task1 = new Task('ir al gimnasio', 'Hacer pecho y hombros', 'media', '10/10/2020');
let task2 = new Task('Preparar la cena', 'Hacer pecho y hombros', 'media', '10/10/2020');
let task3 = new Task('Armar la cama', 'Hacer pecho y hombros', 'media', '10/10/2020');

dbProjects.addProject(project1)
dbProjects.addTask(0, task1);
dbProjects.addTask(0, task2);
dbProjects.addTask(0, task3);

dbProjects.addProject(project2)
dbProjects.addTask(1, task1);
dbProjects.addTask(1, task2);


export default dbProjects;