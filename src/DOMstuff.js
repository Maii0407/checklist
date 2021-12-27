//this is a module for dom related shenanigans

const DOMstuff = (function(){
    const container = document.getElementById('container');

//private section because why not
    const _makeHeader = function(){
        const upperContainer = document.createElement('div');
        upperContainer.classList.add('upper-container');
        container.appendChild(upperContainer);

        const header = document.createElement('h1');
        header.textContent = `maii checkLIST`;
        upperContainer.appendChild(header);

        return upperContainer;
    };

    const _makeMainContent = function(){
        const mainContent = document.createElement('div');
        mainContent.classList.add('mainContent-container');
        container.appendChild(mainContent);

        return mainContent;
    };

    const _makePageListContainer = function(){
        const pagesList = document.createElement('div');
        pagesList.classList.add('pagesList-container');
        document.querySelector('.mainContent-container').appendChild(pagesList);

        return pagesList;
    };

    const _makePageContainer = function(){
        const pageContainer = document.createElement('div');
        pageContainer.classList.add('page-container');
        document.querySelector('.mainContent-container').appendChild(pageContainer);

        return pageContainer;
    };

    const _makePageListHeader = function(){
        const pageListHeader = document.createElement('h1');
        pageListHeader.textContent = `PROJECTS`;
        document.querySelector('.pagesList-container').appendChild(pageListHeader);

        return pageListHeader;
    };

    const _makeNewPageBtn = function(){
        const newProjectBtn = document.createElement('button');
        newProjectBtn.classList.add('newProject-btn');
        newProjectBtn.textContent = `+ NEW PROJECT`;
        document.querySelector('.pagesList-container').appendChild(newProjectBtn);

        return newProjectBtn;
    };

    const _removeRow = function(button){
        let r = button.parentNode.parentNode.rowIndex;
        document.querySelector('.project-btn').deleteRow(r);
    };


    const _makeProject = function(){
        let projectName = prompt(`What is the name of the new project?`);
        if(projectName == null || projectName == ''){
            projectName = `empty`;
        };

        const newProject = document.createElement('table');

        let row = newProject.insertRow();
        row.insertCell().innerHTML = `<button class="remove-btn">X</button>`;
        row.insertCell().textContent = projectName;
        newProject.classList.add('project-btn');
        document.querySelector('.pagesList-container').appendChild(newProject);

        return newProject;
    };

//this is for all people to see
    const makeDefault = function(){
        _makeHeader();
        _makeMainContent();
        _makePageListContainer();
        _makeNewPageBtn();
        _makePageListHeader();
        _makePageContainer();
    };

    const makeProject = function(){
        _makeProject();
    };

    return{
        makeDefault,
        makeProject,
    };
})();

export {DOMstuff};