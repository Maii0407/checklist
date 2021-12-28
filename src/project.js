
const Project = (function(){
    const ProjectList = [];

    class myProject {
        constructor(name,taskList){
            this.name = name;
            taskList= [];
        }
    };

    const defaultProject = new myProject('defaultProject');
    ProjectList.push(defaultProject);

    return {
        ProjectList,
        myProject,
    };
})();

export {Project};