<script setup>
import { IconEdit, IconDelete } from "@/icones";

defineProps({
    inventoryPrice: {
        type: Object,
        required: true,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
});
defineEmits(["edit", "delete"]);
</script>

<template>
    <div class="inventory-price-card" :class="{ loading: isLoading }">
        <span class="heading">{{ inventoryPrice.title }}</span>
        <div class="actions">
            <IconEdit class="edit" @click="$emit('edit')" />
            <IconDelete class="delete" @click="$emit('delete')" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/skeleton";

.inventory-price-card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;

    & .heading {
        font-size: 15px;
        line-height: 20px;
    }

    & .actions {
        position: absolute;
        right: -10px;
        display: flex;
    }

    & .edit {
        box-sizing: content-box;
        width: 23px;
        height: auto;
        padding: 10px;
        color: var(--c-primary);
        cursor: pointer;
    }

    & .delete {
        box-sizing: content-box;
        width: 17px;
        height: auto;
        padding: 10px;
        color: var(--c-red);
        cursor: pointer;
    }

    &.loading {
        & .heading {
            width: 150px;
            height: 20px;
        }

        & .actions {
            right: 0;
            width: 56px;
            height: 20px;
        }

        & .heading,
        & .actions {
            @include skeleton;
        }
    }
}
</style>
