<template>

	<div>
		<div class='calendarLine' v-for="(item,index) in date">
			<div class='calendarLineItem' @click='goDetailDate' :data-time="item2.num" v-for="(item2,index2) in item" v-bind:class="{dataActive:item2.color,nowYearActive:item2.nowYear}">
				{{item2.num}}年
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'calendar',
		props: {
			firstYear: {
				default: function() {
					return 1;
				}
			}
		},
		data: function() {
			return {
				date: [
				[1, 2, 3, 4],
				[5, 6, 7, 8],
				[9, 10, 11, 12],
				[1, 2, 3, 4]
				]
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				this.init();
			})
		},
		methods: {
			init: function() {
				this.date = [];
				for(var i = 0; i < 4; i++) {
					var num=[];
					for(var j = 0; j < 4; j++) {
						num.push({
							num: this.firstYear+i*4+j,
							color: true,
							nowYear:new Date().getFullYear()==this.firstYear+i*4+j
						})
					}
					this.date.push(num);
				}
			},
			goDetailDate:function(e){
				this.$emit("goDetaildate",e.target.dataset.time);
			}
		},
		watch: {
			firstYear:function(val,oldVal){
				this.init();
			}
		}
	}
</script>

<style scoped>
	.calendarLine {
		width: 100%;
		height: 75px;
		display: flex;
	}
	
	.calendarLineItem {
		color: #777;
		line-height: 75px;
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
	.nowYearActive{
		background-color: rgb(0,120,215);
	}
</style>