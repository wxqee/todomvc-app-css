(function(window) {
  var app = window.app;

  if (!app) {
    console.error('There should be a global app');
    return false;
  }

  const TodoItem = (function(superClass) {
    extend(TodoItem, superClass);

    function TodoItem(options) {
      var settings = Object.assign({}, {
        template: 'todo-item-template',
      }, options);

      TodoItem.__super__.constructor.call(this, settings);
    }

    return TodoItem;
  })(BaseComponent);

  // ------------------------------------------------------------
  // Exports
  // ------------------------------------------------------------
  app.TodoItem = TodoItem;
})(window);
