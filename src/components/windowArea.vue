<template>
	<div class='con'>
		我是内容区域1 {{ message }}
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'windowArea',
		props:['message']
	}
</script>

<style lang="stylus">
	font-size=14px

	body 
		font font-size Arial sans-seri

 	.con{
 		color white
 	}

</style>