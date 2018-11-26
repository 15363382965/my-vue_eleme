<template>
	<transition enter-active-class="animated fadeInRight">
	<section>
		<div class="sear_header">
			<span class="sear_ico el-icon-arrow-left" @click="toReturn()"></span>
		    <div class="sear_text">
				<input placeholder="请输入商家、商品名字" />
				<div class="el-icon-search sear_ico2"></div>
				<span class="sousuo">搜索</span>
			</div>
		</div>
		<div class="his_sear">
			<span class="his_searLeft">历史搜索</span>
			<span class="his_ico el-icon-delete"></span>
		</div>
		<div class="his_tag">
			<span class="his_tagContent" v-for="(v,i) in hisList">{{v}}</span>
		</div>
		<div class="his_sear">
			<span class="his_searLeft">热门搜索</span>
			<span class="his_ico el-icon-star-on"></span>
		</div>
		<div class="his_tag">
			<span class="his_tagContent" v-for="(v,i) in hotList">{{v}}</span>
		</div>
	</section>
	</transition>
</template>

<script>
		 export default{
		 	data(){
		 		return {
		 			hisList:["沙县小吃","炸鸡","兰州拉面","可乐","麦当劳","汉堡"],
		 			hotList:["炒面","沙县小吃","兰州拉面","肯德基","麦当劳","沙县小吃","兰州拉面"]
		 		}
		 	},
		 	methods:{
		 		toReturn(){
		 			this.$router.go(-1)
		 		}
		 	}
		 }
</script>

<style scoped>
	.sear_header{
		position: relative;
	}
	.sear_ico{
		position: absolute;
		top: 4.7vw;
		left: 3vw;
		color: #999;
		font-size: 1.8rem;
		
	}
	.sear_text{
		margin-left: 10vw;
     	box-sizing: border-box;
     	display: inline-block;
     	width: 76vw;
     	height: 15vw;
     	padding:2.666667vw 3.5vw;
     	position: relative;
     	color: #333333;
     }
     .sear_text input{
     	width: 100%;
     	height: 100%;
     	text-indent: 10vw;
     	outline-style: none;
     	background: #f8f8f8;
     	border: none;
     }
     .sear_ico2{
     	position: absolute;
     	left: 8.5vw;
     	top: 6.2vw;
     }
     .sousuo{
     	padding: 1vw;
     	font-size: 1.2rem;
     	font-weight: 600;
     	position: absolute;
     	top: 3vw;
     	right: -9vw;
     }
     .his_sear{
     	padding: 2vw 5vw;
     	color: #666;
     	zoom: 1;
     }
     .his_sear:after{
     	content: '';
     	display: block;
     	clear: both;
     }
     .his_searLeft{
     	float: left;
     	font-size: 1.2rem;
     	font-weight: 700;
     }
     .his_ico{
     	float: right;
     	font-size: 600;
     }
     .his_tag{
     	padding: 0 3.3vw 3.3vw 3.3vw;
     }
     .his_tagContent{
     	display: inline-block;
     	padding: 2vw 2.6vw;
     	margin-right: 3.3vw;
     	margin-top: 3.3vw;
     	background: #f7f7f7;
     	color: #666;
     	font-size: 1rem;
     	border-radius: 0.7vw;
     }
</style>