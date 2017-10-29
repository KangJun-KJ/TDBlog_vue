<template>
	<div>
		<div class='roll-content'>
			<div class="roll-item" :style="topDistance" ref="animatedDom">
				<slot name='first' ></slot>
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
		name: 'rollupordown2',
		data: function() {
			return {
				index: 0,
				topDistance: {
					marginTop: "0px"
				},
				oneDistacnce:300
			}
		},
		methods: {
			prev: function() {
				this.index--;
				if(this.index == -1) {
					this.index = 1;
					Velocity(this.$refs.animatedDom, {
						marginTop: -this.oneDistacnce*2
					}, {
						duration: 0
					})
				}
				var topS = this.index * -this.oneDistacnce;
				Velocity(this.$refs.animatedDom, {
					marginTop: topS
				})
			},
			next: function() {
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
	.roll-content {
		width: 100%;
		height: 300px;
		overflow: hidden;
	}
	
	.roll-item {
		height: 100%;
		width: 100%;
	}
</style>