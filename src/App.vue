<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<!-- <router-view/> -->
		<!--<HelloWorld></HelloWorld>-->
		<windowArea class='windowArea' :message="message" ></windowArea>
		<bottomNavigationbar class='navigationbar'></bottomNavigationbar>

		<transition name='leftToRight'>
			<task v-if="IsOpenTaskba" key="task"></task>
		</transition>	

	</div>
</template>

<script>
	import HelloWorld from '@/components/HelloWorld'
	import windowArea from '@/components/windowArea'
	import bottomNavigationbar from '@/components/bottomNavigationbar'
	import task from '@/components/basic/task/task'
	import {mapState} from 'vuex'
	export default {
		name: 'app',
		components: {
			HelloWorld,
			windowArea,
			bottomNavigationbar,
			task
		},
		data(){
			return {
				message:"你好啊"
			}
		},
		methods:{

		},
		mounted:function(){
			//第一种方法可以取出来store里面的状态值。
			// console.log(this.$store.state.IsOpenTaskba)

			// console.log(this.IsOpenTaskba);
		},
		computed:{
			...mapState([
				'IsOpenTaskba'
			])
		},
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
		background-image: url('assets/image/win10.jpg');
		background-repeat: no-repeat;
		background-size:100% 100%;
		
	}
	
	.navigationbar {
		position: relative;
		z-index: 10000;
		height: 50px;
		width: 100%;
	}

	/*task的transition动画*/
	.leftToRight-enter-active, .leftToRight-leave-active {
	 	 transition: all .3s ease-in-out;
	}
	.leftToRight-enter, .leftToRight-leave-to {
	  	margin-right:-400px;
	}
</style>