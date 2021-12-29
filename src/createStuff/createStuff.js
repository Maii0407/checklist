import { logicStuff } from "../logicStuff/logicStuff";

const createStuff = (function(){

    function generateProject(){
        document.getElementById('main-content').innerHTML = '';
        logicStuff.projectList.forEach(project => {
            const newProject = document.createElement('div');
            newProject.classList.add('new-project');
            newProject.innerHTML =
             `<div class="header-container">
                  <h1>${project.name}</h1>
              </div>
              <form class="form-container">
                 <input type="text" class="task-input" placeholder="Task Name">
                 <input type="date" class="date-input">
                 <button>+ NEW TASK</button>
              </form>
              <div class="task-container" id="${project.name}"></div>`;

            document.getElementById('main-content').appendChild(newProject);

            return newProject;
        });
    };

    function makeNewProject(newProject){
        const input = document.querySelector('.project-input');

        if(input.value == null || input.value == ''){
            input.value = `empty project`;
        };

        newProject = new logicStuff.project(input.value);
        logicStuff.projectList.push(newProject);
        input.value = '';
        generateProject();
    };

    return {
        generateProject,
        makeNewProject,
    };
})();

export {createStuff};