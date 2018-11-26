<template>
	<div class="acti">
		<div class="vip">
			<div class="vip_left">
				<span class="vip_leftText1">超级会员</span>
				<span class="vip_leftText2">
					已为我节省
					<span>62</span>
					元
				</span>
			</div>
			<router-link to="/vip" class="vip_right">下单即可获得奖励金</router-link>
		</div>
		<div class="special">
			<div class="special_box">
				<router-link v-for="(v,i) in specialList" :to="'/special_'+v.links" class="special_block">
					<h3 class="special_tittle">{{v.title}}</h3>
					<div class="special_content">{{v.content}}</div>
					<div class="special_route">{{v.route}}</div>
					<img :src="'./src/assets/images/vip_'+(i+2)+'.png'" />
				</router-link>
			</div>
		</div>
		<div class="banner">
			<mt-swipe :auto="5000">
       <mt-swipe-item><img src="../../../dist/banner_1.png"></mt-swipe-item>
       <mt-swipe-item><img src="../../../dist/banner_2.png"></mt-swipe-item>
       <mt-swipe-item><img src="../../../dist/banner_3.png"></mt-swipe-item>
       <mt-swipe-item><img src="../../../dist/banner_4.png"></mt-swipe-item>
          </mt-swipe>
		</div>
		<div class="sellerSev">
			推荐商家
		</div>
		
		</div>
  
</template>

<script>
	
	export default{
		data(){
			return {
				specialList:[
				 {links:"link1",title:'品质套餐',content:'搭配齐全吃得好',route:'立即抢购  >',src:'./src/assets/logo.png'},
				 {links:"link2",title:'限量抢购',content:'超值美味 9.9元起',route:'532人正在抢  >',src:'./src/assets/logo.png'}
				]
			}
		}
	}
</script>

<style scoped=''>
	.sellerSev{
		height: 9.6vw;
		font-size: 1.15rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2vw;
	}
	.sellerSev:before{
		content: '';
		height: 0.26vw;
		width: 5.4vw;
		background-color: #999;
		display: block;
		margin-right: 3.5vw;
	}
	.sellerSev:after{
		content: '';
		height: 0.26vw;
		width: 5.4vw;
		background-color: #999;
		display: block;
		margin-left: 3.5vw;
	}
	.acti{
      
		padding: 0 2.6%;
	}
	.vip{
		display: flex;
		margin-top: 10px;
		align-items:center;
		justify-content:space-between;
		height: 10.5vw;
		margin-bottom: 1.1vw;
		border-radius: 0.5vw;
		background-image: linear-gradient(90deg,#ffefc4,#f3dda0);
         background-size: 100%;
         padding: 0 2.6vw 0 4vw;
        color: #644f1b;
        line-height: 10.5vw;
	}
	.vip img{
		width: 4.5vw;
		height: 4.5vw;
		margin-right: 2vw;
	}
	.vip_leftText1{
		font-weight: 700;
		font-size:1.1rem;
		position: relative;
		margin-right: 25px;
	}
	.vip_leftText2{
		font-size:0.7rem;
	}
	.vip_leftText1:after{
		position: absolute;
		margin-left: 13px;
		top: 58%;
		content: '';
		width: 0.6vw;
		height: 0.6vw;
		background: #644F1B;
		border-radius: 50px;
	}
	.vip_leftText2 span{
		font-size: 0.85rem;
		font-weight: 600;
	}
	
	.vip_right{
		outline: none;
		outline-style: none;
		font-size: 0.7rem;
		color: #644f1b;
		height: 100%;
	}
	.vip_right:after{
		content: '>';
		margin-left: 20px;
		
	}
	.special{
		background: white;
	}
	.special_box{
		display: flex;
		margin-bottom: 0.8%;
		align-items: center;
		align-content: space-between;
		
	}
	.special_block{
		width: 50%;
		position: relative;
		display: inline-block;
		margin: 0.8%;
		height: 37.5vw;
		padding: 3.2% 0 0 4%;
		background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
	}
	.special_tittle{
		font-size: 1.2rem;
	    font-weight: 700;
	    margin-bottom: 1.333333vw;
	    color: #333;
	}
	.special_content{
		font-size: 1rem;
	    color: #777;
	    margin-bottom: 2.4vw;

	}
	.special_route{
		font-size: .9rem;
	    color: #af8260;
	    font-weight: 700;
	}
	.special_block img{
		position: absolute;
	    right: 0;
	    bottom: 0.2vw;
	    width: 31vw;
	    height: 21.333333vw;
	}
	.banner{
		margin-top: 1.3vw;
		height:23.5vw;
	}
	.banner img{
		height: 100%;
		
	}
	
	.mint-swipe-indicator{
		width: 2.4vw !important;
		height: 0.4vw !important;
		border-radius: 0 !important;
	}
</style>