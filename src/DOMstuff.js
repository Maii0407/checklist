
const DOMstuff = (function(){
//private
    const _makeContentWrapper = function(){
        const container = document.getElementById('container');
        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('mainContent-wrapper');
        container.appendChild(contentWrapper);

        return contentWrapper;
    };

    const _makeProjectSection = function(){
        const projectSelection = document.createElement('div');
        projectSelection.classList.add('project-section');
        document.querySelector('.mainContent-wrapper').appendChild(projectSelection);

        return projectSelection;
    };

    const _makeTaskSection = function(){
        const taskSection = document.createElement('div');
        taskSection.classList.add('task-section');
        document.querySelector('.mainContent-wrapper').appendChild(taskSection);

        return taskSection;
    };

    const _makeProjectSectionHeader = function(){
        const projectSectionHeader = document.createElement('h1');
        projectSectionHeader.innerText = `Projects`;
        document.querySelector('.project-section').appendChild(projectSectionHeader);

        return projectSectionHeader;
    };

    const _makeCreateProjectBtn = function(){
        const createProjectBtn = document.createElement('button');
        createProjectBtn.classList.add('createProject-btn');
        createProjectBtn.innerText = ` + NEW PROJECT`;
        document.querySelector('.project-section').appendChild(createProjectBtn);

        return createProjectBtn;
    };

//public
    const makeSkeleton = function(){
        _makeContentWrapper();
        _makeProjectSection();
        _makeTaskSection();
        _makeCreateProjectBtn();
        _makeProjectSectionHeader();
    };

       

    return{
        makeSkeleton,
    };

})();

export {DOMstuff};