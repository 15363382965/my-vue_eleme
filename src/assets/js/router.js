import vueRouter from 'vue-router'

//引入自己所编写的组件
import loca from '../../components/index/location.vue'

import search from '../../components/index/search.vue'
import App from '../../../src/App.vue'
import index from '../../components/index/index.vue'
import delicious from '../../components/index/delicious.vue'
import showAll from '../../components/delicious/showAll.vue'
import bianDang from '../../components/delicious/bianDang.vue'
import order from '../../components/order/order.vue'
import seInfo from '../../components/seller/sellInfo.vue'




//到处缩写的内容

export default new vueRouter(
	{
	routes:[
	  {path:'/location',component:loca},
	  {path:'/search',component:search},
	  {path:'/index',component:index},
	  {		
	  	path:'/delicious',
	  	component:delicious,
	  	children:[
				{
					path:':id',
					component:showAll
				}
			]
	 },
	 {path:'/order',component:order},
	 {path:'/seInfo',component:seInfo},
	 {path:'/*',component:index} 
	]
}
)
