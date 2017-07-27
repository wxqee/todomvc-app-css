// ------------------------------------------------------------
// base
// ------------------------------------------------------------
function extend(child, parent) {
  for (var key in parent) {
    if ({}.hasOwnProperty.call(parent, key)) {
      child[key] = parent[key];
    }
  }

  function ctor() {
    this.constructor = child;
  }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
  child.__super__ = parent.prototype;

  return child;
}

// ------------------------------------------------------------
// base components
// ------------------------------------------------------------
const BaseComponent = (function() {
  function BaseComponent(options) {
    Object.assign(this, defaults, options);
    this.el = document.createElement(this.tagName);
		this.el.setAttribute('class', this.className);
		this.eventDelegator = new EventDelegator(this.el, this.events, this);
  }

  BaseComponent.prototype.render = function() {
    this.el.innerHTML = tmpl(this.template, this.model);
    return this;
  };

  BaseComponent.prototype.clear = function() {
		this.eventDelegator.undelegateEvents();
	};

  BaseComponent.prototype.setModel = function(model) {
    this.model = model;
  };

  var defaults = {
    tagName: 'div',
		className: '',
    model: null,
		events: {
			// 'click div': function(e) {
			// 	alert('some div has been clicked.');
			// }
		},
  };

  return BaseComponent;
})();

