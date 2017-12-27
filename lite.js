(function(win){

    var global = win;
    var doc = this.document;

    var lite = function(params, context){
      return new GetOrMakeDom(params, context);
    };
    
    var regXContainTag = /^\s*<(\w+|!)[^>]*>/;

    var GetOrMakeDom = function(params, context){
    	
    	var currentContext = doc;
		if(context){
			if(context.nodeType){//문서 혹은 element
				currentContext = context;
			}else{//문자열 선택자
				currentContext = doc.querySelector(context);
			}
		}
		
		//빈 lite 객체 반환
		if(!params || params === '' || typeof params === 'string' && params.trim() === ''){
			this.length = 0;
			return this;
		}
		
		if(typeof params === 'string' && regXContainTag.test(params)){
			
			var divElm = currentContext.createElement('div');
			divElm.className = 'hippo-doc-frag-wrapper';
			var docFrag = currentContext.createDocumentFragment();
			docFrag.appendChild(divElm);
			var queryDiv = docFrag.querySelector('div');
			queryDiv.innerHTML = params;
			
			var numberOfChildren = queryDiv.children.length;
			
			for(var x = 0; x<numberOfChildren; x++){
				this[x] = queryDiv.children[x];
			}
			
			this.length = numberOfChildren;
			
			return this;
		}
		
		if(typeof params === 'object' && params.nodeName){
			this.length = 1;
			this[0] = params;
			return this;
		}
		
		var nodes;
		if(typeof params !== 'string'){//노드 혹은 배열
			nodes = params;
		}else{
			nodes = currentContext.querySelectorAll(params.trim());
		}
		
		var nodeLength = nodes.length;
		for(var i = 0; i<nodeLength; i++){
			this[i] = nodes[i]
		}
		
		this.length = nodeLength;
		
		return this;
    };

    global.lite = lite;

    lite.fn = GetOrMakeDom.prototype;
    
   
})(window);

lite.fn.each = function (callback) {
	var len = this.length;
	for(var i = 0; i < len; i++){
		callback.call(this[i], i, this[i]);
	}
	return this;
};

lite.fn.append = function(stringOrObject){
	return this.each(function(){
		if(typeof stringOrObject === 'string'){
			this.insertAdjacentHTML('beforeend',stringOrObject);
		}else{
			var that = this;
			lite(stringOrObject).each(function(name, value){
				that.insertAdjacentHTML('beforeend',value.outerHTML);
			});
		}
	});
};

