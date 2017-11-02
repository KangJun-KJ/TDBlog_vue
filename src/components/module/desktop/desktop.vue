<template>
	<div class='interface'>
		<windowArea class='windowArea' :message="message" v-on:showContextmenu="showContextmenu">
			
		</windowArea>
		<bottomNavigationbar class='navigationbar'></bottomNavigationbar>
		
		<!--系统自带右键菜单-->
		<contextmenu v-if="IsShowContextMenu" :styleObject="position" ref="contextmenuRef">
			
		</contextmenu>
		
		<!--右滑菜单-->
		<transition name='leftToRight'>
			<task v-if="IsOpenTaskba" key="task"></task>
		</transition>
	</div>
</template>

<script >
	import windowArea from '@/components/module/desktop/windowArea'
	import bottomNavigationbar from '@/components/module/desktop/bottomNavigationbar'
	import task from '@/components/basic/task/task'
	import contextmenu from "@/components/basic/contextmenu/contextmenu"
	import {mapState} from 'vuex'
	export default {
		name: 'desktop',
		components: {
			windowArea,
			bottomNavigationbar,
			task,
			contextmenu
		},
		data(){
			return {
				message:"你好啊",
				IsShowContextMenu:false,
				position:{
					width:"250px",
					backgroundColor: "#fff",
					left:"300px",
					top:"200px"
				}
			}
		},
		methods:{
			showContextmenu(e){
				var x=e.x,y=e.y;
				if(x+250>window.innerWidth+2){
					x=window.innerWidth-250-2;
				}
				console.log(this.$refs.contextmenuRef);
				this.position.left=x+"px";
				this.position.top=y+"px";
				this.IsShowContextMenu=true;
			}
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

<style scoped>
	.interface{
		width:100vw;
		height:100vh;
	}
	
	.windowArea {
		height: calc(100vh - 50px);
		width: 100%;
		background-image: url('../../../assets/image/win10.jpg');
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