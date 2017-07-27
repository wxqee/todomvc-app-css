(function(window) {
  var app = window.app;

  const TodoList = (function(superClass) {
    extend(TodoList, superClass);

    function TodoList(options) {
      var settings = Object.assign({}, {
        tagName: 'ul',
        className: 'todo-list',
      }, options);

      TodoList.__super__.constructor.call(this, settings);
    }

    TodoList.prototype.render = function() {
      var self = this;

      this.model.forEach(function(todo) {
        var todo = new app.TodoItem({
          model: todo,
          events: {
            'click .destroy': function() {
              var index = self.model.indexOf(todo);
              self.model.splice(todo);
              self.render();
            }
          }
        });

        self.el.appendChild(todo.render().el);
      });

      return this;
    };

    return TodoList;
  })(BaseComponent);

  app.TodoList = TodoList;
})(window);

(function(window) {
  var todos = [
    {_id: 0, text: 'task 1', done: false},
    {_id: 1, text: 'task 2', done: true},
    {_id: 2, text: 'task 3', done: false},
    {_id: 3, text: 'task 4', done: false},
  ];

  var todoList = new app.TodoList({
    model: todos
  });
  var todoListContainer = document.querySelector('.todo-list-container');
  todoListContainer.appendChild(todoList.render().el);
})(window);

