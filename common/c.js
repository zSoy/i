!function(e,f){
  "use strict";
  "object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?f(e):function(a){
    if (!e.document) throw new Error("requires a window with a document");
    return f(e)
  }:f(e);
}("undefined"!=typeof window?window:this,function(e,f){
  "use strict";
  if(e.top!==e.self){e.top.location=e.location;};
  let a=[], d=e.document, o={};
  d.onkeydown = e => {
    if(e.keyCode==123||(e.ctrlKey&&e.keyCode==85)||(e.ctrlKey&&e.shiftKey&&(e.keyCode==73||e.keyCode==4))){
      e.returnValue=!1;
      return !1;
    }
    return true;
  }
//   element, type, selector, data, function, o
//   
  Element.prototype.on=function(t,f,d,u,o){
    d??={};
    let that=this;
    let F=o?function(){
      return f.call(this,arguments);
      that.removeEventListener(t,F);
    }:function(){f.call(this,arguments);};
    this.addEventListener(t,F,u);
  }
  NodeList.prototype.on=function(e,f,d,u,o){
    []['forEach'].call(this,function(c){
      c.on(e,f,d,o);
    })
  };
  Element.prototype.trigger = function(t,d) {
    let e=d.createEvent('HTMLEvents');
    e.initEvent(t,!0,!0);
    e.data = d || {};
    e.eventName = t;
    e.target = this;
    this.dispatchEvent(e);
    return this;
  };
  NodeList.prototype.trigger=function(e){
    []['forEach'].call(this,function(c){
      c['trigger'](e);
    });
    return this;
  };
  e._=document.querySelector.bind(document);
  e.__=document.querySelectorAll.bind(document);
});
