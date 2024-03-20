import { projectsArray, todosArray } from "./crud";

import s from './style.css'
export function home_project(){
   let project_list=document.createElement('ul');
   let project_header=document.createElement('h2');
   let sidebar_projects=document.querySelector('.sidebar_projects');
   let main_div=document.querySelector('.main');
   project_header.textContent='Project';
   main_div.appendChild(project_header);
   projectsArray.projectsArray.forEach(element=>{
      let item=document.createElement('ul');
      item.textContent=element.name;
      let todo_list=document.createElement('ul');
      todo_list.appendChild(item);
      element.todolist.forEach(i=>{
        let todo_item=document.createElement('li');
        todo_item.textContent=i;
        todo_list.appendChild(todo_item);
        main_div.appendChild(todo_list);
      })
     
      main_div.appendChild(todo_list);
   });
}
