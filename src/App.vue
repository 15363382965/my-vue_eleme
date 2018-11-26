<template>
  <div id="app">
 
  <!--<!--<v-header></v-header>
  <v-nav></v-nav>
  <v-activities></v-activities>
  <v-seller></v-seller>
  <v-produce></v-produce>-->

  <!--<v-footer></v-footer>-->
  <router-view></router-view>
  
  </div>

</template>


<script>
	import header from './components/index/header.vue'
	import nav from './components/index/nav.vue'
	import activities from './components/index/activities.vue'
	import seller from './components/index/seller.vue'
	import produce from './components/index/produce.vue'
	import footer from './components/index/footer.vue'
	
	import jq from './assets/js/jquery-1.11.1.min.js'
	
export default {
  data () {
    return {
    }
  },
  components:{
  	'v-header':header,
  	 'v-nav':nav,
  	 'v-activities':activities,
  	 'v-seller':seller,
  	 'v-produce':produce,
  	 'v-footer':footer
  	 
  	
  }
}

</script>

