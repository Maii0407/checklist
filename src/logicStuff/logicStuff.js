
const logicStuff = (function(){
    const projectList = [];

    class project {
        constructor(name,taskList){
            this.name = name;
            this.taskList = [];
        }
    }

    class task {
        constructor(name,date,priority){
            this.name = name;
            this.date = date;
            this.priority = priority;
        }
    }

    let one = new project(`one`);
    projectList.push(one);

    let num02 = new task(`two`, `29/12/2021`, `Low Priority`);
    let num03 = new task('three', '11/11/11', `Low Priority`);
    one.taskList.push(num02,num03);

    return {
        projectList,
        project,
        task,
    };
})();

export {logicStuff};