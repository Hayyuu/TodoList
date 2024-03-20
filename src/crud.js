
import { project_deserialized } from "./storage.js";
import { stored_data } from "./storage.js";

let todosArray=JSON.parse(localStorage.getItem("todo"));
let projectsArray=JSON.parse(localStorage.getItem("project"));

function addItem(arr,item){
    arr.push(item);
}

function updateItem(arr,item){
    arr.push(item);
}
function viewAllItem(arr,item){
    arr.forEach(element => {
        console.log(element);
    });;
}
function viewItem(arr,item){
    arr.push(item);
}

function deleteItem(arr,item){
    arr.push(item);
}
export {projectsArray,todosArray,viewAllItem,addItem,updateItem,viewItem,deleteItem};