<template>
	<div class='contextmenu' :style="styleObject">
		<ul>
			<li v-for="(item,index) in data" v-if="typeof item == 'object'" :class="{active:item.disabled}">
				<div class='item1'>
					<!-- <img :src="item.icon"> -->
				</div>
				<div class='item2'>
					{{item.name}}
				</div>
				<div class='item3' >
					<div v-if="item.child.length">
					>
					</div>
				</div>
			</li>
			<li v-else class='line'>
				<p></p>
			</li>
		</ul>
	</div>
</template>

<script>
	import comIcon from '../../../assets/computer.png'
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
						disabled: true,
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
					},
					"line"
					, {
						name: "粘贴(p)",
						icon: "",
						disabled: true	,
						child: []
					}
					,"line"
					,{
						name: "新建",
						icon: "",
						disabled: true	,
						child: [{
							name: "文件夹",
							icon: "",
							disabled: false,
						}]
					},"line",
					{
						name: "显示设置",
						icon: comIcon,
						disabled: true	,
						child: []
					},
					{
						name: "个人设置",
						icon: "",
						disabled: true	,
						child: []
					}
					]
				}
			}
		},

	}
</script>

<style scoped>
	.contextmenu {
		position: fixed;
		box-shadow: 0 0 3px #999999;
		padding: 5px;
		box-sizing: border-box;
	}
	
	.contextmenu ul {
		list-style: none;
	}
	
	.contextmenu ul li {
		display: flex;
		line-height: 20px;
		color:gray;
		cursor:default;
	}
	.contextmenu ul li .item1{
		flex: 1;
	}
	.contextmenu ul li .item1 img{
		height:17px;
		vertical-align: middle;
	}
	.contextmenu ul li .item2{
		flex:4;
	}
	.contextmenu ul li .item3{
		flex:1;
		font-size: 20px;
		text-align: center;
	}

	.contextmenu ul .line {
		line-height: 10px;
	}
	.contextmenu ul .line p{
		width:100%;
		height:1px;
		background-color: gray;
		margin-top:7px;
		margin-bottom:7px;
	}
	.contextmenu ul .active{
		color:#000;
	}
	.contextmenu ul .active:hover {
		background-color: darkgray;
	}
</style>