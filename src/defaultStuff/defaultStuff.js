
const defaultStuff = (function(){
    function makeHeader(){
        const header = document.createElement('h1');
        header.innerText = `to-do-LIST`;
        document.getElementById('upper-container').appendChild(header);

        return header;
    };

    function makeProjectForm(){
        const projectInput = document.createElement('input');
        projectInput.setAttribute('type', 'text');
        projectInput.placeholder = `New Project Name`;
        projectInput.classList.add('project-input')
        document.getElementById('projectForm-container').appendChild(projectInput);

        return projectInput;
    };

    function makeCreateProjectBtn(){
        const newProject = document.createElement('button');
        newProject.classList.add('newProject-btn');
        newProject.innerText = `+ NEW PROJECT`;
        document.getElementById('projectForm-container').appendChild(newProject);

        return newProject;
    };

    function makeDefault(){
        makeHeader();
        makeProjectForm();
        makeCreateProjectBtn();
    };

    return{
        makeDefault,
    };

})();

export {defaultStuff};