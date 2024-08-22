
<template>
    <div class="card flex justify-center">
        <DatePicker v-model="date" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const date = ref();
</script>
