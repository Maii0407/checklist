import './style.css';
import { DOMstuff } from "./DOMstuff";
import { Logic } from './logic';

const CheckList = (function(){
    DOMstuff.makeProjectForm();
    Logic.projectArray;

//below is functions
    const generateProject = function(){
        document.getElementById('container').innerHTML = '';
        Logic.projectArray.forEach(project => {
            DOMstuff.makeProject(project.name);

            project.taskList.forEach(task => {
                function makeTask(project){
                    const newTask = document.createElement('div');
                    newTask.classList.add('newtask');
                    newTask.innerText = `${task.name} ${task.date}`;
                    document.getElementById(`${project}`).appendChild(newTask);
            
                    return newTask;
                };
            })
        });
        
    };

    const makeNewProject = function(newProject){
        const text = document.getElementById('project-input');

        newProject = new Logic.Project(text.value);
        Logic.projectArray.push(newProject);
        text.value = '';
        generateProject();
    };

    generateProject();

//below is eventlisteners
    document.querySelector('.newProject-btn').addEventListener('click', makeNewProject);

    document.querySelector('.open-btn').addEventListener('click', function(){
        document.querySelector('.projectForm-container').style.width = '250px';
    });
    document.querySelector('.close-btn').addEventListener('click', function(){
        document.querySelector('.projectForm-container').style.width = '0';
    });

    
})();