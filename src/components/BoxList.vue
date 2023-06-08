<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent ({
        name: 'BoxList'
    })
</script>

<style scoped>
.box {
  background: #f0f0f0;
}
</style>