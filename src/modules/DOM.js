import dbProjects from "./projectsController";

const event = (function() {
    //Cache DOM
    const popupBg = document.querySelector('#project-form');
    const btnAddProject = document.getElementById('add-project');
    const projectContainer = document.getElementsByClassName('project-container');
    const btnSubmitProject = document.querySelector('#sumbmit-project');

    //Bind Events
    btnAddProject.addEventListener('click', openFormAddProject);
    btnSubmitProject.addEventListener('click', getNewProjectName)
    

    function openPopupBg() {
        popupBg.style.display = 'flex';
    }

    function closePopupBg() {
        popupBg.style.display = 'none';
    }

    function openFormAddProject() {
        openPopupBg();
    }

    function getNewProjectName(e) {
        e.preventDefault()
        const projectName = document.querySelector('#project-name').value;

        dbProjects.addProject(projectName);

        closePopupBg()
    }

    return{
        getNewProjectName
    }
})()


function renderProjectsSidebar() {
    let projects = dbProjects.getAllProjects();

    for(let project of projects){
        const divProject = document.createElement('div');
        divProject.classList.add('project');
        divProject.innerText = project.name;
        document.querySelector('.project-container').appendChild(divProject)
    }
}

renderProjectsSidebar();

export default event
