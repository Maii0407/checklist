
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

    let one = new project(`Project Number 1`);
    projectList.push(one);

    let num02 = new task(`Remember this date`, `8/6/2022`, `High Priority`);
    let num03 = new task('Keep chasing your dreams', '11/11/11', `High Priority`);
    one.taskList.push(num02,num03);

    return {
        projectList,
        project,
        task,
    };
})();

export {logicStuff};