<template>
	<section>
		
		<div class="deli_header">
		   <div class="loca_return el-icon-arrow-left" @click="toReturn()"></div>
		   <h1 class="deli_headerContent">美食</h1>
		</div>
		<div class="ii"></div>
		<div class="deli_list">
			<ul>
				<li class="deliList_li"  v-for="(v,i) in deliList" @click="listClick(i)">
					 <router-link :to="'/delicious/'+v.route" class="deli_a">{{v.type}}</router-link>
				</li>
			</ul>
			<a class="deli_icoBox" >
				<div class="el-icon-arrow-down deli_ico"></div>
			</a>
		</div>
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
		<div class="iiii"></div>
		<router-view></router-view>
</section>
</template>

<script>
	import produce from '../index/produce.vue'
	export default{
		data(){
			return {
				deliList:[
				            {route:'showAll',type:"全部"},
				             {route:'bianDang',type:"简餐便当"},
				              {route:'mianShiZhouDian',type:"面食粥点"},
				               {route:'hanBao',type:"汉堡披萨"},
				                {route:'xiangGuoMaoCai',type:"香锅冒菜"},
				                 {route:'riHanLiaoLi',type:"日韩料理"},
				                  {route:'qingShiXiCan',type:"轻食西餐"},
				                   {route:'xiaoChiZhanChuan',type:"小吃炸串"},
				                    {route:'diFangCaiXi',type:"地方菜系"}
				        ]
			}
		},
		methods:{
			listClick(a){
				$('.deliList_li').eq(a).addClass('liActive').siblings('.deliList_li').removeClass('liActive')	
			},
			toReturn(){
				this.$router.push('/index')
			}
		},
		mounted(){
			$('.deliList_li').eq(0).addClass('liActive');
			this.$router.push('/delicious/showAll')
			
		}
	}
</script>

<style scoped>
	.produce_select{
	   position: sticky;
       z-index: 100;
   	   top: 165.76px;
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
	.produce_select{
		position: fixed !important;
		top: 24vw !important;
		z-index: 6666 !important;
		background: white !important;
	}
	 .deli_header{
	 	position: fixed;
	 	top: 0;
	 	left: 0;
	 	z-index: 999;
	 	height: 11.8vw;
	 	width: 100%;
	 	background-image: linear-gradient(90deg,#0af,#0085ff);
	 }
	 .loca_return{
     	position: absolute;
     	float: left;
     	font-size: 1.5rem;
     	display: inline;
     	left: 2vw;
     	top: 3.6vw;
     	color: white;
     }
     h1{
     	width: 100%;
     	text-align: center;
     	height: 11.8vw;
     	line-height: 11.8vw;
     	color: white;
     	font-size: 1.3rem;
     }
     .ii{
     	width: 100vw;
     	height: 10.85vw;
     }
     .iiii{
     	width: 100vw;
     	height: 24vw;
     }
     .deli_list{
     	position: fixed;
     	background-image: linear-gradient(90deg,#0af,#0085ff);
     	display: flex;
     	box-sizing: border-box;
     	z-index: 222;
      
     }
     .deli_list ul{
     	flex: 1;
     	height: 10.7vw;
     	padding-left: 4vw;
     	padding-bottom: 1.4vw;
     	overflow-x: scroll;
         white-space: nowrap;
       -webkit-box-flex: 1;
        border-top: 1vw solid white;
     }
     .deliList_li{
     	display: inline-block;
     	margin-right: 7.5vw;
     	padding: 3.5vw 0 2.5vw;
     	font-size: 1.05rem;
     	line-height: 1;
     	color: white;
     	opacity: 0.7;
     	
     }
      .deli_a{
     	color: white;
     }
     
     .liActive{
     	opacity: 1;
     	font-weight: 700;
     	border-bottom: 0.65vw solid white;
     }
     .deli_listIco{
     	width: 20vw;
     	position: relative;
     	border-radius:2vw;
     	border: 1px solid red;
     	height:100%;
     	background: blue;
     }
     .deli_listIco:before{
     	content: "";
     	display: block;
     	position: absolute;
     	left: -1vw;
     	width: 1vw;
     	height: 10vw;
     	top: 2vw;
     	background: dodgerblue;
     	
     }
     .liIco{
     	position: absolute;
     	right: 3.8vw;
     	top: 5vw;
     	font-size: 1.4rem;
     	color: white;
     }
     .deli_icoBox{
     	width: 12vw;
     	height: 11vw;
     	position: absolute;
     	left: 88vw;
     	background: dodgerblue;
     }
     .deli_ico{
     	color: white;
     	position: absolute;
     	top: 4.5vw;
     	right: 3.5vw;
     	font-size: 1.4rem;
     }
</style>