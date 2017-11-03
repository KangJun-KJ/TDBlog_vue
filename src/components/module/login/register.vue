<template>
	<div class="content">
		<div class='close' @click='closeDiv'>x</div>
		<p class='title'>SIGN UP</p>
		<div class='line'></div>
		<!-- input_type为0-3,对应着邮箱、账号、密码、验证码 -->
		<td_input ref="nameInput" td_text="你的名字" input_type="1"></td_input>	
		<td_input ref="nameInput" td_text="你的邮箱" input_type="0"></td_input>	
		<td_input class='verifical' ref="nameInput" td_text="邮箱验证码" input_type="3"></td_input>	
		<td_input ref="nameInput" td_text="密码" input_type="2"></td_input><button class='sendemilcode'>发送邮箱验证码</button>
		<button class='signBtn'>Get Started</button>
	</div>
</template>

<script type="text/javascript">
	import td_input from '@/components/basic/form/td-input' 
	export default{
		name:"register",
		components:{
			td_input
		},
		methods:{
			closeDiv:function(){
				this.$emit("close");
			}
		}

	}
</script>

<style type="text/css" scoped>
	.content{
		position: fixed;
		left:50%;
		top:50%;
		transform: translate(-50%,-50%);
		width:300px;
		height:400px;
		background-color: #fff;
		border-radius: 10px;
		padding:20px;
		box-sizing: border-box;
	}
	.content .title{
		text-align: center;
		color:#777;
	}
	.content .line{
		height:2px;
		width:30px;
		background-color: rgb(255,167,173);
		margin:20px auto;
	}
	.verifical{
		width:120px!important;
	}
	.sendemilcode{
		position:absolute;
		top: 187px;
		left: 166px;
		border:0;
		height:32px;
		width:120px;
		border-radius: 4px;
		background-color:rgb(255,167,173);
		color:#fff;
		cursor: pointer;
		letter-spacing: 1px;
	}
	.sendemilcode:focus{
		border:0;
		outline: none
	}
	.sendemilcode:active{

	}
	.signBtn{
		display: block;
		border:0;
		outline:none;
		width:200px;
		height:30px;
		border-radius: 30px;
		color:#fff;
		margin: 50px auto;
		background-color: rgb(255,56,71);
	}
	.close{
		position: absolute;
		top:5px;
		right:15px;
		color:rgb(25,25,25);
		font-size:20px;
		cursor: pointer;

	}
</style>