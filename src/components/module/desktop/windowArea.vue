<template>
	<div class='con' @contextmenu.prevent.stop='showContextmenu'  @click="closeContextmenu">
		<div v-for="(item,index) in soft" style="color:#fff;width:120px;">
			<img :src="item.logo" style='display: block;width: 100px;padding:10px;cursor: pointer;'/>
			<p style='text-align: center;'>{{item.name}}</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'windowArea',
		data(){
			return {
				soft:[{
					logo:require("@/assets/image/soft/wangyimusic/logo.jpg"),
					name:'网易云音乐'
				}]
			}
		},
		props: ['message'],
		methods: {
			showContextmenu(event) {
				var x = event.pageX || document.documentElement.scrollLeft + document.body.scrollLeft + event.clientX;
				var y = event.pageY || document.documentElement.scrollTop + document.body.scrollTop + event.clientY;
				this.$emit("showContextmenu",{x,y});
			},
			closeContextmenu(){
				this.$emit('closeContextmenu');
			}
			
		}
	}
</script>

<style lang="stylus">
	font-size=14px body font font-size Arial sans-seri .con {
		color white
	}
</style>