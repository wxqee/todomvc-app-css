function EventDelegator(el, events) {
  this.el = el;
  this.events = events;
  this.eventNames = {};
  this.metaInfo = null;
  this.delegator =null;
  this._initEvents();
  this.delegateEvents();
}

EventDelegator.prototype = {
  _initEvents: function() {
    var metaInfo = {};
    var events = this.events;
    var eventNames = {};
    var el = this.el;
    
    for (var key in events) {
      var esList = key.split(',');
      var eventHandler = events[key];
      
      for (var es in esList) {
        es = esList[es];
        var p = es.indexOf(' ');
        var eventName = es.substring(0, p).trim();
        var eventSelector = es.substring(p + 1).trim();
        
        eventNames[eventName] = 1;
        metaInfo[key] = {
          eventName: eventName,
          eventSelector: eventSelector,
          eventHandler: eventHandler
        };
      }
    }
    
    this.eventNames = eventNames;
    this.metaInfo = metaInfo;
  },
  handleEvents: function(e, metaInfo) {
    if (e.target) {
      for (var key in metaInfo) {
        var info = metaInfo[key];        
        if (e.type === info.eventName &&
            e.target.matches(info.eventSelector) &&
            typeof info.eventHandler === 'function') {
          info.eventHandler(e);
        }
      }
    }
  },
  delegateEvents: function() {
    var metaInfo = this.metaInfo;
    var eventNames = this.eventNames;
    var el = this.el;
    var self = this;
    
    this.delegator = function(e) {
      self.handleEvents(e, self.metaInfo);
    };
    
    for (var eventName in eventNames) {
      el.addEventListener(eventName, this.delegator);
    }
  },
  undelegateEvents: function() {
    var eventNames = this.eventNames;
    var el = this.el;
    
    for (var eventName in eventNames) {
      el.removeEventListener(eventName, this.delegator);
    }
  }
};
