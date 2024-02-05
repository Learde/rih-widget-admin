<script setup>
import { IconDelete, IconSettings } from "@/icones";
import { BaseBadge } from "@/components";

defineProps({
    inventory: {
        type: Object,
        required: true,
    },
    isLoading: {
        type: Boolean,
        default: false,
    },
});
defineEmits(["delete", "edit"]);
</script>

<template>
    <div class="card" :class="{ loading: isLoading }">
        <div class="img-wrapper">
            <div class="img" :style="{ backgroundImage: `url(${inventory.avatar})` }"></div>
        </div>
        <div class="content">
            <h4>{{ inventory.title }}</h4>
            <span class="article">Артикул: {{ inventory.article }}</span>
            <BaseBadge class="badge" :color="inventory.state?.color" size="sm">{{
                inventory.state?.title
            }}</BaseBadge>
        </div>
        <div class="actions">
            <IconSettings class="edit" @click="$emit('edit')" />
            <IconDelete class="delete" @click="$emit('delete')" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/skeleton";

.card {
    display: flex;
    gap: 12px;
    align-items: center;

    & .img-wrapper {
        height: 100%;
        padding: 3px;
        border: 1px solid var(--c-gray-3);
        border-radius: 10px;
    }

    & .img {
        width: 95px;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border-radius: 10px;
    }

    & h4 {
        font-size: 15px;
        line-height: 20px;
    }

    & .article {
        display: inline-block;
        font-size: 12px;
        line-height: 16px;
        color: var(--c-gray-5);
    }

    & .content {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    & .badge {
        align-self: flex-start;
    }

    & .actions {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-left: auto;
    }

    & .edit {
        width: 19px;
        height: auto;
        color: var(--c-primary);
        cursor: pointer;
    }

    & .delete {
        width: 17px;
        height: auto;
        color: var(--c-red);
        cursor: pointer;
    }

    &.loading {
        & .badge {
            width: 70px;
            height: 18px;
        }

        & h4 {
            width: 150px;
            height: 20px;
        }

        & .article {
            width: 90px;
            height: 16px;
        }

        & .actions {
            width: 56px;
            height: 20px;
        }

        & .img-wrapper,
        & .badge,
        & h4,
        & .article,
        & .actions {
            @include skeleton;
        }
    }
}

@keyframes shine {
    to {
        background-position-x: -200%;
    }
}
</style>
