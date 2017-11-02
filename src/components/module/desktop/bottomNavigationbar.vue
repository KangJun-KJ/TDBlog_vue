<template>
	<div :style='styleObject'>

		<div class='firstfloor'>
			<div class='menu' @click="showMenu=!showMenu" :class="{windowMenuActive:showMenu}">

			</div>
			<div class='refreshBlock' @click="minimizeAll">

			</div>
			<div class='taskbar' @click="taskClick">
				<img src="../../../assets/image/message.png">
			</div>
			<time-block class='timeBlock' v-on:toggletimeblock="changepopupState" :year="year" :month="month" :day="day" :hour="hour" :minute="minute" >
			</time-block>
	</div>
	<!-- 没有弹出来的和在底部分为两个div是为了没有弹出来的div从底部弹出来不覆盖再上面 -->
	<div class='secondfloor'>
		<!-- window开始菜单 -->
		<transition name="goup">
			<div class='windowMenu' v-if="showMenu">
			</div>
		</transition>
		
		<!-- 右下角时间组件 -->
		<transition name="goup" v-on:before-enter="beforeEnter">
			<div class='popup-timeblock' v-if="showpopup">
				<div class='timeClock'>
					{{ hour }}:{{minute | addZero }}:{{second | addZero }}
				</div>
				<div class='timeInfo'>
					{{year}}年{{month}}月{{day}}日,{{whichDay | turnWeekend }}
				</div>
				<div class='timeOpearator'>
					<div class='chooseTime' @click="changeTimeMode">{{ operatorYear }}年{{ operatorMonth }}月</div>
					<div class='prev' @click="prevTime"></div>
					<div class='next' @click="nextTime"></div>
				</div>
				<transition name='fade' mode='out-in'>
					<rollupordown v-if='!showDay' key='day' class='datatimeArea' ref="rolldiv">
						<calendar class='prevDiv'  slot='first' :year="operatorYear" :month="operatorMonth">
						</calendar>
						<calendar class='centerDiv' slot='second' :year="operatorYear" :month="operatorMonth">
						</calendar>
						<calendar class='nextDiv' slot='three' :year="operatorYear" :month="operatorMonth">
						</calendar>
					</rollupordown>
					<rollupordown2 v-else-if="showDay==1" key='month' class='datatimeArea' ref="rolldiv2">
						<calendar2 class='prevDiv' v-on:goDetaildate="goDetaildate" slot='first' :firstMonth="firstMonth" :firstYear="firstYear">
						</calendar2>
						<calendar2 class='centerDiv' v-on:goDetaildate="goDetaildate" slot='second' :firstMonth="firstMonth" :firstYear="firstYear">
						</calendar2>
						<calendar2 class='nextDiv' v-on:goDetaildate="goDetaildate" slot='three' :firstMonth="firstMonth" :firstYear="firstYear">
						</calendar2>
					</rollupordown2>
					<rollupordown2 v-else-if="showDay==2" key='year' class='datatimeArea' ref="rolldiv3">
						<calendar3 class='prevDiv' v-on:goDetaildate="goDetailYear" slot='first' :firstYear="firstYear" >
						</calendar3>
						<calendar3 class='centerDiv' v-on:goDetaildate="goDetailYear" slot='second' :firstYear="firstYear" >
						</calendar3>
						<calendar3 class='nextDiv' v-on:goDetaildate="goDetailYear" slot='three' :firstYear="firstYear" >
						</calendar3>
					</rollupordown2>
				</transition>
			</div>
		</transition>
	</div>
</div>
</template>

<script>
	import timeBlock from '@/components/basic/time/timeBlock'
	import rollupordown from '@/components/basic/time/rollupordown'
	import rollupordown2 from '@/components/basic/time/rollupordown2'
	import calendar from '@/components/basic/time/calendar'
	import calendar2 from '@/components/basic/time/calendar2'
	import calendar3 from '@/components/basic/time/calendar3'
	import {mapState,mapMutations} from "vuex"
	export default {
		name: "bottomNavigationbar",
		components: {
			timeBlock,
			rollupordown,
			rollupordown2,
			calendar,
			calendar2,
			calendar3
		},
		data: function() {
			return {
				showMenu: false,
				showpopup: false,
				showDay: 0,
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
				operatorMonth: "",
				firstMonth: "",
				firstYear:""
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
			//时间组件重新打开的时候清空上次操作。 
			init:function(){
				this.calculatedTime();
				this.getDateInfo();
				this.showDay=0;
			},
			minimizeAll: function() {
				console.log("最小化页面的toggle操作！！");
			},
			changepopupState: function() {
				this.init();
				this.showpopup = !this.showpopup;
			},
			getDateInfo: function() {
				this.year = this.date.getFullYear();
				this.month = this.date.getMonth() + 1;
				this.firstMonth = this.date.getMonth() + 1;
				this.firstYear = this.date.getFullYear();
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
				if(this.showDay>=2){
					return ;
				}
				this.showDay = this.showDay+1;
			},
			//点击时间组件的向上按钮的操作
			prevTime: function() {
				if(this.showDay==0) {
					this.$refs.rolldiv.prev();
					this.operatorMonth = this.operatorMonth - 1;
					if(this.operatorMonth <= 0) {
						this.operatorMonth = 11;
						this.operatorYear = this.operatorYear - 1;
					}
				} else if(this.showDay==1){
					this.$refs.rolldiv2.prev();
					this.operatorYear--;
					this.firstYear--;
				}else if(this.showDay==2){
					this.$refs.rolldiv3.prev();
					this.firstYear-=16;
				}

			},
			//点击时间组件的向下按钮的操作
			nextTime: function() {
				if(this.showDay==0) {
					this.$refs.rolldiv.next();
					this.operatorMonth = this.operatorMonth + 1;
					if(this.operatorMonth > 11) {
						this.operatorMonth = 0;
						this.operatorYear = this.operatorYear + 1;
					}
				} else if(this.showDay==1) {
					this.$refs.rolldiv2.next();
					this.operatorYear++;
					this.firstYear++;
				}else if(this.showDay==2){
					this.$refs.rolldiv3.next();
					this.firstYear+=16;
				}

			},
			//时间组件弹出来的时候初始化当前的选择日期
			beforeEnter: function() {
				this.operatorYear = this.date.getFullYear();
				this.operatorMonth = this.date.getMonth()+1;
			},
			goDetaildate:function(time){
				if(this.showDay<=0){
					return ;
				}
				this.showDay = this.showDay-1;
				this.operatorMonth = parseInt(time.split("-")[1]);
				this.operatorYear = parseInt(time.split("-")[0]);
			},
			goDetailYear:function(year){
				this.showDay=1;
				this.firstYear=parseInt(year);
				this.operatorYear=parseInt(year);
			},
			taskClick(){
				if(this.IsOpenTaskba==true){
					this.$store.commit("closeTask");
				}else{
					this.$store.commit("openTask");
				}
			},
			...mapMutations([
				"openTask",
				"closeTask"
			])
		},
		mounted: function() {
			this.init();
		},
		computed:{
			...mapState([
				'IsOpenTaskba'
			])
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

<style scoped lang='css'>

	@import '../../../assets/css/bottomNaviationbar.css';

</style>