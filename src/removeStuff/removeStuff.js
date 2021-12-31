import { logicStuff } from "../logicStuff/logicStuff";

const removeStuff = (function(){

    function removeProject(button){
        let projectIndex = button.value;

        logicStuff.projectList.splice(projectIndex, 1);
    };

    function removeTask(button){
        let taskIndex = button.value;
        let projectIndex = button.getAttribute('data-projectIndex');

        logicStuff.projectList[projectIndex].taskList.splice(taskIndex, 1);
    };

    return {
        removeProject,
        removeTask,
    };
})();

export {removeStuff};