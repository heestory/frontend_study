var users = [
	{id :1, name :'ID', age:32},
	{id :2, name :'ha', age:30},
	{id :3, name :'bj', age:29},
]

var temp_user = [];
for(var i = 0, len = users.length; i<len; i++){
	if(users[i].age<30){
		temp_user.push(users[i]);
	}
}
console.log(temp_user.length);

var ages = [];
for(var i = 0, len = temp_user.length; i<len; i++){
	ages.push(temp_user[i].age);
}
console.log(ages);






function filter(list, predicate){
	var new_list = [];
	for(var i = 0, len = list.length; i<len; i++){
		if(predicate(list[i])){
			new_list.push(list[i]);
		}
	}
	return new_list;
}

var users_under_30 = filter(users, function(user) { return user.age < 30 });
var users_over_30 = filter(users, function(user){return user.age > 30});
console.log(users_under_30.length);


function map(list, iteratee){
	var new_list = [];
	for(var i=0, len = list.length; i<len; i++){
		new_list.push(iteratee(list[i]))
	}
	return new_list;
}

var ages = map(users_under_30, function(user){return user.age});
var name = map(filter(users, function(user) { return user.age < 30 }), function(user){return user.name});
console.log(ages);


function bvalue(key){
	return function(obj){
		return obj[key];
	}
}

var b = bvalue('b');
console.log(b({a:'hi',b:'hello'}));
console.log(bvalue('a')({a:'hi',b:'hello'}));



var name = map(filter(users, function(user) { return user.age < 30 }), bvalue('name'));