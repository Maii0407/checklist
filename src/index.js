import './defaultStuff.css';
import './createStuff.css';
import { defaultStuff } from './defaultStuff/defaultStuff';
import { createStuff } from './createStuff/createStuff';
import { logicStuff } from './logicStuff/logicStuff';
//import './style.css';

const todoLIST = (function(){
    defaultStuff.makeDefault();
    createStuff.generateProject();
    
//below is eventlisteners
    document.querySelector('.newProject-btn').addEventListener('click', function(){
        createStuff.makeNewProject();
        document.querySelector('.task-form').innerHTML = '';
        defaultStuff.makeTaskOptions();
    });

    document.querySelector('.taskSubmit-btn').addEventListener('click', createStuff.makeNewTask);
    
})();