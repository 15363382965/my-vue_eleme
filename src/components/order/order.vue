<template>
	<section>
		<div class="order_header">
			<div class="el-icon-arrow-left order_ico" @click="toIndex()"></div>
			<div class="header_content">订单</div>
		</div>
		<div class="none"></div>
		<router-link class="orderList" v-for="(v,i) in orderList" :to="'/order/'+v.router">
			<div class="order_info">
				<router-link class="order_infoImg" :to="'/'+v.router">
					<img :src=v.src />
				</router-link>
		        <div class="info_right">
			   	  <div class="info_name">
			   	  	<div class="info_title">
			   	  		<router-link class="info_titleText" :to="'/'+v.router">
			   	  			<span class="info_titleText1">{{v.produceName}}</span>
			   	  			<span class="info_titleIco el-icon-arrow-right"></span>
			   	  		</router-link>
			   	  		<p class="info_statu">{{v.orderStatu}}</p>
			   	  	</div>
			   	  	<p class="info_time">{{v.orderTime}}</p>
			   	  </div>
			   	  <div class="info_food">
			   	  	<div class="info_foodName">
			   	  		<span class="info_foodName1">
			   	  			<span v-for="(v,i) in orderList[i].orderContent" class="info_foodName2">{{v}}</span>
			   	  		</span>
			   	
			   	  	</div>
			   	  	<div class="info_foodPrice">{{v.price}}</div>
			   	  </div>
			   </div>
			</div>
			<div class="order_operate">
				<button class="operate_button1" v-for="(v,i) in orderList[i].orderOperate" :style="'color:'+v.color">{{v.foodName}}</button>		
			</div>
		</router-link>
	</section>
</template>

<script>
	import '../../assets/css/order_info.css'
   export default{
   	methods:{
   		  toIndex(){
   			this.$router.push('/index');
   		}
   	},
   	  data(){
   	  	return{
   	  		orderList:[
   	  		   {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order1.png",
   	  		   	 produceName:"美味源快餐",
   	  		   	 orderStatu:"正在配送中",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"19.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   },
   	  		    {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order2.png",
   	  		   	 produceName:"味佳基",
   	  		   	 orderStatu:"订单已送达",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"14.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"blue",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   },
   	  		    {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order3.png",
   	  		   	 produceName:"delicious餐厅",
   	  		   	 orderStatu:"订单已送达",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"34.00",
   	  		   	  orderOperate:[
   	  		   	    {color:"blue",foodName:"评价得金币"},
   	  		   	    {color:"green",foodName:"确认收货"},
   	  		   	 ]
   	  		   },
   	  		   {
   	  		    router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order4.png",
   	  		   	 produceName:"潮鑫汤饭",
   	  		   	 orderStatu:"正在配送中",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"7.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   	 
   	  		   },
   	  		    {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order1.png",
   	  		   	 produceName:"美味源快餐",
   	  		   	 orderStatu:"正在配送中",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"19.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   },
   	  		    {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order2.png",
   	  		   	 produceName:"味佳基",
   	  		   	 orderStatu:"订单已送达",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"14.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"blue",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   },
   	  		    {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order3.png",
   	  		   	 produceName:"delicious餐厅",
   	  		   	 orderStatu:"订单已送达",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"34.00",
   	  		   	  orderOperate:[
   	  		   	    {color:"blue",foodName:"评价得金币"},
   	  		   	    {color:"green",foodName:"确认收货"},
   	  		   	 ]
   	  		   },
   	  		   {
   	  		    router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order4.png",
   	  		   	 produceName:"潮鑫汤饭",
   	  		   	 orderStatu:"正在配送中",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"7.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   	 
   	  		   },
   	  		    {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order1.png",
   	  		   	 produceName:"美味源快餐",
   	  		   	 orderStatu:"正在配送中",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"19.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   },
   	  		    {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order2.png",
   	  		   	 produceName:"味佳基",
   	  		   	 orderStatu:"订单已送达",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"14.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"blue",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   },
   	  		    {
   	  		   	 router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order3.png",
   	  		   	 produceName:"delicious餐厅",
   	  		   	 orderStatu:"订单已送达",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"34.00",
   	  		   	  orderOperate:[
   	  		   	    {color:"blue",foodName:"评价得金币"},
   	  		   	    {color:"green",foodName:"确认收货"},
   	  		   	 ]
   	  		   },
   	  		   {
   	  		    router:"meiWeiYuan",
   	  		   	 src:"./src/assets/images/order4.png",
   	  		   	 produceName:"潮鑫汤饭",
   	  		   	 orderStatu:"正在配送中",
   	  		   	 orderTime:"2018-11-17 19:04",
   	  		   	 orderContent:["特色猪杂汤饭","可乐","辣翅汉堡"],
   	  		   	 price:"7.00",
   	  		   	 orderOperate:[
   	  		   	    {color:"",foodName:"评价得金币"},
   	  		   	    {color:"red",foodName:"再来一单"}
   	  		   	 ]
   	  		   	 
   	  		   }
   	  		]
   	  	}
   	  }
   	
   }
</script>
<style scoped="">
	section{
		background: lightgrey;
	}
</style>