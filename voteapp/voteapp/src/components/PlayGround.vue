<template>
	<div class="container">
		<header class="row" id="header">
			<div class="col-md-4" id="title">
				<h1>{{$route.params.teamname}}</h1>
			</div>
			<div class="col-md-8" id="button">
				<button type="button" class="btn btn-primary btn-lg">reset</button>
			</div>
		</header>
		<article class="row" >
			<div class="col-md-9" >
			

				<track-component v-for="n in people" :key="n"></track-component>
			
			</div>
			<div class="col-md-3">
				
			</div>
		</article>
		
	</div>
</template>

<script>
import	TrackComponent from './Track.vue' 

	export default{
		name:'playGround',
		data(){

			
			return {
				msg: 'playGround',
				people: parseInt(this.$route.params.people)
				
			}
		},
		components:{
			TrackComponent
		}
		
	}
</script>

<style scoped>
	#title{
		width:30%;
		height:100%;
		border-bottom: 1px solid; 
	}
	article{
		outline: 1px solid black;
		width:960px;
		height:500px;
	}

</style>

