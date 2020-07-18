<template>
    <div v-if="!loading" class="col-md-8 p-5 card">
        <div v-if="item">
            <strong><h2>{{ item.title }}</h2></strong>
            <hr>
            <div class="row">
                <div class="col-md-4">
                    <img class="img img-fluid" :src="item.photo"/>
                </div>
                <div class="col-md-8">
                    <p>{{ item.description }}</p>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-4">
                    <strong><h3>{{ item.price }}</h3></strong>
                </div>
                <div class="col-md-8">
                    <button @click="sendToCart" class="btn btn-primary float-right">Add to cart</button>
                </div>
            </div>
        </div>
    </div>

    <div v-else class="col-md-8 p-5 card">
        <div class="row justify-content-center align-items-center">
            <div class="alert alert-info">
                <h3>Loading...</h3>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default
{
    data()
    {
        return {
            loading: true,
            item: []
        }
    },
    mounted()
    {
        this.fetchItem()
    },
    methods: {
        fetchItem()
        {
            var self = this
            axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response => {
                setTimeout(() => {
                    self.item = response.data
                    this.loading = false
                }, 1000);
            })
        },
        sendToCart(item)
        {
            this.$store.commit('addToCart', this.item)
        }
    },
    computed: {
        
    },
}
</script>