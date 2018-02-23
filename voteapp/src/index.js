Vue.component('track-list',{
    template:`
    <div class="container align-items-center">
        <div class="row">
            <div class="col-lg-6">
                <button v-on:click="getVote" class="btn btn-primary">Vote</button>
                <input type="text" v-model="name" placeholder="To write your name"/>
                <div class="progress">
                <div class="progress-bar progress-bar-success" role="progressbar" style="width:0%">
                
                {{count}}
            
                </div>
                </div>
            </div> 
       </div> 
    </div>`,
    data:function(){
        return {name: '', count:0}
    },
    methods:{
        getVote : function(e){
            if(this.count < 100){
                this.count = this.count == 0 ? 20 : this.count +(100/vm.person);
                document.getElementsByClassName('progress-bar')[parseInt(this.idx)].style.width = this.count +'%';
                if(this.count == 100){
                    this.result();    
                }
                return this.count;
            }
        },
        result : function(){
            var img = '<img src="" style="width:250px; height: 250px"/>';
            document.getElementById('img').appendChild(img);
            return vm.winner = this.name;
        }

    },
    props: ['idx']
   
});


Vue.config.debug = true; 
Vue.config.devtools = true;

var vm = new Vue({


    el:'#app',
    data: {
        person: 5,
        winner:''
    }
    
})