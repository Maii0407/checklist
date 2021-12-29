import './defaultStuff.css';
import './newProject.css';
import { defaultStuff } from './defaultStuff/defaultStuff';
import { createStuff } from './createStuff/createStuff';
//import './style.css';

const todoLIST = (function(){
    defaultStuff.makeDefault();
    createStuff.generateProject();
    
//below is eventlisteners
    document.querySelector('.newProject-btn').addEventListener('click', createStuff.makeNewProject);

})();

/*
const CheckList = (function(){
    DOMstuff.makeProjectForm();
    Logic.projectArray;




//below is eventlisteners
    document.querySelector('.newProject-btn').addEventListener('click', makeNewProject);

    document.querySelector('.open-btn').addEventListener('click', function(){
        document.querySelector('.projectForm-container').style.width = '250px';
    });
    document.querySelector('.close-btn').addEventListener('click', function(){
        document.querySelector('.projectForm-container').style.width = '0';
    });

    
})(); */