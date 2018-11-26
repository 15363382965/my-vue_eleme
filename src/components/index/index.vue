<template>
	<section>
		 <v-header></v-header>
		  <v-nav></v-nav>
		  <v-activities></v-activities>
		  <v-seller></v-seller>
		  <v-produce></v-produce>
		  <v-footer></v-footer>
		  <router-view></router-view>
	</section>
</template>

<script>
	import header from '../index/header.vue'
	import nav from '../index/nav.vue'
	import activities from '../index/activities.vue'
	import seller from '../index/seller.vue'
	import produce from '../index/produce.vue'
	import footer from '../index/footer.vue'
    
	
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

<style>
</style>