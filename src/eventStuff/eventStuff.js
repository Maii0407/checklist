import { defaultStuff } from '../defaultStuff/defaultStuff';
import { createStuff } from '../createStuff/createStuff';
import { removeStuff } from '../removeStuff/removeStuff';


const eventStuff = (function(){

//below loads the events for removing projects and tasks specifically
    function removeEvents(){
        document.querySelectorAll('.removeProject-btn').forEach(button => button.addEventListener('click', function(){
            removeStuff.removeProject(this);
            createStuff.generateProject();
            removeEvents();
        }));
    
        document.querySelectorAll('.task-remove').forEach(button => button.addEventListener('click', function(){
            removeStuff.removeTask(this);
            createStuff.generateProject();
            removeEvents();
        }));
    };

//below loads all the events
    function defaultEvents(){
        document.querySelector('.newProject-btn').addEventListener('click', function(){
            createStuff.makeNewProject();
            document.querySelector('.task-form').innerHTML = '';
            defaultStuff.makeTaskOptions();
            removeEvents();
        });
    
        document.querySelector('.taskSubmit-btn').addEventListener('click', function(){
            createStuff.makeNewTask();
            removeEvents();
        });

        removeEvents();
    };

    return {
        defaultEvents,
    };
})();

export {eventStuff};