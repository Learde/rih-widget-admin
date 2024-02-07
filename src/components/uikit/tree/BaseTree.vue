<script setup>
import "@he-tree/vue/style/default.css";
import "@he-tree/vue/style/material-design.css";
import { Draggable } from "@he-tree/vue";
import { computed, onMounted, ref } from "vue";

const props = defineProps({ options: Array, treeRef: null });
const emit = defineEmits(["update:options", "update:treeRef"]);
const tree = ref(null);
const localOptions = computed({
    get() {
        return props.options;
    },
    set(value) {
        emit("update:options", value);
    },
});

onMounted(() => {
    emit("update:treeRef", tree.value);
});
</script>

<template>
    <Draggable
        class="base-tree"
        v-model="localOptions"
        ref="tree"
        tree-line
        :tree-line-offset="8"
        :indent="25"
    >
        <template #default="{ node, stat }">
            <slot name="default" :node="node" :stat="stat" />
        </template>
    </Draggable>
</template>

<style lang="scss">
.base-tree {
    & .tree-line {
        background: var(--c-gray-7);
    }

    & .tree-vline {
        width: 1px;
    }

    & .tree-hline {
        width: 8px;
        height: 1px;
    }

    & .tree-node-inner {
        padding: 10px 0;
    }
}
</style>
