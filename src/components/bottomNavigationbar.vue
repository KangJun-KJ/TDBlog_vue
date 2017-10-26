<template>
	<div :style='styleObject'>

		<div class='firstfloor'>
			<div class='menu' @click="showMenu=!showMenu" :class="{windowMenuActive:showMenu}">

			</div>
			<div class='refreshBlock' @click="minimizeAll">

			</div>
			<time-block class='timeBlock' v-on:toggletimeblock="changepopupState"></time-block>
		</div>
		<div class='secondfloor'>
			<transition name="goup">
				<div class='windowMenu' v-if="showMenu">

				</div>
			</transition>

			<transition name="goup" v-on:before-enter="beforeEnter">
				<div class='popup-timeblock' v-if="showpopup">
					<div class='timeClock'>
						{{ hour }}:{{minute | addZero }}:{{second | addZero }}
					</div>
					<div class='timeInfo'>
						{{year}}年{{month}}月{{day}}日,{{whichDay | turnWeekend }}
					</div>
					<div class='timeOpearator'>
						<div class='chooseTime' @click="changeTimeMode">{{ year }}年{{ month }}月</div>
						<div class='prev' @click="prevTime"></div>
						<div class='next' @click="nextTime"></div>
					</div>
					<rollupordown class='datatimeArea' ref="rolldiv">
						<calendar class='prevDiv' slot='first' :year="operatorYear" :month="operatorMonth">
							{{operatorMonth}}
						</calendar>
						<calendar class='centerDiv' slot='second'>
							{{operatorMonth}}
						</calendar>
						<calendar class='nextDiv' slot='three'>
							{{operatorMonth}}
						</calendar>
					</rollupordown>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	import timeBlock from '@/components/basic/time/timeBlock'
	import rollupordown from '@/components/basic/time/rollupordown'
	import calendar from '@/components/basic/time/calendar'
	export default {
		name: "bottomNavigationbar",
		components: {
			timeBlock,
			rollupordown,
			calendar
		},
		data: function() {
			return {
				showMenu: false,
				showpopup: false,
				date: new Date(),
				timer: "",
				year: "",
				month: "",
				day: "",
				hour: "",
				minute: "",
				second: "",
				whichDay: "",
				operatorYear: "",
				operatorMonth: ""
			}
		},
		props: {
			message: {
				default: function() {
					return "Hello Vue";
				}
			},
			styleObject: {
				default: function() {
					return {
						backgroundColor: "#000"
					}
				}
			}
		},
		methods: {
			minimizeAll: function() {
				console.log("最小化页面的toggle操作！！");
			},
			changepopupState: function() {
				this.showpopup = !this.showpopup;
			},
			getDateInfo: function() {
				this.year = this.date.getFullYear();
				this.month = this.date.getMonth() + 1;
				this.day = this.date.getDate();
				this.whichDay = this.date.getDay();
			},
			//计算当前时间的时分秒
			calculatedTime: function() {
				var self = this;
				self.date = new Date();
				self.hour = self.date.getHours();
				self.minute = self.date.getMinutes();
				self.second = self.date.getSeconds();
				setTimeout(function() {
					self.calculatedTime();
				}, 1000 - self.date.getMilliseconds());
			},
			//
			changeTimeMode: function() {

			},
			//点击时间组件的向上按钮的操作
			prevTime: function() {
				this.$refs.rolldiv.prev();
			},
			//点击时间组件的向下按钮的操作
			nextTime: function() {
				this.$refs.rolldiv.next();
				this.operatorMonth = this.operatorMonth + 1;
			},
			//时间组件弹出来的时候初始化当前的选择日期
			beforeEnter: function() {
				this.operatorYear = this.date.getFullYear();
				this.operatorMonth = this.date.getMonth();
			}
		},
		mounted: function() {
			this.calculatedTime();
			this.getDateInfo();
		},
		filters: {
			addZero: function(value) {
				return value < 10 ? ("0" + value) : value;
			},
			turnWeekend: function(value) {
				return "星期" + "日一二三四五六".split('')[value];
			}
		}
	}
