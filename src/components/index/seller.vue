<template>
	<div class="produce_selectBox">
		<div class="produce_select">
			<div class="select_box">
				<router-link to="/select_mult" class="selectLink">
					<span class="select_content">综合排序</span>
					<span class="el-icon-caret-bottom select_ico1"></span>
				</router-link>
				<router-link to="/select_distance" class="selectLink">
					<span class="select_content">距离最近</span>
				</router-link>
				<router-link to="/select_vip" class="selectLink">
					<span class="el-icon-star-on select_ico2" style="color: gold;"></span>
					<span class="select_content">会员领红包</span>
				</router-link>
				<router-link to="/select_filter" class="selectLink">
					<span class="select_content">筛选</span>
					<span class="el-icon-zoom-in select_ico3" style=""></span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.produce_selectBox{
		  /*position: sticky;*/
       /*z-index: 100;*/
   	   top: 165.76px;
   	   width: 100%;
   	   height: 10.7vw;
   	   background: white;
	}
	.produce_select{
	   width: 100%;
   	   height: 10.7vw;
   	   border-bottom: 0.15vw solid #ddd;
	}
     .select_box{
		height: 10.7vw;
		line-height: 10.4vw;
		
	}
	.selectLink{
        float: left;
        vertical-align: middle;
        text-align: center;
		width: 25%;
		height: 100%;
		color: #333;
		align-content: center;
	}
	.select_ico1{
		margin-left: 1.3vw;
		margin-bottom: 0.5vw;
		fill: #333333;
		width: 1.6vw;
		height: 0.8vw;
	}
	
	.select_ico2{
		fill: goldenrod;
		width: 2.5vw;
		height: 2vw;
	}
	.select_ico3{
		margin-left: 0.5vw;
		width: 3.5vw;
		height: 2.8vw;
		fill: #666666;
	}
</style>