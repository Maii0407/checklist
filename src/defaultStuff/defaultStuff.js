import { logicStuff } from "../logicStuff/logicStuff";

const defaultStuff = (function(){
    function makeHeader(){
        const header = document.createElement('h1');
        header.innerText = `to-do-LIST`;
        document.getElementById('upper-container').appendChild(header);

        return header;
    };

    function makeProjectFormHeader(){
        const projectHeader = document.createElement('p');
        projectHeader.innerText = `PROJECT FORM`;
        document.getElementById('form-container').appendChild(projectHeader);

        return projectHeader;
    };

    function makeTaskFormHeader(){
        const taskHeader = document.createElement('p');
        taskHeader.innerText = `TASK FORM`;
        document.getElementById('form-container').appendChild(taskHeader);

        return taskHeader;
    };

//below is functions for the project form section

    function makeProjectForm(){
        const projectInput = document.createElement('input');
        projectInput.setAttribute('type', 'text');
        projectInput.placeholder = `New Project Name`;
        projectInput.classList.add('project-input')
        document.getElementById('form-container').appendChild(projectInput);

        return projectInput;
    };

    function makeCreateProjectBtn(){
        const newProject = document.createElement('button');
        newProject.classList.add('newProject-btn');
        newProject.innerText = `+ NEW PROJECT`;
        document.getElementById('form-container').appendChild(newProject);

        return newProject;
    };

//below is functions for the task form section

    function makeTaskOptions(){
        const formContainer = document.createElement('form');
        formContainer.classList.add('task-form');
        document.getElementById('form-container').appendChild(formContainer);

        const inputList = document.createElement('input');
        inputList.placeholder = `Enter Project Name`;
        inputList.setAttribute('list', 'projectList');
        inputList.classList.add('inputList');
        document.querySelector('.task-form').appendChild(inputList);

        const dataList = document.createElement('datalist');
        dataList.id = `projectList`;
        document.querySelector('.task-form').appendChild(dataList);

        logicStuff.projectList.forEach(project => {
            const options = document.createElement('option');
            options.label = project.name;
            options.value = logicStuff.projectList.indexOf(project);

            document.getElementById('projectList').appendChild(options);
        })
    };

    function makeNameInput(){
        const taskName = document.createElement('input');
        taskName.setAttribute('type', 'text');
        taskName.placeholder = `Enter New Task`;
        taskName.classList.add('taskName-input');
        document.getElementById('form-container').appendChild(taskName);

        return taskName;
    };

    function makeDateInput(){
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.classList.add('taskDate-input');
        document.getElementById('form-container').appendChild(dateInput);

        return dateInput;
    };

    function makeSubmitButton(){
        const submitBtn = document.createElement('button');
        submitBtn.setAttribute('type', 'button');
        submitBtn.classList.add('taskSubmit-btn');
        submitBtn.innerText = `+ NEW TASK`;
        document.getElementById('form-container').appendChild(submitBtn);

        return submitBtn;
    };

//below is functions that makes things easier to remember LOL

    function projectForm(){
        makeProjectFormHeader();
        makeProjectForm();
        makeCreateProjectBtn();
    };

    function taskForm(){
        makeTaskFormHeader();
        makeTaskOptions();
        makeNameInput();
        makeDateInput();
        makeSubmitButton();
    };

    function makeDefault(){
        document.getElementById('form-container').innerHTML = '';
        document.getElementById('upper-container').innerHTML = '';
        makeHeader();
        projectForm();
        taskForm();
    };

    return{
        makeDefault,
        makeTaskOptions,
    };

})();

export {defaultStuff};