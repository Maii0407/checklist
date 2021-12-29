
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

    let num01 = new project(`one`);
    projectList.push(num01);

    let num02 = new task(`two`, `29/12/2021`);
    num01.taskList.push(num02);

    return {
        projectList,
        project,
        task,
    };
})();

export {logicStuff};