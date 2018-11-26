<template>
	<section>
		<div class="seIn_header">
			<div class="seIn_box">
				<div class="seIn_headerBg">
					<a class="seInfo_return" @click="toReturn()"></a>
				</div>
				<div class="seIn_headerContent">
					<div class="seInContentBox1">
							<span class="headerImg_content">品牌</span>
					        <img class="headerImg"  src="../../assets/images/huaLaiShi_ico.png"/>
					</div>
					<div class="seInContentBox2">
						<h2 class="seInContentBox2_h2">
							<span class="h2-content">华莱士(萝岗火村店)</span>
							<span class="seInIco"></span>
						</h2>
						<div class="seInContentBox3">
						<span class="seInContentBox3_text">评价3.4分</span>
						<span class="seInContentBox3_text">月售也333单</span>
						<span class="seInContentBox3_text">商家配送约34分钟</span>
					</div>
					</div>
					
					<div class="seInContentBox4">
							<div class="box4_active_left">
									<span class="jianman">减满</span>
							         <span class="jianman_Content">满29减12，满45减23</span>
							</div>
							<div class="box4_active_right">
								<span class="activeNum">20个优惠</span>
								<span class="ativeIco"></span>
							</div>
						
					</div>
					<p class="seInContentBox5">公告：欢迎光临，用餐高峰期请提前下单，谢谢。</p>
				</div>
			</div>
		</div>
		<div class="header_nav">
			<div class="header_navBox">
				<a class="header_navContent header_navContentActive">点餐</a >
				<a class="header_navContent">评价</a >
				<a class="header_navContent">商家</a >
			</div>
		</div>
		<div class="img">
			<img src="../../assets/images/huaLaiShi_active.png" />
		</div>
		<div class="sevice">
			<p class="sevice_content">商家推荐</p>
			<div class="sevice_nav">
				<div class="sevice_nav1" v-for="(v,i) in sellServi">
					<img class="nav_img" :src="v.src"/>
					<div class="imgContent">
						<p class="imgContent1">{{v.name}}</p>
						<p class="imgContent2">月售{{v.monthSel}}份  好评率{{v.commo}}</p>
					</div>
					<div class="nav_bottom">
						<p class="nav_bottom_price"><small>￥</small>{{v.price}}<span class="nav_bottomQi">起</span></p>
						<span class="nav_bottomIco el-icon-circle-plus"></span>
					</div>
					
				</div>
			</div>
		</div>
		<div class="nav_food">
			<div class="nav_foodBox">
				<div class="nav_foodBox1">
					<main class="nav_foodBoxAll">
						<div class="nav_foodLeft">
							<ul class="nav_fooddUl">
								<li class="nav_foodLi" v-for="(v,i) in activieType">
									<img :src=v.src v-show="v.toShow"/>
									<span class="nav_foodLiContent">{{v.content}}</span>
								</li>
							</ul>
						</div>
						<div class="nav_foodRight">
							<div class="nav_foodRigtBox">
								<dl class="foodRightDl" v-for="(v,i) in dataList">
									<dt class="foodRightDl_dt">
										<strong>{{v.dataType}}</strong>
									    <span class="foodRightDl_dt1">{{v.dataTitle}}</span>
									</dt>
									<dd class="foodRightDd" v-for="(v,i) in dataList[i].produce">
										<div class="foodRightDdBox">
											<span class="foodRightDdImg">
												<span class="foodRightFont">招牌</span>
												<img :src=v.src />
											</span>
											<section class="foodRightDdContent">
												<p class="foodRightDdContent1">{{v.proTitle}}</p>
												<p class="foodRightDdContent2">
													<span>月售{{v.monthSell}}份</span>
													<span>好评率{{v.comments}}</span>
												</p>
												<div class="foodRightDdContent3">
													<span class="foodRightDdContent3_left">{{v.discount}}折</span>
													<span class="foodRightDdContent3_right">每单限{{v.fenshu}}份优惠</span>
												</div>
												<div class="foodRightDdContent4">
													 <span class="content1">¥{{v.afteDisc}}</span>
													 <del class="content2">¥{{v.befoDisc}}</del>
												</div>
												<div class="foodRightDdContent5 el-icon-circle-plus">
												</div>
											</section>
										</div>
									</dd>
									
								</dl>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import '../../assets/css/seInfo.css'
	export default{
		data(){
			return{
				dataList:[
				    {
				       dataType:"热销",
				       dataTitle:"大家喜欢吃，才叫真好吃。",
				       produce:[
				         {
				       	   src:"./src/assets/images/hualaishi01.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/produce_1.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/hualaishi02.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/hualaishi03.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        }
				      
				     ]
				    },
				     {
				       dataType:"优惠",
				       dataTitle:"美味又实惠，大家都爱吃。",
				       produce:[
				         {
				       	   src:"./src/assets/images/hualaishi04.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/produce_1.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/produce_0.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/produce_1.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        }
				      
				     ]
				    },
				     {
				       dataType:"特惠爆款",
				       dataTitle:"美味又实惠，大家都爱吃。",
				       produce:[
				         {
				       	   src:"./src/assets/images/produce_2.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/produce_0.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/hualaishi03.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        },
				         {
				       	   src:"./src/assets/images/hualaishi04.png",
					       proTitle:"11.8元周年庆套餐sdsdsdsssssssssssssssss",
					       monthSell:"5654",
					       comments:"98%",
					       discount:"4.6",
					       fenshu:"2",
					       befoDisc:"18.8",
					       afteDisc:"8.8"
				        }
				      
				     ]
				    }
				   
				],
				activieType:[
				{
				   content:"热销",
				   toShow:true,
				   src:"./src/assets/images/nav_foodLeftIco1.png"
				},
				{
				   content:"优惠",
				   toShow:true,
				   src:"./src/assets/images/nav_foodLeftIco2.png"
				},
				{
				   content:"特惠爆款",
				   toShow:false,
				},
				{
				   content:"新品推荐",
				   toShow:false,
				},
				{
				   content:"经典主食",
				   toShow:false,
				},
				{
				   content:"经典小吃",
				   toShow:false,
				},
				{
				   content:"超值套餐",
				   toShow:false,
				},
				{
				   content:"至尊套餐",
				   toShow:false,
				},
				{
				   content:"精选饮品",
				   toShow:false,
				},
				{
				   content:"超值12元套餐",
				   toShow:false,
				},
				{
				   content:"超值单人套餐",
				   toShow:false,
				},
				{
				   content:"超值双人套餐",
				   toShow:false,
				},
				{
				   content:"热销",
				   toShow:true,
				   src:"./src/assets/images/nav_foodLeftIco1.png"
				},
				{
				   content:"优惠",
				   toShow:true,
				   src:"./src/assets/images/nav_foodLeftIco2.png"
				},
				{
				   content:"特惠爆款",
				   toShow:false,
				},
				{
				   content:"新品推荐",
				   toShow:false,
				},
				{
				   content:"经典主食",
				   toShow:false,
				},
				{
				   content:"经典小吃",
				   toShow:false,
				},
				{
				   content:"超值套餐",
				   toShow:false,
				},
				{
				   content:"至尊套餐",
				   toShow:false,
				},
				{
				   content:"精选饮品",
				   toShow:false,
				},
				{
				   content:"超值12元套餐",
				   toShow:false,
				}
			],
			sellServi:[
			   {
				   src:"./src/assets/images/hlsNav1.png",
				   name:"热辣鸡排第二份半价",
				   monthSel:"9090",
				   commo:"89%",
				   price:"12"
				},  
				 {
				   src:"./src/assets/images/hlsNav2.png",
				   name:"11.8元周年庆套餐",
				   monthSel:"90",
				   commo:"100%",
				   price:"32"
				},  
				 {
				   src:"./src/assets/images/hlsNav3.png",
				   name:"超值单人套餐",
				   monthSel:"990",
				   commo:"98%",
				   price:"13"
				},  
				 {
				   src:"./src/assets/images/hlsNav4.png",
				   name:"超值双人套餐",
				   monthSel:"91",
				   commo:"100%",
				   price:"21"
				},  
				 {
				   src:"./src/assets/images/hlsNav1.png",
				   name:"热辣鸡排第二份半价",
				   monthSel:"9090",
				   commo:"89%",
				   price:"12"
				},  
				 {
				   src:"./src/assets/images/hlsNav2.png",
				   name:"热辣鸡排第二份半价",
				   monthSel:"9090",
				   commo:"89%",
				   price:"12"
				},  
				 {
				   src:"./src/assets/images/hlsNav3.png",
				   name:"热辣鸡排第二份半价",
				   monthSel:"9090",
				   commo:"89%",
				   price:"12"
				},  
				 {
				   src:"./src/assets/images/hlsNav4.png",
				   name:"热辣鸡排第二份半价",
				   monthSel:"9090",
				   commo:"89%",
				   price:"12"
				}
			]
			}
		},
		methods:{
			toReturn(){
				this.$router.push('/index')
			}
		}
	}
	
</script>

<style>
</style>