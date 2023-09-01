<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <header>
        <h1>My Blog</h1>
    </header>
    <nav>
        <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
        </ul>
    </nav>
    <main>
        <RouterView :key="$route.path"/>
    </main>
    <footer>
        <p>&copy; 2023 My Blog. All rights reserved.</p>
    </footer>
</template>

<style scoped>
</style>
