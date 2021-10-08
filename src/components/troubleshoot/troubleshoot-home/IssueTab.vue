<template>
    <div v-if="isSelected">
        <h2>sup</h2>
    </div>
</template>

<script>
export default {
    props: {
        isSelected: {
            type: Boolean
        }
    }
}


</script>

<style scoped>

</style>