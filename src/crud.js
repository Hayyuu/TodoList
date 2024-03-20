


let todosArray=[{name:'xxx',date:0},{name:'yyy',date:0}];
let projectsArray=[{name:'pro1',todolist:['one','two']}];

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