
const Logic = (function(){
    const projectArray = [];

    class Project {
        constructor(name,taskList){
            this.name = name;
            this.taskList= [];
        }
    };

    class Task {
        constructor(name,date){
            this.name = name;
            this.date = date;
        }
    };

    const defaultProject = new Project('defaultProject');
    projectArray.push(defaultProject);

    const defaultTask = new Task('default', 'defaultDate');
    defaultProject.taskList.push(defaultTask);

    return {
        projectArray,
        Project,
    };
})();

export {Logic};