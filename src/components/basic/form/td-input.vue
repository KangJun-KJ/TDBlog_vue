<template>
	<div class='td-content'>
		<div class="td-text" v-show="!text.length">{{td_text}}</div>
		<input class='td-input' v-model="text" @focus="inputfoucs" @blur="inputblur" @input="change"></input>
		<img class='td-name' :src="inputType[input_type]">
		<div>
			<div class="td-line">
			</div>
			<div class="td-foucs-line" :class="{active:foucs}">
				
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"td-input",
		props:{
			td_text:{
				type:String,
				default:function(){
					return "随便输点啥"
				}
			},
			input_type:{
				default:function(){
					return 0;
				}
			}
		},
		data:function(){
			return{
				foucs:false,
				text:"",
				inputType:[
				require("@/assets/image/login/email.png"),
				require("@/assets/image/login/name.png"),
				require("@/assets/image/login/password.png"),
				require("@/assets/image/login/verification.png")
				]
			}
		},
		methods:{
			inputfoucs:function(){
				this.foucs=true;
			},
			inputblur:function(){
				this.foucs=false;
			},
			change(e){
				this.$emit("change",this.text);
			}
		},
		directives:{
			focus:{
				inserted(el){
					el.focus();
				}
			}
		}
	}
</script>

<style type="text/css" scoped>
	.td-content{
		width:256px;
		height:32px;
		position:relative;
		margin-bottom: 20px;
	}
	.td-text{
		position: absolute;
		top:0;
		line-height: 32px;
		color: rgba(0,0,0,.38);
		line-height: 34px;
		user-select: none;
		cursor: text;
		overflow: hidden;
		white-space: nowrap;
		width: 100%;
	}
	.td-input{
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: none;
		border: none;
		background: none;
		border-radius: 0 0 0 0;
		box-shadow: none;
		display: block;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 32px;
		font-style: inherit;
		font-variant: inherit;
		font-weight: inherit;
		font-stretch: inherit;
		font-size: inherit;
		color: rgba(0,0,0,.87);
		font-family: inherit;
		position: relative;
		top:0;
	}
	.td-line{
		margin: 0;
		height: 1px;
		border: none;
		background-color: rgba(0,0,0,.12);
		left: 0;
		right: 0;
		position: absolute;
	}
	.td-foucs-line{
		margin: 0px;
		height: 2px;
		border: none;
		background-color: #f44336;
		position: absolute;
		left: 0;
		right: 0;
		width:100%;
		margin-top: -1px;
		transform: scaleX(0);
		transition: transform .45s cubic-bezier(.23,1,.32,1);
	}
	.active{
		transform: scaleX(1);
	}
	.td-name{
		position:absolute;
		right:0;
		top:6px;
		width:20px;
	}
</style>