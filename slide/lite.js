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

lite.fn.createSlide = function(picArray, width){
	
	var div = this.createSlideTemplate(picArray, width);
	var buttons = this.createButton();
	//this.append(div);
	this.append(buttons);

	this.listenButtonEvent(document.querySelector("div[name='rightButton']"));
	this.listenButtonEvent(document.querySelector("div[name='leftButton']"));

};

lite.fn.createSlideTemplate = function(picArray, width){
	var len = picArray.length;
	var width = width;
	var html = "<div style='position:absolute; margin:auto; left:0; top:0; bottom:0; right:0;width:600px; height:600px; border:1px solid black;'>";
	for(var i = 0; i<len; i++){
        html +=	'<div style="width:'+width+'px">'+'<img src="'+picArray[i]+'"style="width:100%; height:100%;">' +'</div>';
			
	}
	return html+"</div>";
}
lite.fn.createButton = function(){
	var div = document.createElement('div');
	div.style.width = '40px';
	div.style.height = '40px';
	div.style.border = '1px solid';
    div.style.position = 'absolute';

	var buttonArray = [];
	var clickCount = 0;
	
	var rbutton = div.cloneNode(true);
	rbutton.style.right = '0';
	var rtext = document.createTextNode('right');
	rbutton.appendChild(rtext);

	var lbutton = div.cloneNode(true);
	var ltext = document.createTextNode('left');
	lbutton.appendChild(ltext);
	
	this.setAttributes(lbutton,{'name':'leftButton', 'draggable':'true', 'ondragstart':'drag(event)','id':'leftButton'});
	this.setAttributes(rbutton,{'name':'rightButton'});
	

	buttonArray.push(rbutton);
	buttonArray.push(lbutton);

	return buttonArray;
}

lite.fn.listenButtonEvent= function(el){
	var clickCount = 0;
	var dbFlag = false;
	el.addEventListener('click',function(){
			
			clickCount++;

			if(clickCount === 1){
			    singleClickTimer = setTimeout(function() {
		            clickCount = 0;
		            //@TODO
		        }, 400);

			}else if(clickCount === 2){

				clearTimeout(singleClickTimer);
		        clickCount = 0;
		
				dbFlag == true ? el.style.backgroundColor = 'green' : el.style.backgroundColor = 'white';
				dbFlag == true ? el.classList.add("on") : el.classList.remove("on");
				dbFlag == true ? dbFlag = false : dbFlag = true;
				
			}

		

	});

}

lite.fn.setAttributes = function(el,attrs){

	for(var key in attrs){
		el.setAttribute(key, attrs[key]);
	}
	
}

function allowDrop(ev) {

    ev.preventDefault();
    return false;
}

function drag(event) {
	
	var style = window.getComputedStyle(event.target, null);
    var str = (parseInt(style.getPropertyValue("left")) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top")) - event.clientY)+ ',' + event.target.id;
    event.dataTransfer.setData("Text",str);
    
}

function drop(event) {
	// if(event.target.getAttribute('class') != 'on'){
	// 	return;
	// }
     var offset = event.dataTransfer.getData("Text").split(',');
    var dm = document.getElementById(offset[2]);
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
}

