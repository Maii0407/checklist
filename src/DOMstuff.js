
const DOMstuff = (function(){

//private
//this is currrently my most fucking disgusting of a code
const _makeProject = function(name){
    const newProject = document.createElement('div');
    newProject.classList.add('newproject');
    newProject.innerHTML = `
    <div class="checklist-container">
      <div class="header-container">
          <h1>${name}</h1>
      </div>
      <div class="task-container" id="${name}"></div>
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

//public
    const makeProject = function(name){
        _makeProject(name);
    };

    const makeProjectForm = function(){
        _makeProjectFormContainer();
        _makeProjectForm();
        _makeProjectBtn();
    };

    return {
        makeProject,
        makeProjectForm,
    };

})();

export {DOMstuff};