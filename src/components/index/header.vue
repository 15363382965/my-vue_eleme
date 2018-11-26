<template>
	
	 <div class="header">
         <div class="location">
             <router-link class="location_box" to="/location">
             	<svg class=" location_ico">
             		<path style="fill:white;" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
             	</svg>
             	<span class="location_content">广州黄埔区加速器开发区E1栋506</span>
             	<svg class="location_ico">
             		<path style="fill:white;" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
             	</svg>
             </router-link>
         </div>
         <div class="search">
          	<div class="search_box">
             <router-link class="search_smallBox" to="/search">
             	 <span class="search_ico el-icon-search"></span>
             	 <span class="search_content">搜索饿了么商家、商品名称</span>
             </router-link>
            </div>
         </div>   
        <!--<router-view></router-view>-->
     </div>
   
  </div>
</template>

<script>
	
	export default{
		
	}
</script>

<style scoped>
  .location{
  	    background-image: linear-gradient(90deg,#0af,#0085ff);
  	    color: white;
  	    padding: 2.6vw 3.7vw 0;
  	   
  }
  .location_box{
  	color: white;
  	  width: 60%;
  	  display: inline-block;
  	  padding: 1.5% 0;
  	  letter-spacing: 2.5px;
  }
  .location_content{
  	margin: 0 1.3%;
  	font-size: 1.2rem;
  	font-weight: 700;
     max-width: 80%;
  	white-space: nowrap;
  	overflow: hidden;
  	text-overflow: ellipsis;
  	display: inline-block;
  }
  .location_ico{
  	width: 3.466667vw;
  	height: 4.13vw;
  }
  .search{
  	position: sticky;
   /*是一个css3的新的属性，是relative还有fixed的结合体（当不超过页面的大小的时候就是relative，否则就是fixed属性）*/
  	top: 0px;
  	z-index: 99999444444444444444444;
  	 background-image: linear-gradient(90deg,#0af,#0085ff);

  	 zoom: 1;
  	
  }
  
  .search_box{
  overflow: hidden;
  padding:2% 3.8%;
  display: block;	
  }
  .search_smallBox{
  	width: 100%;
  	display: block;
  	height: 100px;
  	background: white;
  	text-align: center;
  	line-height: 100px;
  	color: #999;
  	font-family: "楷体";
  	letter-spacing: -1px;
  	margin-top: -1%;
  }
</style>
