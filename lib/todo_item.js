(function(window) {
  var app = window.app;

  if (!app) {
    console.error('There should be a global app');
    return false;
  }

  function TodoItem(options) {
    Object.assign(this, TodoItem.defaults, options);
    this.el = document.createElement(this.tagName);
  }

  TodoItem.defaults = {
    tagName: 'div',
    model: null,
  };

  TodoItem.prototype.render = function() {
    this.el.innerHTML = tmpl(this.template, this.model);
    return this;
  };

  function createTodoItem() {
    return templateDom.cloneNode(true);
  }

  // ------------------------------------------------------------
  // Exports
  // ------------------------------------------------------------
  app.TodoItem = TodoItem;
})(window);
