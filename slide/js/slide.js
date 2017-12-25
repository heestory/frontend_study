(function(win){

    var global = win;
    var doc = this.document;

    var lite = function(params, context){
      return new GetOrMakeDom(params, context);
    };

    var GetOrMakeDom = function(params, context){

    };

    global.lite = lite;

    lite.fn = GetOrMakeDom.prototype;

})(window);