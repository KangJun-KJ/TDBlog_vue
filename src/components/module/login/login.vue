<template>
	<div class='login' @click.prevent.stop="showLoginInfo=true" @contextmenu.prevent.stop='showLoginInfo=true'>

		<div class='clock' v-if="!showLoginInfo">
			{{now.hour}}:{{now.minute | addZero}}
		</div>
		<div class='time' v-if="!showLoginInfo">
			{{now.month}}月{{now.day}}日,星期{{now.weekDay | turnWeekend}}
		</div>
		<transition name='fade'>
			<div class='mask' v-if="showLoginInfo">
				<div class='user_head'>
					<img src="../../../assets/image/login/timg.jpg">
				</div>
				<div class='form'>
					<!--<input type="text" v-model="userName" placeholder="User name"/>-->
					<input type="text" v-model="userName" placeholder="Username" />
				</div>
				<div class='form sec'>
					<!--<input type="text" v-model="userName" placeholder="User name"/>-->

					<input :type="inputType" v-model="userPassword" placeholder="Password" />
					<div class='eye'>
						<svg v-show="userPassword.length" @mousedown="showPassword" @mouseup="closePassword" @mouseover="closePassword" t="1509602898867" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8058" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32">
							<path d="M512 718.4384c150.3232 0 354.304-153.6 368.4352-195.9936-5.5296-46.2848-197.4272-213.6064-368.4352-213.6064-162.6112 0-368.64 133.3248-368.64 214.6304 4.3008 40.1408 201.9328 194.9696 368.64 194.9696z m0 40.96c-170.8032 0-409.6-160.768-409.6-235.52 0-118.3744 240.2304-256 409.6-256 185.344 0 409.6 180.224 409.6 256 0 63.0784-245.1456 235.52-409.6 235.52" p-id="8059"></path>
							<path d="M512 616.0384c56.5248 0 102.4-45.8752 102.4-102.4s-45.8752-102.4-102.4-102.4-102.4 45.8752-102.4 102.4 45.8752 102.4 102.4 102.4z m0 40.96c-79.2576 0-143.36-64.1024-143.36-143.36s64.1024-143.36 143.36-143.36 143.36 64.1024 143.36 143.36-64.1024 143.36-143.36 143.36" p-id="8060"></path>
						</svg>
					</div>
					<div class='arrow' @click="login">
						<img src="../../../assets/image/login/arrowRight.png" />
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import axios from 'axios'
	import {loginUrl} from '@/common/config.js'
	export default {
		name: 'login',
		data() {
			return {
				showLoginInfo: false,
				inputType: "password",
				userName: "",
				userPassword: "",
				now: {
					hour: "",
					minute: "",
					month: "",
					day: "",
					weekDay: ""
				}
			}
		},
		created: function() {
			var self = this;
			document.onkeydown = function() {
				self.showLoginInfo = true;
			}
		},
		mounted() {
			this.initime();
		},
		methods: {
			initime() {
				var D = new Date();
				this.now.hour = D.getHours();
				this.now.minute = D.getMinutes();
				this.now.month = D.getMonth() + 1;
				this.now.day = D.getDate();
				this.now.weekDay = D.getDay();
				var self = this;
				setTimeout(() => {
					self.initime();
				}, 1000 - D.getSeconds())
			},
			showPassword() {
				this.inputType = "text";
			},
			closePassword() {
				this.inputType = "password";
			},
			login() {
				axios.post('http://passport.tdblog.com/api/login', {
						email: '690828339@qq.com',
						password: 'admin'
					})
					.then(function(res) {
						console.log(res);
					})
					.catch(function(err) {
						console.log(err);
					});
			}
		},
		filters: {
			addZero(value) {
				return value < 10 ? "0" + value : value
			},
			turnWeekend(value) {
				return "日一二三四五六".split('')[value];
			}
		}
	}
</script>

<style scoped>
	.login {
		width: 100%;
		height: 100%;
		background: url("../../../assets/image/login/img100.jpg") center center/100% 100% no-repeat;
		position: relative;
	}
	
	.clock {
		position: fixed;
		left: 0;
		bottom: 100px;
		font-size: 100px;
		color: #fff;
		text-indent: 40px;
		letter-spacing: 4px;
		font-weight: lighter;
	}
	
	.time {
		position: fixed;
		left: 0;
		bottom: 77px;
		font-size: 37px;
		color: #fff;
		text-indent: 40px;
		letter-spacing: 4px;
		font-weight: lighter;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}
	
	.mask {
		width: 100%;
		height: 100%;
		position: relative;
		background-color: rgba(0, 0, 0, .5);
	}
	
	.user_head {
		position: absolute;
		width: 200px;
		height: 200px;
		left: 50%;
		transform: translate(-100px, 200px);
		vertical-align: middle;
		border-radius: 100%;
		overflow: hidden;
	}
	
	.user_head img {
		width: 100%;
		height: 100%;
	}
	
	.form {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 450px;
		overflow: hidden;
	}
	
	.sec {
		top: 500px;
	}
	
	.form input {
		display: block;
		height: 35px;
		width: 300px;
		background-color: rgba(153, 153, 153, .54);
		border: 2px solid #bababa;
		padding-left: 5px;
		letter-spacing: 1px;
	}
	
	.form input:hover {
		border-color: #fff;
	}
	
	.form input::-webkit-input-placeholder {
		color: #A9A9A9;
	}
	
	.form input:focus {
		background-color: rgba(255, 255, 255, 1);
	}
	
	.form .arrow {
		position: absolute;
		top: 2px;
		right: 2px;
		height: 35px;
		width: 31px;
		background-color: rgba(103, 103, 103, .8);
	}
	
	.form .arrow img {
		display: block;
		margin: 6px auto;
		width: 30px;
		height: 25px;
	}
	
	.form .arrow:active {
		background-color: #007AFF;
	}
	
	.form .arrow:active img {
		transform: scale(0.9);
	}
	
	.form .eye {
		height: 35px;
		width: 33px;
		position: absolute;
		z-index: 1;
		top: 2px;
		right: 34px;
	}
	
	.form .eye .icon {
		width: 100%;
		height: 100%;
		fill: #000;
	}
	
	.form .eye:hover .icon {
		fill: #007AFF;
	}
	
	.form .eye:active .icon {
		background-color: #007AFF;
		fill: #fff;
	}
</style>