function validate(todo_name,todo_time) {
    if (todo_name.value.length < 3) {
        alert('harflar kamlik qilyapti');
        todo_name.focus()
        return false
    }
    if (!todo_time.value.length) {
        alert('belgilangan vaqtni kiritng');
        todo_time.focus()
        return false
    }


    return true
}

function getdata() {
    let data = [];
    if (localStorage.getItem('todos')) {
        data = JSON.parse(localStorage.getItem('todos'))
    }

    return data
}


function creat_item (todo){
    let ischecked = todo.status == 'active' ? false : true
    return `
    <div class="card_item">
                <div class="left_side">
                    <input type="checkbox" class="card_item_check" checked = ${!ischecked ?true : false}>
                    <div>
                        <p>${todo.name}</p>
                        <p>${todo.time}</p>
                    </div>
                </div>

                <div class="right_side">
                    <i class="fa-solid fa-trash"></i>
                    <i class="fa-sharp fa-solid fa-pen"></i>
                </div>
            </div>
    `
}


export{validate,getdata,creat_item}