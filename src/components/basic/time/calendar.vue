<template>

	<div>
		<div class='calendarLine' v-for="(item,index) in date">
			<div class='calendarLineItem' v-for="(item2,index2) in item" v-bind:class="{dataActive:item2.color,todayClass:item2.today}">
				{{item2.num}}
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'calendar',
		props: {
			year: {
				default: function() {
					return new Date().getFullYear();
				}
			},
			month: {
				default: function() {
					return new Date().getMonth();
				}
			}
		},
		data: function() {
			return {
				date: [
					[1, 2, 3, 4, 5, 6, 7],
					[1, 2, 3, 4, 5, 6, 7],
					[1, 2, 3, 4, 5, 6, 7],
					[1, 2, 3, 4, 5, 6, 7],
					[1, 2, 3, 4, 5, 6, 7],
					[1, 2, 3, 4, 5, 6, 7]
				]
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				this.calculatedDate(this.year, this.month);
			})
		},
		methods: {
			calculatedDate: function(year, month) {
				//判断是否当前的日期
				month--;
				var nowD = new Date();
				var y = nowD.getFullYear(),
					m = nowD.getMonth(),
					today = nowD.getDate();

				this.date = [];
				//获取当前月第一天是周几
				var dd = new Date(year, month, 1);
				var firstDay = dd.getDay();
				//用来获取当前月份的天数
				var days = this.mGetDate(year, month + 1);
				//获取上个月的天数
				var lastdays = this.mGetDate(year, month);
				var cntday = 1,
					nextcntday = 1;
				if(firstDay == 0) firstDay = 7;
				var num = [];
				for(var i = 0; i <= 6; i++) {
					if(i < firstDay - 1) {
						num.unshift({
							num: lastdays - i,
							color: false,
							today: false
						})
					} else {
						num.push({
							num: cntday++,
							color: true,
							today: false
						})
					}
				}
				this.date.push(num);
				for(var i = 0; i < 5; i++) {
					num = [];
					for(var j = 0; j < 7; j++) {
						if(cntday <= days) {

							if(year == y && month == m && cntday == today) {
								num.push({
									num: cntday++,
									color: true,
									today: true
								})
							} else {
								num.push({
									num: cntday++,
									color: true,
									today: false
								})
							}
						} else {
							num.push({
								num: nextcntday++,
								color: false,
								today: false
							})
						}
					}
					this.date.push(num);
				}
			},
			mGetDate: function(year, month) {
				var d = new Date(year, month, 0);
				return d.getDate();
			}
		},
		watch: {
			year: function(val, oldVal) {
				this.calculatedDate(this.year, this.month);
			},
			month: function(val, oldVal) {
				this.calculatedDate(this.year, this.month);
			}
		}
	}
</script>

<style scoped>
	.calendarLine {
		width: 100%;
		height: 40px;
		display: flex;
	}
	
	.calendarLineItem {
		color: #777;
		line-height: 40px;
		text-align: center;
		flex: 1;
		font-size: 20px;
		box-sizing: border-box;
		border: 2px solid rgba(76, 76, 76,0);
	}
	
	.calendarLineItem:hover {
		border: 2px solid grey;
	}
	
	.dataActive {
		color: #fff!important;
	}
	
	.todayClass {
		background-color: rgb(0, 120, 210);
		border: 2px solid #000;
	}
</style>