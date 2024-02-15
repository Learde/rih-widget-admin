<script setup>
import { isArray } from "lodash";
import { computed } from "vue";

import { IconCheck } from "@/icones";

const props = defineProps({
    category: {
        type: Object,
        required: true,
    },
    hasBorder: {
        type: Boolean,
        default: true,
    },
    level: {
        type: Number,
        default: 0,
    },
    activeId: {
        type: [Number, String],
        default: null,
    },
    isParentActive: {
        type: Boolean,
        default: false,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
});

defineEmits(["click"]);

const hasChildren = computed(() => {
    return isArray(props.category.children) && props.category.children.length > 0;
});
const isActive = computed(() => {
    return props.isParentActive || props.activeId === props.category.id;
});
const itemIndent = computed(() => {
    return `${props.level * 30}px`;
});
</script>

<template>
    <div
        class="category-item"
        :class="{ loading: isLoading }"
        :style="{ marginLeft: itemIndent }"
        @click="$emit('click', category)"
    >
        <h3>{{ category.title }}</h3>
        <IconCheck v-if="isActive" class="icon-check" />
    </div>
    <hr class="category-delim" />
    <template v-if="hasChildren">
        <SelectCategoryItem
            v-for="child in category.children"
            :key="child.id"
            :category="child"
            :level="level + 1"
            :active-id="activeId"
            :is-parent-active="isActive"
            @click="$emit('click', $event)"
        />
    </template>
</template>

<style lang="scss" scoped>
@import "@/assets/skeleton";

.category-item {
    position: relative;
    cursor: pointer;

    h3 {
        font-size: 15px;
        line-height: 20px;
    }

    .icon-check {
        position: absolute;
        top: 50%;
        right: 0;
        width: 18px;
        height: auto;
        color: var(--c-primary);
        transform: translateY(-50%);
    }

    &.loading {
        & h3 {
            @include skeleton;

            display: inline-block;
            width: 140px;
            height: 20px;
        }
    }
}

.category-delim {
    width: 100%;
    height: 1px;
    background-color: var(--c-gray-3);
    border: none;
}
</style>
