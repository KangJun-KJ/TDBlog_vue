<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<!-- <router-view/> -->
		<!--<HelloWorld></HelloWorld>-->
		<windowArea class='windowArea' :message="message" ></windowArea>
		<bottomNavigationbar class='navigationbar'></bottomNavigationbar>

	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld'
	import windowArea from '@/components/windowArea'
	import bottomNavigationbar from '@/components/bottomNavigationbar'
	export default {
		name: 'app',
		components: {
			HelloWorld,
			windowArea,
			bottomNavigationbar
		},
		data(){
			return {
				message:"你好啊"
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	
	html,
	body {
		height: 100%;
	}
	
	#app {
		width: 100%;
	}
	
	.windowArea {
		height: calc(100vh - 50px);
		width: 100%;
	}
	
	.navigationbar {
		position: relative;
		z-index: 10000;
		height: 50px;
		width: 100%;
	}
</style>