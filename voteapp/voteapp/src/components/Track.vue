<template>
	<div class="container">
		<div class="col-md-1">
			<button type="button" class="btn btn-primary">Vote</button>
		</div>
		<div class="col-md-6">
			<div class="progress">
			  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
			  aria-valuemin="0" aria-valuemax="100" style="width:40%">
			    40% Complete (success)
			  </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'track',
		data (){
			return {
				msg : 'track'
			}
		}
	}
</script>

<style scoped>
</style>