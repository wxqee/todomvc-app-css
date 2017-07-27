
(function(window) {
  var todos = [
    {_id: 0, text: 'task 1', done: false},
    {_id: 1, text: 'task 2', done: true},
    {_id: 2, text: 'task 3', done: false},
    {_id: 3, text: 'task 4', done: false},
  ];

  const todoList = document.querySelector('.todo-list');

  todos.forEach(function(todo) {
    var todoItem = new app.TodoItem({
      model: todo,
      template: document.getElementById('todo-item-template').innerHTML,
      events: {
        'click .toggle': function(e) {
          todo.done = !todo.done;
          todoItem.render();

          alert('todo item #' + todo._id + ' has been toggled.');
        }
      }
    });

    todoList.appendChild(todoItem.render().el);
  });
})(window);

