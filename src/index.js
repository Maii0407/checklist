import './defaultStuff.css';
import './createStuff.css';
import { defaultStuff } from './defaultStuff/defaultStuff';
import { createStuff } from './createStuff/createStuff';
//import './style.css';

const todoLIST = (function(){
    defaultStuff.makeDefault();
    createStuff.generateProject();
    
//below is eventlisteners
    document.querySelector('.newProject-btn').addEventListener('click', function(){
        createStuff.makeNewProject();
        defaultStuff.makeDefault();
    });
    
})();