<template>
	<div class="col-md-3 border rounded p-3 sticky-top">
		<h3 class="center">Your shopping cart:</h3>
		<table class="table table-striped">
			<thead class="bg-primary">
				<tr class="border rounded text-white">
					<th scope="col">#</th>
					<th scope="col">Photo</th>
					<th scope="col">Name</th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in cart" :key="index">
					<th>{{ index + 1 }} <br> <button @click="sendRemoveReq(index)" class="btn btn-danger btn-sm">x</button></th>
					<td><img :src="item.photo" class="img rounded img-fluid" /></td>
					<td>{{ item.title }}</td>
					<td>{{ item.price }}</td>
				</tr>
			</tbody>
			<tr class="">
				<td colspan="2"><strong>Total</strong></td>
				<td colspan="2" class="text-center">৳ {{ totalPrice }}</td>
			</tr>
		
		</table>
	</div>
</template>

<script>
	export default
	{
		// props: ['cart'],
		computed:
		{
			totalPrice()
			{
				var total = 0;
				this.cart.forEach(item => {
					total += Math.round(parseFloat(item.price.replace('৳', '')));
				});
				return total;
			},
			cart()
			{
				return this.$store.getters.getCart
			}
		},
		methods:
		{
			sendRemoveReq(index)
			{
				// this.$emit('itemToRemove', index);
				this.$store.commit('removeFromCart', index)
			}
		}
	}
</script>

<style>

</style>