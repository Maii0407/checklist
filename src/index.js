import './defaultStuff.css';
import './createStuff.css';
import { defaultStuff } from './defaultStuff/defaultStuff';
import { createStuff } from './createStuff/createStuff';
import { removeStuff } from './removeStuff/removeStuff';

const todoLIST = (function(){
    defaultStuff.makeDefault();
    createStuff.generateProject();
    loadRemoveEvents();
    
//below is eventlisteners
    document.querySelector('.newProject-btn').addEventListener('click', function(){
        createStuff.makeNewProject();
        document.querySelector('.task-form').innerHTML = '';
        defaultStuff.makeTaskOptions();
        loadRemoveEvents();
    });

    document.querySelector('.taskSubmit-btn').addEventListener('click', function(){
        createStuff.makeNewTask();
        loadRemoveEvents();
    });

    function loadRemoveEvents(){
        document.querySelector('.removeProject-btn').addEventListener('click', function(){
            removeStuff.removeProject(this);
            createStuff.generateProject();
        });
    
        document.querySelectorAll('.task-remove').forEach(button => button.addEventListener('click', function(){
            removeStuff.removeTask(this);
            createStuff.generateProject();
        }))
    };
})();