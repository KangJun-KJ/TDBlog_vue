<template>
	<div>
		<div class='roll-header'>
			<div v-for="item in '一二三四五六日'.split('')">
				{{item}}
			</div>
		</div>
		<div class='roll-content'>
			<div class="roll-item" :style="topDistance" ref="animatedDom">
				<slot name='first'></slot>
			</div>
			<div class="roll-item">
				<slot name='second'></slot>
			</div>
			<div class="roll-item">
				<slot name='three'></slot>
			</div>
		</div>
	</div>
</template>

<script>
	import Velocity from 'velocity-animate'
	export default {
		name: 'rollupordown',
		data: function() {
			return {
				index: 0,
				topDistance: {
					marginTop: "0px"
				}
			}
		},
		methods: {
			prev: function() {
				console.log('切换上一个div');
				this.index--;
				
				console.log(this.index);
				if(this.index == -1) {
					this.index = 1;
					Velocity(this.$refs.animatedDom, {
						marginTop: -480
					}, {
						duration: 0
					})
				}
				var topS = this.index * -240;
				Velocity(this.$refs.animatedDom, {
					marginTop: topS
				})
			},
			next: function() {
				console.log("切换下一个div");
				this.index++;
				if(this.index > 2) {
					this.index = 1;
					Velocity(this.$refs.animatedDom, {
						marginTop: 0
					}, {
						duration: 0
					})
				};
				var topS = this.index * -240 + 'px';
				Velocity(this.$refs.animatedDom, {
					marginTop: topS
				})
			}
		}
	}
</script>

<style scoped>
	.roll-header {
		display: flex;
		width: 100%;
		height: 50px;
	}
	
	.roll-header div {
		flex: 1;
		color: #fff;
		line-height: 50px;
		text-align: center;
	}
	
	.roll-content {
		width: 100%;
		height: 240px;
		overflow: hidden;
	}
	
	.roll-item {
		height: 100%;
		width: 100%;
	}
</style>