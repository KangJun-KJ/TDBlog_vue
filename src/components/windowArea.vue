<template>
	<div class='con' @contextmenu.prevent.stop='showContextmenu'  >
		我是内容区域1 {{ message }}
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'windowArea',
		props: ['message'],
		methods: {
			showContextmenu(event) {
				var x = event.pageX || document.documentElement.scrollLeft + document.body.scrollLeft + event.clientX;
				var y = event.pageY || document.documentElement.scrollTop + document.body.scrollTop + event.clientY;
				this.$emit("showContextmenu",{x,y});
			}
		}
	}
</script>

<style lang="stylus">
	font-size=14px body font font-size Arial sans-seri .con {
		color white
	}
</style>