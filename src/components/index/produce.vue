<template>
	<section>
		<router-link v-for="(v,i) in produceList" :to=v.router class="seller">
			<div class="produce_top">
				<div class="pro_top_img">
				  <div class="produce_img">
			      <img :src=v.leftImg />
			      </div>
				</div>
				<div class="produce_top_right">
					<div class="top_rightText1">
					 	<h3 class="sellerName">{{v.name}}</h3>
					    <span class="searchClick" v-on:click:stop="dislike(i)">···</span>
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
				<div class="disLike" v-on:click:stop="dislike(i)">
						<div class="disLikeContent">不喜欢{{typeof (i)}}</div>		
				</div>
		</router-link>
		<router-view></router-view>
	</section>
</template>

<script>
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_1.png",
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_2.png",
				  	name:"华莱士",
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_3.png",
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
				  },
				   {
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_4.png",
				  	name:"华莱士",
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_5.png",
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_6.png",
				  	name:"华莱士",
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_7.png",
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
				  },
				   {
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_8.png",
				  	name:"华莱士",
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_9.png",
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_1.png",
				  	name:"华莱士",
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
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_5.png",
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
				  },
				   {
				  	router:"seInfo",
				  	leftImg:"./src/assets/images/nav_6.png",
				  	name:"华莱士",
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
				  }
				]
			}
		}
		
		
	}
	
</script>

<style scoped>
	
	.active{
		display: none;
	}
	.nav_bottomRight,.activNum,.activ_click{
		font-size: 0.75rem;
	}
	.seller{
		position: relative;
		border-bottom: 0.2vw solid #ddd;
		color: #666;
		padding: 4vw 0;
		line-height: normal;
		font-size: .9rem;
		margin-top: 1vw;
	}
	.disLike{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: black;
		opacity: 0.6;
		z-index: 10;
		display: none;
	}
	.disLikeContent{
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top:-7.5vw;
		margin-left:-7.5vw;
		width: 15vw;;
		height: 15vw;
		border-radius: 50%;
		color: #333;
		background: white;
		text-align: center;
		line-height:15vw;
		font-size: 1rem;
		font-weight: 600;
		font-family: "楷体";
	}
	.produce_top{
		align-items: center;
		float: left;
		padding: 0 2.7vw;
	}
	
	.pro_top_img{
		float: left;
		position: relative;
	}
	.produce_img{
		float: left;
		width: 17.5vw;
		height: 17.5vw;
		overflow: hidden;
	}
	.produce_img img{
		float: left;
		width: 100%;
		height: 100%;
		display: block;
		border: 0.13vw solid #333333;
		border-radius: 0.53vw;
	}
	.produce_top_right{	
		float: right;
	    width: 72.5vw;
	    margin-left: 2vw;
	    
	}
	
	.top_rightText1 h3{
		text-align: left;
		color: #333;
	    font-weight: 700;
	    font-size: 1.2rem;
	    overflow: hidden;
	    display: inline-block;
	}

	.top_rightText2{
		float: left;
		margin-top: 2.5vw;
		font-size: 0.6rem;
	}
	.xingxing{
		display: inline-block;
	}
	.xingxing img{
		display: inline-block;
		width: 15vw;
		height: 2vw;
	}
	.top_rightText2 span{
		display: inline-block;
        line-height: normal;
        color: #666666;
        font-size: 0.8rem;
	}
	.scroce{
		display: inline-block;
		margin-right: 1.1vw;
	}
	.searchClick{
		float: right;
		z-index: 90;
		background: white;
	}
	.top_rightText3{
		 width: 73.5vw;
		float: left;
		margin-top: 2vw;
		font-size: 0.8rem;
        line-height: normal;
        color: #666666;
        margin-bottom: 2vw;
	}
	.top_rightText3_left{
		display: inline-block;
		float: left;
	}
	.sendTerm:after{
		content: '|';
		margin: 0 .8vw;
        color: #ddd;
        margin-left: 1.2vw;
	}
	.top_rightText3_right{
		text-align: right;
	}
	.produce_bottom{
		float: right;
		width:73vw;
		margin-right: 4vw;
	}
	.bottom_text1:after{
		content: "";
		height: 0.1vw;
		background: #666;
		display: block;
		margin-top:4.5vw; ;
	}
	.bottom_text1 span{
		border:0.1vw solid #666666;
		padding: 0 1.066667vw;
		margin-right: 1.333333vw;
	    margin-bottom: 1.066667vw;
	    font-size: 0.84rem;
	}
	.bottom_text2{
		margin-top: 2vw;
		
	}
	.sendPrice,.sendTerm,.sendTime{
		font-size: 0.8rem;
	}
	.bottom_text2Left{
		font-size: 0.91rem;
		float: left;
		text-align: left;
	}
	.nav_bottomRight{
		display: inline-block;
		text-align: right;
		float: right;
		z-index: 90;
		
	}
	 .activ_type{
		width: 7.5vw;
		height: 7.5vw;
		padding: 3px;
		border: 1px solid rosybrown;
		font-size: 0.8rem;
		background: rgb(240, 115, 115);
		margin-right: 1vw;
		border-radius: 0.7vw;
	}
	.activ_content{
		font-size: 0.78rem;
	}
	.top_rightText3_right{
		font-size: 0.85rem;
	}
	.range{
		font-size: 0.75rem;
	}
	.activ{
		margin-bottom: 3vw;
		white-space: nowrap;
	    text-overflow: ellipsis;
	    vertical-align: middle;
	     width: 51vw;
	     overflow: hidden;
	}
</style>