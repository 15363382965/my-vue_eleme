<template>
	<div class="footer">
		<router-link to="/index" class="footerBox">
			<div class="el-icon-service"></div>
			<span class="footer_text">首页</span>
		</router-link>
		<router-link to="/find" class="footerBox">
			<div class="el-icon-bell"></div>
			<span class="footer_text">发现</span>
		</router-link>
		<router-link to="/order" class="footerBox">
			<div class="el-icon-view"></div>
			<span class="footer_text">订单</span>
		</router-link>
		<router-link to="/my" class="footerBox">
			<div class="el-icon-phone-outline"></div>
			<span class="footer_text">我的</span>
		</router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.footer{
		position: fixed;
		bottom: 0;
		left: 0;
		width:100vw;
		height: 13.5vw;
		z-index: 2000;
		background: white;
	}
	.footerBox{
		position: relative;
		float: left;
	    width: 24%;
	    display: block;
	    height: 13.5vw;
	    text-align: center;
	    padding: 1vw 0;
	    line-height: 16.5vw;
	    color: #8e8e93;
	    font-size: 0.9rem;
	}
	.footerBox div{
		position: absolute;
		display: block;
		width: 5.3vw;
		height: 5.3vw;
		top: 50%;
		margin-top: -30%;
		margin-left: -14%;
		left: 50%;
		font-size: 1.5rem;
	}
	.footer_text{
		font-size: 0.8rem;
	}
	.router-link-active{
		color: blue;
	}
</style>