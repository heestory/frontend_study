/**
 * author : jh
 * title : sidebar
 */

(function(){
	
	'use strict';
	
	var ul = document.getElementById('menu');
	var li = ul.getElementsByTagName('li');
	//데이터 셋팅
	var menuText = {};
	var menuArray = [];
	menuText.japan = {title: '일식',first : '초밥 10 pc',second : '우동',third : '라멘'}
	menuText.china = {title: '중식',first : '짜장면',second : '짬뽕',third : '볶음밥'	}
	menuText.america = {title: '양식',first : '햄버거',second : '피자',third : '도넛'}
	menuText.korea = {title: '한식',first : '불고기',second : '김치찌개',third : '삼겹살'}
	
	for(const prop in menuText){
		var str = '<ul>' +
					'<li>'+menuText[prop].first+'</li>'+
					'<li>'+menuText[prop].second+'</li>'+
					'<li>'+menuText[prop].third+'</li>'+
				  '</ul>';
		menuArray.push(str);
	}
	
	//이벤트 핸들러 바인딩
	for(var i = 0; i<li.length; i++){
		li[i].addEventListener("click", function(){
			if(this.innerText === '일식'){
				document.getElementsByClassName('title')[0].innerHTML = '일식';
				document.getElementsByClassName('contents')[0].innerHTML = menuArray[0];
			}else if(this.innerText === '중식'){
				document.getElementsByClassName('title')[0].innerHTML = '중식';
				document.getElementsByClassName('contents')[0].innerHTML =menuArray[1];
			}else if(this.innerText === '양식'){
				document.getElementsByClassName('title')[0].innerHTML = '양식';
				document.getElementsByClassName('contents')[0].innerHTML =menuArray[2];
			}else{
				document.getElementsByClassName('title')[0].innerHTML = '한식';
				document.getElementsByClassName('contents')[0].innerHTML =menuArray[3];
			}
		});
	}
	
}).call(this);