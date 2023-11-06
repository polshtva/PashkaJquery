//добавить элемент
// const listItem = $('<li></li>');
// listItem.html(`<span>${taskText}</span>`);
//Удалить
// item.on('click',function(){
//     $(this).remove();
// });

//обработчик на нажатие кнопки
// taskInput.on('keyup',function(event){
//     if(event.which === 13){
        
//     }
// })

// taskInput.on('keyup',function(event){
//     if(event.key === 'Enter'){
        
//     }
// })

// let field = $('#field');
// let text = field.val();
// field.val('');

$(document).ready(function(){
    const taskInput = $('#task');
    const addButton = $('#add-button');
    const taskList  = $('#todo-list');

    addButton.on('click',addTask);

    taskInput.on('keyup',function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    })
    
    function addTask(){
        const taskText = taskInput.val().trim();
        if (taskInput === ''){
            return;
        }
        const listItem = $('<li></li>');
        listItem.html(`<span>${taskText}</span>
        <button class = "remove-button">Удалить</button>`);
        listItem.find('.remove-button').on('click',function(){
            listItem.remove()
        });
        taskList.append(listItem);
        taskInput.val('');
    }
})