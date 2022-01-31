

<template>
    <input @change="handleChange"/>
</template>

<script setup lang="ts">

const handleChange = () => {
    console.log("changed");
}

</script>
