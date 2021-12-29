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

    return {
        makeProject,
        makeProjectForm,
    };

})();

export {DOMstuff};