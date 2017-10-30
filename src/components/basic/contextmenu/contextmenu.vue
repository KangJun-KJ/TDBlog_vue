<template>
	<div class='contextmenu' :style="styleObject">
		<ul>
			<li v-for="(item,index) in data">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'contextmenu',
		props: {
			styleObject: {
				type: Object,
				default: function() {
					return {
						backgroundColor: "#fff",
						top: "10px",
						left: "50% "
					}
				}
			},
			data: {
				type: Array,
				default: function() {
					return [{
						name: "查看",
						icon: "",
						disabled: false,
						child: [],
					}, {
						name: "排序方法",
						icon: "",
						disabled: false,
						child: []
					}, {
						name: "刷新",
						icon: "",
						disabled: false,
						child: []
					}]
				}
			}
		},

	}
</script>

<style scoped>
	.contextmenu {
		width: 250px;
		position: fixed;
		box-shadow: 0 0 3px #999999;
		padding: 5px;
		box-sizing: border-box;
	}
	
	.contextmenu ul {
		list-style: none;
	}
	
	.contextmenu ul li {
		line-height: 20px;
		cursor:default;
	}
	
	.contextmenu ul li:hover {
		background-color: darkgray;
	}
</style>