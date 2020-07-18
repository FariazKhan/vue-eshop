<template>
    <div id="app">
        <!-- <router-link class="btn btn-info" :to="{path: '/'}">Home</router-link>
        <router-link class="btn btn-success" :to="{path: '/test/1'}">Test 1</router-link>
        <router-link class="btn btn-success" :to="{path: '/test/2'}">Test 2</router-link>
        <router-link class="btn btn-success" :to="{path: '/test/3'}">Test 3</router-link> -->
        <navbar @searchKeyword="search"></navbar>
        
        <div class="container-fluid">
            
            <div class="row p-3">
                <router-view ></router-view>
                <!-- <inventory @newItemSent="addToCart" :items="items"></inventory> -->
                <div class="col-md-1"></div>
                <cart :cart="cart" @itemToRemove="removeCartItem"></cart>
            </div>
        </div>
    </div>

</template>

<script>
    import Navbar from '@/components/Navbar'
    import Inventory from '@/components/view/Inventory'
    import Cart from '@/components/Cart'
    import data from '@/data.js'

    export default 
    {
        components: 
        {
            Navbar,
            inventory: Inventory,
            cart: Cart,
        },
        data()
        {
            return {
                items: [],
                cart: []
            }
        },
        mounted()
        {
            this.items = data;
        },
        methods:
        {
            addToCart(item)
            {
                this.cart.push(item);
            },
            removeCartItem(item)
            {
                this.cart.splice(item, 1);
            },
            search(value)
            {
                this.items = data.filter(item => {
                    return item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
                });
            }
        }
    }
</script>

<style>
    .card-img-top
    {
        min-width: 100%;
    }
</style>
