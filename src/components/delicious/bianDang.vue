<template>
	<section>
		<router-link v-for="(v,i) in produceList" :to="'/seller/'+v.router" class="seller">
			<div class="produce_top">
				<div class="pro_top_img">
				  <div class="produce_img">
			      <img :src="'./src/assets/images/produce_'+i+'.png'"  />
			      </div>
				</div>
				<div class="produce_top_right">
					<div class="top_rightText1">
					 	<h3 class="sellerName">{{v.name}}</h3>
					    <span class="searchClick" @click="dislike(i)">···</span>
					</div>
					<div class="top_rightText2">
					 	<div class="xingxing">
					 		<span class="el-icon-star-off" style="color: gold;"></span>
					 		<span class="el-icon-star-off" style="color: gold;"></span>
					 		<span class="el-icon-star-off" style="color: gold;"></span>
					 		<span class="el-icon-star-off" style="color: gold;"></span>
					 		<span class="el-icon-star-off" style="color: gold;"></span>
					 	</div>
					 	<span class="scroce">{{v.score}}</span>
					    <span class="sellNum">月售{{v.sellNum}}份</span>
					</div>
					<div class="top_rightText3">
						<div class="top_rightText3_left">
						  <span class="sendTerm">￥{{v.sellTerm}}元起送</span>
					      <span class="sendPrice">{{v.sendPrice}}</span>
						</div>
						<div class="top_rightText3_right">
						  <span class="range">{{v.distance}}</span>
					      <span class="sendTime">{{v.sendTime}}</span>
						</div>
					</div>
					
				</div>
			</div>
			<div class="produce_bottom">
				<div class="bottom_text1">
					<span class="tag1"  v-for="(v,i) in produceList[i].tags">{{v}}</span>
				</div>
				<div class="bottom_text2">
				  <div class="bottom_text2Left">
				  	
					<div class="activ" v-for="(v,i) in produceList[i].active">
						
						<span class="activ_type">{{v.type}}</span>
						<span class="activ_content">{{v.content}}</span>
					</div>
				</div>
				  <div class="nav_bottomRight" @click="toShowList(i)">
				  	<span class="activNum">{{produceList[i].active.length}}</span>个活动
				  	<span class="activ_click el-icon-caret-bottom"></span>
				  	  
				  </div>
				</div>
			</div>
				<div class="disLike" @click="dislike(i)">
						<div class="disLikeContent">不喜欢{{typeof (i)}}</div>		
				</div>
		</router-link>
		<router-view></router-view>
	</section>
</template>
<script>
	import "../../assets/css/produce.css"
	
	export default{
		methods:{
			dislike(a){
				$('.disLike').eq(a).fadeToggle(200);
			},
			toShowList(a){
				var activeNum=$('.bottom_text2Left').eq(a).children('.activ').length;
				if(activeNum-2>0){
					for(var i=2;i<activeNum;i++){
						$('.bottom_text2Left').eq(a).children('.activ').eq(i).slideToggle(200);
					}
				}
			},
			
		},
		data(){
			return{
				mag:'rerere',
				produceList:[
				  {
				  	router:"niuHua",
				  	leftImg:"./../assets/images/banner3.jpg",
				  	name:"牛华粉面店",
				  	score:"4.2",
				  	sellNum:"121212",
				  	sellTerm:"12",
				  	sendPrice:"免费送费",
				  	distance:"1.4km",
				  	sendTime:"38分钟",
				  	tags:["米粉面馆","最近光顾"],
				  	active:[
				  	  {type:"减",content:"满15减5，满25减6"},
				  	  {type:"换",content:"超值换购"},
				  	  {type:"首",content:"新用户下单立减15元"},
				  	  {type:"保",content:"该商户食品安全已经国泰产险承担，请放心食用！"}
				  	]
				  },
				  {
				  	router:"maiDangLao",
				  	leftImg:"./../assets/images/banner3.jpg",
				  	name:"广州麦当劳开元大道东翠城分店",
				  	score:"4.2",
				  	sellNum:"121212",
				  	sellTerm:"12",
				  	sendPrice:"配送费￥10",
				  	distance:"1.4km",
				  	sendTime:"68分钟",
				  	tags:["汉堡"],
				  	active:[
				  	  {type:"减",content:"满15减5，满25减6"},
				  	  {type:"换",content:"超值换购"},
				  	  {type:"首",content:"满15减5，满25减6"},
				  	  {type:"减",content:"新用户下单立减15元"},
				  	  {type:"保",content:"该商户食品安全已经国泰产险承担，请放心食用！"}
				  	]
				  },
				  {
				  	router:"jiaoLeZhiJi",
				  	leftImg:"./../assets/images/banner3.jpg",
				  	name:"叫了只鸡",
				  	score:"4.5",
				  	sellNum:"1212",
				  	sellTerm:"40",
				  	sendPrice:"配送费￥6",
				  	distance:"0.8km",
				  	sendTime:"47分钟",
				  	tags:["炸鸡炸串"],
				  	active:[
				  	  {type:"减",content:"满15减5，满25减6"},
				  	  {type:"换",content:"超值换购"},
				  	  {type:"首",content:"满15减5，满25减6"},
				  	  {type:"减",content:"新用户下单立减15元"},
				  	  {type:"保",content:"该商户食品安全已经国泰产险承担，请放心食用！"},
				  	  {type:"折",content:"单品折扣"},
				  	  {type:"特",content:"单品定价"},
				  	  {type:"折",content:"单品折扣"},
				  	  {type:"折",content:"单品折扣"},
				  	  {type:"减",content:"新用户下单立减15元"},
				  	  {type:"特",content:"单品定价"},
				  	  {type:"特",content:"单品定价"},
				  	  {type:"特",content:"单品定价"},
				  	  {type:"特",content:"单品定价"}
				  	 
				  	]
				  }
				]
			}
		}
		
		
		
	}
</script>
<style>
</style>