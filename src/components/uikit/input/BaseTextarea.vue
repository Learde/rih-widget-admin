<script setup>
defineProps({
    placeholder: {
        type: String,
        default: "",
    },
});
</script>

<template>
    <div class="wrapper">
        <textarea class="input" :placeholder="placeholder" />
    </div>
</template>

<style lang="scss" scoped>
.input {
    width: 100%;
    height: 60px;
    padding: 12.5px 12px;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: var(--c-text);
    caret-color: var(--c-primary);
    resize: vertical;
    background-color: var(--c-gray-4);
    border: 1px solid rgb(0 0 0 / 12%);
    border-radius: 10px;
    outline: none;

    &::placeholder {
        font-family: Roboto, sans-serif;
        color: var(--c-gray-5);
        opacity: 1;
    }
}

.icon {
    position: absolute;
    top: 50%;
    left: 11px;
    width: 12px;
    height: auto;
    color: var(--c-gray-5);
    transform: translateY(-50%);
}

.wrapper {
    position: relative;
}
</style>
