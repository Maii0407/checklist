
const DOMstuff = (function(){

//private
    const _makeChecklistContainer = function(){
        const checklistContainer = document.createElement('div');
        checklistContainer.classList.add('checklist-container');
        document.getElementById('container').appendChild(checklistContainer);

        return checklistContainer;
    };

    const _makeHeaderContainer = function(){
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header-container');
        document.querySelector('.checklist-container').appendChild(headerContainer);

        return headerContainer;
    };

    const _makeHeader = function(name){
        const header = document.createElement('h1');
        header.innerText = name;
        document.querySelector('.header-container').appendChild(header);

        return header;
    };

    const _makeTaskContainer = function(){
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        document.querySelector('.checklist-container').appendChild(taskContainer);

        return taskContainer;
    };

    const _makeFormContainer = function(){
        const formContainer = document.createElement('form');
        formContainer.classList.add('form-container');
        document.querySelector('.checklist-container').appendChild(formContainer);

        return formContainer;
    };

    const _makeTaskInput = function(){
        const taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'text');
        taskInput.classList.add('task-input');
        taskInput.placeholder = `Task Name`;
        document.querySelector('.form-container').appendChild(taskInput);

        return taskInput;
    };

    const _makeDateInput = function(){
        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.classList.add('date-input');
        document.querySelector('.form-container').appendChild(dateInput);

        return dateInput;
    };

    const _makeFormButton = function(){
        const formBtn = document.createElement('button');
        formBtn.innerText = `+New Task`;
        document.querySelector('.form-container').appendChild(formBtn);

        return formBtn;
    };

    const _makeProjectBtn = function(){
        const newProject = document.createElement('button');
        newProject.classList.add('newProject-btn');
        newProject.innerText = `+ NEW PROJECT`;
        document.getElementById('container').appendChild(newProject);

        return newProject;
    };

//public
    const makeProject = function(name){
        _makeChecklistContainer();
        _makeHeaderContainer();
        _makeHeader(name);
        _makeTaskContainer();
        _makeFormContainer();
        _makeTaskInput();
        _makeDateInput();
        _makeFormButton();
    };

    const makeProjectBtn = function(){
        _makeProjectBtn();
    };

    return {
        makeProject,
        makeProjectBtn,
    };

})();

export {DOMstuff};