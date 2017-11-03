<template>
	<div class='model'>
		<div class="model-daialog">
			<div class="model-content">
				<div class="model-header">{{option.title}}</div>
				<div class="model-body"></div>
				<div class="model-footer"></div>
			</div>
		</div>
	</div>	
</template>

<script type="text/javascript">
	export default{
		name:"model",
		props:{
			option:{
				type:Object,
				default:function(){
					return {
						title:"账号注册页面"
					}
				}
			}
		}
	}
</script>

<style type="text/css">

	.model{
		position: fixed;
		top:0;
		left:0;
		bottom:0;
		right:0;
	}
	.model-content{
		width:400px;
		height:400px;
		position: absolute;
		left:50%;
		top:50%;
		transform: translate(-50%,-50%);
		border-radius: 3px;
		box-shadow: 0 19px 60px rgba(0,0,0,.298039), 0 15px 20px rgba(0,0,0,.219608);
		background-color: rgba(255,255,255,.95);
	}
	.model-header{
		padding:20px;
		border-bottom: 1px solid #999;
	}
</style>