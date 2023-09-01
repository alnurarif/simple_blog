<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
const props = defineProps(['categories','category_id'])
const blogs = ref([])

onMounted(() => {
axios.get(`https://basic-blog.teamrabbil.com/api/post-list/${props.category_id}`).then(res => {
        blogs.value = res.data
    })
})
const activeCategory = props.categories.find((category) => category.id == props.category_id)

const formattedDate = (date) =>  {
    // Parse the input date string
    const inputDateString = date;
    const inputDate = new Date(inputDateString);

    // Define the options for formatting
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Format the date
    const formattedDate = inputDate.toLocaleDateString('en-US', options);
    return formattedDate;
}

</script>

<template>
    <!-- <h1 style="text-align:center; margin:0px 10px; line-height:50px">{{props.category_id }} {{props.categories}} {{activeCategory?.name}}</h1> -->
    <article v-for="(blog, index) in blogs" :key="blog.id">
        <h2 class="title_header">{{blog.title}}</h2>
        <div style="display:flex">
            <div>
                <img style="width:100%" :src="blog.img" :alt="blog.title">

            </div>
            <div class="detail">
                <p class="short">{{blog.short}}</p>
                <p class="published">Published on <time datetime={{blog.created_at}}>{{formattedDate(blog.created_at)}}</time></p>
                <RouterLink class="read-more" :to="`/blog/${blog?.id}`">Read more</RouterLink>

            </div>
        </div>
    </article>
</template>


<style scoped>

</style>