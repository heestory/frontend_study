Vue.component('track-list',{
    template:
    '<div class="container align-items-center">' +
        '<div class="row">' +
            '<div class="col-lg-6">' +
                '<button v-on:click="getVote" class="btn btn-primary">Vote</button>' +
                '<input type="text" v-model="name" placeholder="To write your name"/> ' +
                '<div class="progress">' +
                '<div class="progress-bar progress-bar-success" role="progressbar" style="width:{{count}}%">\n' +
                '{{name}}' +
    '{{count}}' +
                '</div>' +
                '</div>' +
            '</div>' +
            '<div class="col-lg-6">' +
                '<img src="images/win.png" style="width: 200px; height: 200px"/>' +
                '<h1>winner is...</h1>' +
            '</div>' +
        '</div>' +
    '</div>',
    data:function(){
        return {name: '', count:0}
    },
    methods:{
        getVote : function(e){
            return this.count=this.count+10;
        }
    },
})

var vm = new Vue({
    el:'#app'
})