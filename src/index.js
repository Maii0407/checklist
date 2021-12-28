import './style.css';
import { DOMstuff } from "./DOMstuff";
import { Project } from './project';

const CheckList = (function(){
    DOMstuff.makeProjectBtn();
    Project.ProjectList;

//private
    const _makeProject = function(){
        for(let obj of Project.ProjectList){
            DOMstuff.makeProject(obj.name);
        }
    };
//public
    const makeProject = function(){
        _makeProject();
    };

    makeProject();

    document.querySelector('.newProject-btn').addEventListener('click', function(){
        newProjectName = prompt(`What is the name of the new project?`);

        const newProjectName = new Project.myProject(`${newProjectName}`);
        Project.ProjectList.push(newProjectName);
        makeProject();
    })
})();