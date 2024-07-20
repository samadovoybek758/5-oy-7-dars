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

document.addEventListener('DOMContentLoaded', function () {
    let todos = getdata()
    todos.length && todos.forEach(element => {
        let card1 = creat_item(element);
        card.innerHTML += card1 ;
    });
})

select && select.addEventListener('change', function () {
    let todos = getdata()
    let selectValue = this.value
    let result = todos.filter(function (el) {
        if (selectValue == 'all') {
            return true
        }if (selectValue == 'active') {
            return el.status = 'active'
        }if (selectValue == 'inactive') {
            return el.status = 'inactive'
        }
    })

    card.innerHTML = ' '

    result && result.forEach(function (el) {
        let card1 = creat_item(el)
        card.innerHTML += card1
    }

    )
})