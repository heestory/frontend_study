<template>
	<div class="container">
		<div class="title">
			<h1>Let's VOTE</h1>
			<img src="../assets/vote.png" style="width:200px; height:300px">
		</div>
		
		<div class="input-wrap">
		  <form class="form-horizontal">
		    <div class="form-group">
		      <label class="col-sm-3 control-label">TeamName</label>
		      <div class="col-sm-8">
		        <input class="form-control" id="" type="text" placeholder="Your Team" v-model="teamname">
		      </div>
		    </div>
		    <div class="form-group">
		      <label for="People" class="col-sm-3 control-label">People</label>
		      <div class="col-sm-8">
		        <input class="form-control" id="People" type="text" placeholder="a number of people" v-model="people">
		      </div>
		    </div>
		    
		  </form>
		</div>
		
		<div class="button-wrap">
			<button class="btn btn-primary" type="button" v-on:click="confirm(teamname,people)">Confirm</button>
		</div>
		
	</div>
</template>

<script>
	export default{
		name : 'index',
		data (){
			return {
				teamname:'',
				people:''
			}
		},
		methods:{
			confirm(teamname,people){
				window.location.href = '#/playground/'+teamname+'/'+people;
			}
		}
	}
</script>
<style scoped>
	.container{
		width:960px;
		height:500px;
		margin: 0 auto;
		text-align: center;
	
	}
	.input-wrap{
		width:400px;
		height:100px;
		margin:0 auto;
		text-align: center;
	}
</style>