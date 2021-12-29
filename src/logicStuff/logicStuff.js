
const logicStuff = (function(){
    const projectList = [];

    class project {
        constructor(name,taskList){
            this.name = name;
            this.taskList = [];
        }
    }

    class task {
        constructor(name,date){
            this.name = name;
            this.date = date;
        }
    }

    return {
        projectList,
        project,
        task,
    };
})();

export {logicStuff};