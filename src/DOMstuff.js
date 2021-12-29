import openProjectForm from './outline_menu_black_24dp.png';

const DOMstuff = (function(){
//this is currrently my most fucking disgusting of a code
//this makes the new project

    const makeProject = function(project){
        const newProject = document.createElement('div');
        newProject.classList.add('newproject');
        newProject.innerHTML = `
        <div class="checklist-container">
          <div class="header-container">
              <h1>${project}</h1>
          </div>
          <div class="task-container" id="${project}"></div>
          <form class="form-container">
             <input type="text" class="task-input" placeholder="Task Name">
             <input type="date" class="date-input">
             <button>+ NEW TASK</button>
          </form>
        </div>`;
    
        document.getElementById('container').appendChild(newProject);

    
        return newProject;
    };

    const _makeProjectFormContainer = function(){
        const formContainer = document.createElement('div');
        formContainer.classList.add('projectForm-container');
        document.body.appendChild(formContainer);

        return formContainer;
    };

    const _makeProjectForm = function(){
        const projectInput = document.createElement('input');
        projectInput.setAttribute('type', 'text');
        projectInput.placeholder = `New Project Name`;
        projectInput.id = `project-input`;
        document.querySelector('.projectForm-container').appendChild(projectInput);

        return projectInput;
    };

    const _makeProjectBtn = function(){
        const newProject = document.createElement('button');
        newProject.classList.add('newProject-btn');
        newProject.innerText = `+ NEW PROJECT`;
        document.querySelector('.projectForm-container').appendChild(newProject);

        return newProject;
    };

    const _makeCloseBtn = function(){
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        closeBtn.innerText = `X`;
        document.querySelector('.projectForm-container').appendChild(closeBtn);

        return closeBtn;
    };

    const _makeOpenProjectFormBtn = function(){
        const openBtn = document.createElement('img');
        openBtn.src = openProjectForm;
        openBtn.classList.add('open-btn')
        document.getElementById('uppercontainer').appendChild(openBtn);

        return openBtn;
    };

//this makes a form so users can make new projects
    const makeProjectForm = function(){
        _makeOpenProjectFormBtn();
        _makeProjectFormContainer();
        _makeProjectForm();
        _makeProjectBtn();
        _makeCloseBtn();
    };

    return {
        makeProject,
        makeProjectForm,
    };

})();

export {DOMstuff};