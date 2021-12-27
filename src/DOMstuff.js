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

    const _makeProject = function(){
        const newProject = document.createElement('div');
        newProject.classList.add('project-btn');
        newProject.textContent = prompt(`What is the name of the new project?`);
        document.querySelector('.pagesList-container').appendChild(newProject);

        if(newProject.textContent == null || newProject.textContent == ''){
            newProject.textContent = `default project name`;
        };

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