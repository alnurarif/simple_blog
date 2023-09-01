<script setup>
import Blogs from '../components/Blogs.vue';
import CategoriesSection from '../components/CategoriesSection.vue';

</script>

<template>
  
    <CategoriesSection/>
    <Blogs/>
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