</script>

<style type="text/css">
	.firstfloor>.menu {
		float: left;
		height: 50px;
		width: 50px;
		background-position: center center;
		background-image: url('../assets/image/win10Icon.png');
		background-size: 30px 30px;
		background-repeat: no-repeat;
	}
	
	.firstfloor>.menu:hover {
		background-color: #333;
		background-image: url('../assets/image/win10HoverIcon.png');
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: all .3s ease;
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
	
	.goup-enter-active,
	.goup-leave-active {
		transition: all .3s ease;
	}
	
	.goup-enter,
	.goup-leave-to {
		transform: translateY(50px);
		opacity: 0;
	}
	
	.windowMenu {
		position: fixed;
		z-index: 1000;
		bottom: 50px;
		left: 0px;
		width: 300px;
		height: 500px;
		background-color: rgba(0, 0, 0, .7);
	}
	
	.windowMenuActive {
		background-color: #333;
	}
	
	.refreshBlock {
		float: right;
		height: 100%;
		width: 5px;
		border-left: 1px solid #fff;
	}
	
	.timeBlock {
		float: right;
		color: #fff;
		text-align: center;
		width: 120px;
		height: 100%;
	}
	
	.timeBlock:hover {
		background-color: #333;
	}
	
	.timeBlock p {
		height: 50%;
		line-height: 25px;
		cursor: default;
	}
	
	.timeBlockTips {
		background-color: #fff;
		border: 1px solid #999;
		color: #333;
		position: fixed;
		bottom: 50px;
		right: 0;
		width: 150px;
		text-align: left;
		text-indent: 10px;
		height: 45px;
		font-size: 14px;
	}
	
	.timeBlockTips>p {
		line-height: 20px!important;
	}
	
	.popup-timeblock {
		position: fixed;
		bottom: 50px;
		right: 0;
		height: 450px;
		width: 350px;
		background-color: rgba(0, 0, 0, .7);
		cursor: default;
	}
	
	.firstfloor,
	.secondfloor {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 10001
	}
	
	.secondfloor {
		z-index: 1000;
	}
	
	.popup-timeblock .timeClock {
		height: 60px;
		width: 100%;
		padding: 10px 20px;
		color: #fff;
		font-size: 30px;
		line-height: 40px;
		box-sizing: border-box;
		font-weight: lighter;
	}
	
	.popup-timeblock .timeInfo {
		width: 100%;
		padding: 0px 20px;
		color: rgba(0, 120, 215, .8);
		cursor: pointer;
		font-size: 14px;
	}
	
	.popup-timeblock .timeInfo:hover {
		color: #999;
	}
	
	.popup-timeblock .timeOpearator {
		margin-top: 20px;
		width: 100%;
		padding: 0px 20px;
		color: rgb(193, 193, 193);
		font-size: 18px;
		box-sizing: border-box;
	}
	
	.popup-timeblock .timeOpearator:after {
		content: "";
		clear: both;
		display: block;
	}
	
	.chooseTime {
		width: 70%;
		float: left;
	}
	
	.chooseTime:hover {
		color: #fff;
	}
	
	.prev,
	.next {
		width: 15%;
		height: 24px;
		position: relative;
		float: left;
	}
	
	.prev:hover::after,
	.next:hover::after {
		border-color: #fff;
	}
	
	.prev:after,
	.next:after {
		content: "";
		color: #fff;
		width: 15px;
		height: 15px;
		position: absolute;
		border-top: 2px solid rgb(193, 193, 193);
		border-left: 2px solid rgb(193, 193, 193);
		transform-origin: center center;
	}
	
	.prev:after {
		top: 7px;
		left: 14px;
		transform: rotate(45deg);
	}
	
	.next:after {
		top: -2px;
		left: 14px;
		transform: rotate(-135deg);
	}
	
	.datatimeArea {
		width: 310px;
		height: 300px;
		margin: 10px 20px;
		box-sizing: border-box;
	}
</style>