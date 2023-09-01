<script setup>
defineProps(['blog'])
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
    <article>
        <h2 class="title_header">{{blog?.postDetails?.title}}</h2>
        <div style="">
            <div>
                <img style="width:100%" :src="blog?.postDetails?.img" :alt="blog?.postDetails?.title">

            </div>
            <div class="detail">
                <p class="short">{{blog?.postDetails?.short}}</p>
                <p class="published">Published on <time datetime={{blog?.postDetails?.created_at}}>{{formattedDate(blog?.postDetails?.created_at)}}</time></p>
                <p>{{blog?.postDetails?.content}}</p>
            </div>
        </div>
    </article>
</template>


<style scoped>

</style>