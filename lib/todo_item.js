(function(window) {
  var app = window.app;

  const TodoItem = (function(superClass) {
    extend(TodoItem, superClass);

    function TodoItem(options) {
      var events = {
        'click .toggle': function() {
          this.model.done = !this.model.done;
          this.render();
        },
      };

      var settings = {
        template: document.getElementById('todo-item-template').innerHTML,
      };

      Object.assign(settings, options);
      settings.events = Object.assign(events, settings.events);

      TodoItem.__super__.constructor.call(this, settings);
    }

    return TodoItem;
  })(BaseComponent);

  // ------------------------------------------------------------
  // Exports
  // ------------------------------------------------------------
  app.TodoItem = TodoItem;
})(window);
