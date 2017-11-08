<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<!-- <router-view/> -->
		<!--<HelloWorld></HelloWorld>-->
		<!--<windowArea class='windowArea' :message="message" v-on:showContextmenu="showContextmenu">
			
		</windowArea>
		<bottomNavigationbar class='navigationbar'></bottomNavigationbar>-->
		
		<!--系统自带右键菜单-->
		<!--<contextmenu v-if="IsShowContextMenu" :styleObject="position" ref="contextmenuRef">-->
			
		<!--</contextmenu>-->
		
		<!--右滑菜单-->
		<!--<transition name='leftToRight'>-->
			<!--<task v-if="IsOpenTaskba" key="task"></task>-->
		<!--</transition>-->	
		<router-view ></router-view>
	</div>
</template>

<script>

	export default {
		name: 'app',
		methods:{
			ListenClickWindow:function(){
				document.onmousedown=function(){
					console.log('整个窗口都被点击了！');
				}
			}
		},
		mounted:function(){
			this.ListenClickWindow();
		}
	}
</script>

<style scoped>
	
	#app {
		width: 100%;
		height:100%;
	}
	.screen{
	}
</style>