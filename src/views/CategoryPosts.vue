<script setup>
import CategoryBlogs from '../components/CategoryBlogs.vue';
import CategoriesSection from '../components/CategoriesSection.vue';
import {useRoute} from 'vue-router';  
import { onMounted, ref, watch } from 'vue';
import axios from 'axios';

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



const route  = useRoute();
let {category_id}   = route.params;

// watch works directly on a ref
// watch(route, async (newCategoryId, oldCategoryId) => {
//   let {category_id}  = newCategoryId
//   console.log(newCategoryId, oldCategoryId)
//   axios.get('https://basic-blog.teamrabbil.com/api/post-categories').then(res => {
//         categories.value = res.data
//     })
// })

watch(route, (newValue, oldValue) => { console.log(newValue, oldValue)});

</script>

<template>
  
    <CategoriesSection/>
    <CategoryBlogs :categories="categories"  :category_id="category_id"/>
    <!-- <SingleBlogSection /> -->
    

</template>

<style>

.category_link{
  float: left;
  text-decoration: underline;
  display: block;
  padding: 5px 10px;
  font-weight: bold;
}
.title_header { 
  margin-bottom: 20px;
}
.article h2{
  margin-bottom : 10px
}
.detail{
  padding: 0px 15px;
}
.detail .short{
  margin-bottom: 10px;
}
.detail .published{
  margin-bottom: 10px;
}   
</style>