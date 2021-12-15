;(function(){
  if(window.top!==window.self){window.top.location = window.location;};
  window.onkeydown = e => {
    if(e.keyCode==123||(e.ctrlKey&&e.shiftKey&&(e.keyCode==73||e.keyCode==4)))e.returnValue=!1,return !1;
    return true;
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
  window._=document.querySelector.bind(document);
  window.__=document.querySelectorAll.bind(document);
})();
