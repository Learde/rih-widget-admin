<script setup>
import { computed } from "vue";

import { pSBC } from "@/assets/pSBC.js";

const props = defineProps({
    variant: {
        type: String,
        validator(value) {
            return ["primary", "gray", "red", "accent", "none"].includes(value);
        },
        default: "gray",
    },
    size: {
        type: String,
        validator(value) {
            return ["sm", "md", "lg"].includes(value);
        },
        default: "sm",
    },
    type: {
        type: String,
        validator(value) {
            return ["rounded", "circle"].includes(value);
        },
        default: "rounded",
    },
    noWrap: {
        type: Boolean,
        default: false,
    },
    color: {
        type: String,
        default: null,
    },
    link: {
        type: String,
        default: "javascript:void(0)",
    },
});

const badgeClasses = computed(() => {
    const badgeVariant = `base-badge--${props.variant}`;
    const badgeSize = `base-badge--${props.size}`;
    const badgeType = `base-badge--${props.type}`;
    const badgeNoWrap = `base-badge--no-wrap`;

    const classes = [];

    props.variant && classes.push(badgeVariant);
    props.size && classes.push(badgeSize);
    props.type && classes.push(badgeType);
    props.noWrap && classes.push(badgeNoWrap);

    return classes;
});

const badgeStyles = computed(() => {
    const styles = {};

    if (props.color) {
        styles.borderColor = props.color;
        styles.backgroundColor = pSBC(0.85, props.color);
    }

    return styles;
});
</script>

<template>
    <div class="base-badge" :class="badgeClasses" :style="badgeStyles">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.base-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    padding: var(--badge-padding);
    font-size: var(--badge-font-size);
    color: var(--c-text);
    background-color: var(--badge-color);
    border: 1px solid var(--badge-border-color);
    border-radius: var(--badge-border-radius);

    &--primary {
        --badge-border-color: var(--c-green-50);
        --badge-color: var(--c-green-10);
    }

    &--accent {
        --badge-border-color: var(--c-orange-50);
        --badge-color: var(--c-orange-10);
    }

    &--red {
        --badge-border-color: var(--c-red-50);
        --badge-color: var(--c-red-10);
    }

    &--gray {
        --badge-border-color: var(--c-neutral-40);
        --badge-color: var(--c-neutral-11);
    }

    &--sm {
        --badge-font-size: 14px;
        --badge-padding: 3px 14px;
        --badge-border-radius: 30px;
    }

    &--md {
        --badge-font-size: 16px;
        --badge-padding: 5px 24px;
        --badge-border-radius: 30px;
    }

    &--lg {
        --badge-font-size: 18px;
        --badge-padding: 15px 30px;
        --badge-border-radius: 30px;
    }

    &--circle {
        width: var(--badge-width);
        height: var(--badge-height);

        --badge-padding: 0;
        --badge-border-radius: 50%;

        &.base-badge {
            &--sm {
                --badge-width: 28px;
                --badge-height: 28px;
            }

            &--md {
                --badge-width: 35px;
                --badge-height: 35px;
            }

            &--lg {
                --badge-width: 40px;
                --badge-height: 40px;
            }
        }
    }

    &--no-wrap {
        white-space: nowrap;
    }
}
</style>
