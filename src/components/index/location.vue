<template>
	<transition enter-active-class="animated fadeInRight">
	<section>
		<div class="loca_header">
			<div class="loca_return el-icon-arrow-left" @click="toReturn()"></div>
			<div class="loca_mid">选择收货地址</div>
			<router-link class="loca_add" to="/add_address">新增地址</router-link>
		</div>
		<div class="sear_loc">
			<div class="sear_click">
				<span class="sear_click_address">广州</span>
				<span class="el-icon-caret-bottom sear_ico1"></span>
			</div>
			<div class="sear_text">
				<input placeholder="请输入地址" />
				<div class="el-icon-search sear_ico2"></div>
			</div>
		</div>
		<div class="i"></div>
		<div class="now_loca">
			<div class="now_locaBox">当前地址</div>
			<div class="now_locaContent">
			   <div class="now_localText">广东省广州市黄埔区加速器</div>
			   <div class="reset_loca">
			   	 <span class="now_ico el-icon-location-outline"></span>
			   	 <span class="reset_content">重新定位</span>
			   </div>
			</div>
		</div>
		<div class="now_loca">
			<div class="now_locaBox">收货地址</div>
			<div class="loca_info">
			   <span class="info_name">李少雄</span><span class="info_type">先生</span><span class="info_iphone">15363382965</span>
			   <div class="info_addr">
			   	 广东省广州市黄埔区加速器E2栋506
			   </div>
			</div>
		</div>
		<div class="i"></div>
		<router-view></router-view>
	</section>
	</transition>
</template>

<script>
	export default{
		methods:{
			toReturn(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	section{
		position: fixed;
        width: 100%;
        height: 100%;
		background:#f4f4f4;
	
	}
     .loca_header{
     	width: 100vw;
     	height: 12vw;
     	background-image: linear-gradient(90deg,#0af,#0085ff);
        position: fixed;
        line-height: 11.75vw;
        color: white;
     }
     .loca_return{
     	position: absolute;
     	float: left;
     	font-size: 1.9rem;
     	display: inline;
     	left: 2vw;
     	top: 3vw;
     	color: white;
     }
     .loca_mid{
     	width: 62vw;
     	font-size: 1.3rem;
     	display: inline-block;
     	text-align: right;
     }
     .loca_add{
     	font-size: 1.1rem;
     	color: white;
        position: absolute;
        right: 7vw;
     	
     }
     .sear_loc{
     	background: white;
     	top: 12vw;
     	position: fixed;
     	height: 15vw;
     	width: 100vw;
     }
     
     .sear_click{
     	display: inline;
     	width: 15vw;
     	height: 15vw;
     	padding-left:9vw;
     	color: #555;
     }
     .sear_text{
     	box-sizing: border-box;
     	display: inline-block;
     	width: 76vw;
     	height: 15vw;
     	padding:2.666667vw 4vw;
     	position: relative;
     	color: #333333
     }
     .sear_text input{
     	width: 100%;
     	height: 100%;
     	text-indent: 10vw;
     	outline-style: none;
     	background: #DDDDDD;
     	border: none;
     }
     .sear_ico2{
     	position: absolute;
     	left: 8.5vw;
     	top: 6.2vw;
     }
     .i{
     	width: 100vw;
     	height: 27vw;
     }
     
     .now_loca{
     	width: 100vw;
     }
     .now_locaBox{
     	padding: 4vw 0 1.866667vw 4vw;
     	font-size: 1rem;
        color: #555;
        background: #DDDDDD;
       
     }
     .now_locaContent{
     	background: white;
     	text-align: left;
     	box-sizing: border-box;
     	padding: 0 4vw;
     	zoom: 1;
     }
     .now_locaContent:after{
     	content: '';
     	clear: both;
     	display: block;
     }
     .now_localText{
     	float: left;
     	display: inline-block;
     	font-size:1.3rem;
     	height: 11.8vw;
     	color: #333333;
     	max-width: 57vw;
     	overflow: hidden;
     	white-space:nowrap;
     	text-overflow:ellipsis;
     	line-height: 11.8vw;
     }
     .reset_loca{
     	float: right;
     	 height: 11.8vw;
     	display: inline-block;
     	width: 30vw;
     	text-align: right;
     	line-height: 11.8vw;
     	font-size: 1.2rem;
     	
     }
     
     .reset_loca span{
     	font-size: 1.18rem;
     	color: blue;
     }
     .loca_info{
     	background: white;
     	padding:2.5vw 4vw;
     }
     .info_name{
     	font-size:1.2rem;
     	font-weight: 600;
     }
     .info_addr{
     	margin-top: 1vw;
     }
</style>