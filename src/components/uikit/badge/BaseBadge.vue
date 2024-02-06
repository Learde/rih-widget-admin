<script setup>
import { computed } from "vue";

import { pSBC } from "@/lib";

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
    paddingY: {
        type: String,
        default: null,
    },
    paddingX: {
        type: String,
        default: null,
    },
    color: {
        type: String,
        default: null,
    },
    link: {
        type: String,
        default: "javascript:void(0)",
    },
    block: {
        type: Boolean,
        default: false,
    },
});

const badgeClasses = computed(() => {
    const badgeVariant = `base-badge--${props.variant}`;
    const badgeSize = `base-badge--${props.size}`;
    const badgeType = `base-badge--${props.type}`;
    const badgeNoWrap = "base-badge--no-wrap";

    const classes = [];

    props.variant && classes.push(badgeVariant);
    props.size && classes.push(badgeSize);
    props.type && classes.push(badgeType);
    props.noWrap && classes.push(badgeNoWrap);

    if (props.block) {
        classes.push("base-badge--block");
    }

    return classes;
});

const badgeStyles = computed(() => {
    const styles = {};

    if (props.color) {
        styles.borderColor = props.color;
        styles.backgroundColor = pSBC(0.85, props.color);
    }

    if (props.paddingY) {
        styles.paddingTop = props.paddingY;
        styles.paddingBottom = props.paddingY;
    }

    if (props.paddingX) {
        styles.paddingLeft = props.paddingX;
        styles.paddingRight = props.paddingX;
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    padding: var(--badge-padding);
    font-size: var(--badge-font-size);
    line-height: var(--badge-line-height);
    color: var(--c-text);
    background-color: var(--badge-color);
    border: 1px solid var(--badge-border-color);
    border-radius: var(--badge-border-radius);

    &--block {
        display: flex;
    }

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
        --badge-border-color: var(--c-gray-3);
        --badge-color: var(--c-neutral-11);
    }

    &--sm {
        --badge-font-size: 12px;
        --badge-line-height: 16px;
        --badge-padding: 1px 7.5px;
        --badge-border-radius: 30px;
    }

    &--md {
        --badge-font-size: 15px;
        --badge-padding: 8px 23.5px;
        --badge-border-radius: 30px;
        --badge-line-height: 20px;
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
