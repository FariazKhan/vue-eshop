<template>
	<div class="col-md-8 border rounded p-3">
	    <h3 class="text-center">Our products:</h3>
	    <div class="container-fluid">
	        <div v-if="!loading" class="row justify-content-center">
	            
	            <div class="card col-sm-3 ml-3 mb-2 p-0" v-for="(item, index) in items" :key="index">
	                <router-link tag="div" :to="{path: '/item/' + item.id}" style="text-decoration: none;">
						<img :src="item.photo" class="card-img-top" alt="The product image" title="Click to view details">
						<div class="card-body" title="Click to view details">
							<h5 class="card-title">{{ item.title }}</h5>
							<p class="card-text">{{ item.price }}</p>
						</div>
					</router-link>
	                <span @click="sendToCart(item)" class="post-btn btn btn-primary text-center">Add to cart</span>
	            </div>

	        </div>
			<div v-else class="row justify-content-center align-items-center">
				<div class="alert alert-info">
					<h3>Loading...</h3>
				</div>
			</div>
	    </div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default
	{
		// props: ['items'],
		data()
		{
			return {
				loading: true,
			}
		},
		computed:
		{
			items()
			{
				return this.$store.getters.getInventory
			}	
		},
		mounted()
		{
			this.fetchItems()	
		},
		methods:
		{
			sendToCart(item)
			{
				// this.$emit('newItemSent', item);
				this.$store.commit('addToCart', item)
			},
			fetchItems()
			{
				var self = this
				axios.get('http://localhost:3000/items').then(response => {
					setTimeout(() => {
						self.$store.commit('setInventory', response.data)
						self.loading = false
					}, 1000);
				})
			}
		}
	}
</script>

<style></style>