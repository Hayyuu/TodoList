import { todosArray } from "./crud";
import s from './style.css'
export function home_todo(){
   let todo_list=document.createElement('ul');
   let todo_header=document.createElement('h2');
   let sidebar_todo=document.querySelector('.sidebar_todos');
   let main_div=document.querySelector('.main');
   todo_header.textContent='Todos';
   main_div.appendChild(todo_header);
   todosArray.forEach(element=>{
      let item=document.createElement('li');
      item.textContent=element.name;
      todo_list.appendChild(item);
      main_div.appendChild(todo_list);
   });
}
