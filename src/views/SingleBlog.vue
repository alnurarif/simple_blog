<script setup>
import SingleBlogSection from '../components/SingleBlogSection.vue';
import CategoriesSection from '../components/CategoriesSection.vue';
import {useRoute} from 'vue-router';  
import { onMounted, ref } from 'vue';
import axios from 'axios';

const route  = useRoute();
let {blog_id}   = route.params;


const blog = ref({})

onMounted(() => {
    
    axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${blog_id}`).then(res => {
        blog.value = res.data
    })
})





</script>

<template>
  
    <CategoriesSection/>
    <SingleBlogSection  :blog="blog"  :category_id="category_id"/>
    

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