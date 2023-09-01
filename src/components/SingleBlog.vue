<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const singleBlog = ref({})

onMounted(() => {
    axios.get('https://basic-blog.teamrabbil.com/api/post-details/53').then(res => {
        singleBlog.value = res.data
    })
})
</script>
<template>
    <main>
        <article>
            <h2>{{singleBlog?.title}}</h2>
            <p>Published on <time datetime="2023-09-01">September 1, 2023</time></p>
            <img :src="singleBlog.img" alt="Blog Post Image">
            <p>{{singleBlog.content}}</p>
        </article>
    </main>
</template>


<style scoped>

</style>