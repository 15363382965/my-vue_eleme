<template>
	<section class="navAll">
	<div class="nav">
			<router-link v-for="(v,i) in nav_list"  to="/delicious" class="nav_box">
				<div class="nav_smallBox">
					<img :src="'./src/assets/images/nav_'+(i+1)+'.png'" />
				</div>
				<span class="nav_title">{{v.title}}</span>
			</router-link>
	</div>
	<div class="nav nav1">
			<router-link v-for="(v,i) in nav_list1" :to="'nav/nav_'+v.router" class="nav_box">
				<div class="nav_smallBox">
					<img :src="'./src/assets/images/nav_'+(i+10)+'.png'" />
				</div>
				<span class="nav_title">{{v.title}}</span>
			</router-link>
	</div>
	<div class="nav_bottom">
		<div class="nav_bottomLeft"></div>
		<div class="nav_bottomLeft"></div>
	</div>
	</section>
</template>

<script>
	export default{
		data(){
			return {
				nav_list:[
				 {router:'delicious',title:'美食',src:"../../assets/images/nav_1.png"},
				 {router:'delicious',title:'晚餐',src:"/dist/nav_1.png?c319357d06b74d837c922df76aac695d"},
				 {router:'delicious',title:'超市',src:"/dist/nav_1.png?c319357d06b74d837c922df76aac695d"},
				 {router:'delicious',title:'水果',src:"/dist/nav_1.png?c319357d06b74d837c922df76aac695d"},
				 {router:'delicious',title:'医疗',src:"/dist/nav_1.png?c319357d06b74d837c922df76aac695d"},
				 {router:'delicious',title:'烂漫鲜花',src:"/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021"},
				 {router:'delicious',title:'生鲜厨房',src:"/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021"},
				 {router:'delicious',title:'地方小吃',src:"/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021"},
				 {router:'delicious',title:'签到领红包',src:"/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021"},
				 {router:'delicious',title:'地方菜系',src:"/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021"}
				 
				],
				nav_list1:[
				 {router:'delicious',title:'麻辣烫',src:"/dist/logo.png?82b9c7a5a3f405032b1db71a25f67021"}
				 
				]
			}
		},
		
	}
</script>

<style scoped>
	.navAll{
		position: relative;
		height: 47vw;
	}
	.nav{
		position: relative;
		background: white;
		height: 47vw;
		text-align: center;
		overflow: hidden;
	}
	.nav_box{
		float: left;
		width: 20%;
		margin-top: 2.9%;
		
	}
	
	.nav_smallBox{
		width: 12vw;
		height: 12vw;
		overflow: hidden;
		display: inline-block;
	}
	.nav_smallBox img{
		width: 100%;
		height: 100%;
	}
	.nav_title{
		display: block;
		font-size: 0.9rem;
		color: #666;
		margin-top: 1.3%;
	}
	
	.nav1{
		display: none;
		overflow: hidden;
	}
	
	.nav_bottom{
		position: absolute;
		left: 50%;
		bottom: 10px;
		transform: translateX(-50%);
		width: 10%;
		height: 1%;
	    
	}
	.nav_bottomLeft{
		float: left;
		width: 25%;
		height: 100%;
		margin-left: 18%;
		background: black;
		opacity: 0.2;
	}
	
</style>