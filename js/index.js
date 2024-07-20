import{validate,getdata,creat_item} from "./function.js"

const todo_input = document.querySelector('#todo_input');
const todo_name = document.querySelector('#todo_name');
const todo_time = document.querySelector('#todo_time');
const buttons = document.querySelector('#buttons');
const btn = document.querySelector('#btn');
const select = document.querySelector('#select');
const card = document.querySelector('#card');


btn && btn.addEventListener('click', function (el) {
    el.preventDefault()

    let isvalidate = validate(todo_name,todo_time)

    if (!isvalidate) {
        return
    }

    const todo = {
        id : Date.now(),
        name : todo_name.value ,
        time : todo_time.value,
        status : 'active'
}
    let todos = getdata();
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
    todo_name.value = null;
    todo_time.value = null;



    const card_item = creat_item(todo);
    card.innerHTML += card_item



})