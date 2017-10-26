<template>
	<div @mouseenter="timemouseover" @mouseout="timemouseout" @click="timeblockclick">
		<p>15:34</p>
		<p>2017/10/25</p>
		<transition name="fade">
			<div class='timeBlockTips' v-if="showTips">
				<p>2017年10月25号</p>
				<p>星期三</p>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "timeBlock",
		data: function() {
			return {
				showTips: false,
				timer: "",
				year: '2017',
				month: "10"
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
		}
	}
</script>

<style>

</style>