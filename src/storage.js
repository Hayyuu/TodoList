export function stored_data(){


let todos={
    todosArray:[
        {name:'xxx',date:0},
        {name:'yyy',date:0}]
};
let projects={
    projectsArray:[
        {name:'pro1',todolist:['one','two']},
        {name:'pro1',todolist:['one','two']}]
    };

let todo_serialized=JSON.stringify(todos);
localStorage.setItem("todo",todo_serialized);
let project_serialized=JSON.stringify(todos);
localStorage.setItem("project",project_serialized);

}
stored_data();
