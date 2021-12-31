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
                  <button type="button">REMOVE PROJECT</button>
              </div>
              <div class="task-container" id="${project.name}"></div>`;

            document.getElementById('main-content').appendChild(newProject);
            generateTask(project);

            return newProject;
        });
    };

    function generateTask(project){
        document.getElementById(project.name).innerHTML = '';

        project.taskList.forEach(task => {
            const newTask = document.createElement('div');
            newTask.classList.add('new-task');
            newTask.innerHTML = 
                `<button class="task-check">OK</button>
                 <div class="task-name">${task.name}</div>
                 <div class="task-date">${task.date}</div>
                 <button class="task-remove">REMOVE</button>`;
            
            document.getElementById(project.name).appendChild(newTask);

            return newTask;
        })
    };

    function makeNewProject(newProject){
        const input = document.querySelector('.project-input');

        if(input.value == null || input.value == ''){
            input.value = `new project`;
        };

        newProject = new logicStuff.project(input.value);
        logicStuff.projectList.push(newProject);
        input.value = '';
        generateProject();
    };

    function makeNewTask(){
        const projectName = document.getElementById('projectList');
        const taskName = document.querySelector('.taskName-input');
        const taskDate = document.querySelector('.taskDate-input');

        const newTask = new logicStuff.task(taskName.value, taskDate.value);
        logicStuff.projectList[projectName.value].taskList.push(newTask);

        generateTask(logicStuff.projectList[projectName.value]);
        taskName.value = '';
        taskDate.value = '';
    };

    return {
        generateProject,
        makeNewProject,
        makeNewTask,
    };
})();

export {createStuff};