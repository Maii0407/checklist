import './style.css';
import { DOMstuff } from "./DOMstuff";
import { Project } from './project';

const CheckList = (function(){
    DOMstuff.makeProjectForm();
    Project.ProjectList;

//private
    const _makeProject = function(){
        for(let obj of Project.ProjectList){
            DOMstuff.makeProject(obj.name);
        }
    };

    const _makeNewProject = function(newProject){
        const text = document.getElementById('project-input');

        newProject = new Project.myProject(text.value);
        Project.ProjectList.push(newProject);
        document.getElementById('container').innerHTML = '';
        text.value = '';
        _makeProject();
    };

//public
    const makeProject = function(){
        _makeProject();
    };

    makeProject();

    document.querySelector('.newProject-btn').addEventListener('click', _makeNewProject);
    document.querySelector('.open-btn').addEventListener('click', function(){
        document.querySelector('.projectForm-container').style.width = '250px';
    })
    document.querySelector('.close-btn').addEventListener('click', function(){
        document.querySelector('.projectForm-container').style.width = '0';
    })

    
})();