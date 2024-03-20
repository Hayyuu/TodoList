import todo from './todo.js';
import project from './project.js'
import { home_todo } from './home_todo.js';
import { projectsArray,todosArray,addItem,viewItem,updateItem,deleteItem } from './crud.js';
import { home_project } from './home_project.js';
import {btn_clicked} from './clickListeners.js'

let todo_btn=document.querySelector('.sidebar_todos');
todo_btn.addEventListener('click',()=>{
    btn_clicked(todo_btn);
    home_todo();
});
let project_btn=document.querySelector('.sidebar_projects');
project_btn.addEventListener('click',()=>{
    btn_clicked(project_btn);
    home_project();
});
function showUncategorizedTodos(){
    let newTodo=new todo('yyy',23);
    console.log(newTodo instanceof todo);
  todosArray.forEach(x=>console.log(x));
}
function showProjects(){
    projectsArray.forEach(x=>console.log(x));
}

function addProject(){
    let newProject=new project('pro2',['todo1','todo2']);

    addItem(projectsArray,newProject);
}
function addTodo(){
    let newTodo=new todo('yyy',23);
    addItem(todosArray,newTodo);
}
btn_clicked(todo_btn);
home_todo();


