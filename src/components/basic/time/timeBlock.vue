<template>
	<div @mouseenter="timemouseover" @mouseout="timemouseout" @click="timeblockclick">
		<p>{{hour}}:{{minute | addZero}}</p>
		<p>{{year}}/{{month }}/{{day | addZero}}</p>
		<transition name="showOut">
			<div class='timeBlockTips' v-if="showTips">
				<p>{{year}}年{{month}}月{{day}}日</p>
				<p>星期{{ new Date().getDay() | trunWeekend }}</p>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "timeBlock",
		props:["year","month","day","hour","minute"],
		data: function() {
			return {
				showTips: false,
				timer: ""
			}
		},
		methods: {
			timemouseover: function() {
				var self = this;
				if(!self.timer) {
					self.timer = setTimeout(function() {
						self.showTips = true;
					}, 1000);
				}
			},
			timemouseout: function() {
				clearTimeout(this.timer);
				this.timer = "";
				this.showTips = false;
			},
			timeblockclick: function() {
				console.log("debug")
				this.$emit('toggletimeblock');
			}
		},
		filters:{
			trunWeekend:function(value){
				return "日一二三四五六".split("")[value];
			}
			,
			addZero:function(value){
				return value<10?"0"+5:value;
			}
		}
	}
</script>

<style scoped>
	.showOut-enter-active,
	.showOut-leave-active {
		transition: all .2s ease-out;
	}
	
	.showOut-enter,
	.showOut-leave-to {
		opacity: 0;
	}
</style>