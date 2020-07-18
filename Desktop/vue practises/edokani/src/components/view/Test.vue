<template>
    <div>
        <!-- JSX -->
        <p>Your name is: </p>
        <input type="text" :value="$route.params.id"/>   
    </div>
</template>
<script>
// JS
export default {
    
}
</script>
<style>
/* CSS */
p {color: #58bc58;}
</style>