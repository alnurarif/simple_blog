<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';


const categories = ref([])
onMounted(() => {
    // https://basic-blog.teamrabbil.com/api/post-categories
    // https://basic-blog.teamrabbil.com/api/post-list/2
    // https://basic-blog.teamrabbil.com/api/post-newest
    // https://basic-blog.teamrabbil.com/api/post-details/1

    
    axios.get('https://basic-blog.teamrabbil.com/api/post-categories').then(res => {
        categories.value = res.data
    })
})
</script>

<template>
    <div style="display:block; height:60px;margin-bottom: 10px">
        <p class="category_link" v-for="category,index in categories" :key="category.id"><RouterLink :to="`/category/${category.id}`">{{category.name}}</RouterLink></p>
    </div>
</template>


<style scoped>

</style>