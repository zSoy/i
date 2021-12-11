;(function(){
  if(window.top!==window.self){window.top.location = window.location;};
  window.onkeydown = e => {
    switch(e.keyCode){
      case 9:case 37:case 38:case 39:case 40:case 116:case 117: return true;
      default:e.returnValue=0;
        return false;
    }
  }
  Element.prototype.on=Element.prototype.addEventListener;
  NodeList.prototype.on=function(e,f){
    []['forEach'].call(this,function(el){
      el.on(e,f);
    })
  };
  Element.prototype.trigger = function (type, data) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, true);
    event.data = data || {};
    event.eventName = type;
    event.target = this;
    this.dispatchEvent(event);
    return this;
  };
  NodeList.prototype.trigger = function (event) {
    []['forEach'].call(this, function (el) {
      el['trigger'](event);
    });
    return this;
  };
})();
