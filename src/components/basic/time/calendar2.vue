<template>

	<div>
		<div class='calendarLine' v-for="(item,index) in date">
			<div class='calendarLineItem' @click='goDetailDate' :data-time="item2.time" v-for="(item2,index2) in item" v-bind:class="{dataActive:item2.color}">
				{{item2.num}}月
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'calendar',
		props: {
			firstMonth: {
				default: function() {
					return 1;
				}
			},
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
				for(var i = 1; i <= 4; i++) {
					var num=[];
					if(i != 4) {
						for(var j = 1; j <= 4; j++) {
							num.push({
								num: i * j,
								color: true,
								time:this.firstYear+"-"+(i*j)
							})
						}
					} else {
						for(var j = 1; j <= 4; j++) {
							num.push({
								num: j,
								color: false,
								time:(this.firstYear+1)+"-"+(j)
							})
						}
					}
					this.date.push(num);
				}
			},
			goDetailDate:function(e){
				this.$emit("goDetaildate",e.target.dataset.time);
			}
		},
		watch: {
			firstMonth: function(val, oldVal) {
				this.init();
			},
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
		border: 2px solid rgb(76, 76, 76);
	}
	.calendarLineItem:hover {
		border: 2px solid grey;
	}
	.dataActive {
		color: #fff!important;
	}
</style>