<script setup>
// https://github.com/lokesh-coder/pretty-checkbox
import { computed } from "vue";

import { IconCheck } from "@/icones";

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    readonly: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "input"]);

const data = computed({
    get() {
        return props.modelValue;
    },

    set(value) {
        emit("update:modelValue", value);
    },
});
</script>

<template>
    <div class="pretty p-svg p-curve p-animation">
        <input
            v-model="data"
            type="checkbox"
            @input="$emit('input', $event)"
            :disabled="readonly"
        />
        <div class="state p-primary content">
            <!-- TODO сделать :slotted стили для svg -->
            <slot name="icon">
                <IconCheck class="svg" />
            </slot>
            <label><slot /></label>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pretty {
    --pretty-box-size: calc(1em + 2px);
    --pretty-z-index-back: 0;
    --pretty-z-index-between: 1;
    --pretty-z-index-front: 2;
    --pretty-border-color: var(--c-gray-1);
    --pretty-top: 8;
    --pretty-top-offset: calc((0% - (100% - 1em)) - (var(--pretty-top) * 1%));

    position: relative;
    display: inline-block;
    margin-right: 1em;
    line-height: 1;
    white-space: nowrap;

    .content {
        display: flex;
        align-items: center;
    }

    input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: var(--pretty-z-index-front);
        width: 100%;
        min-width: 1em;
        height: 100%;
        padding: 0;
        margin: 0;
        cursor: pointer;
        opacity: 0;
    }

    .state {
        label {
            position: inherit;
            display: inline-block;
            min-width: var(--pretty-box-size);
            margin: 0;
            margin-left: calc(var(--pretty-box-size) + 12px);
            font-weight: normal;

            &::before,
            &::after {
                position: absolute;
                top: 50%;
                left: 0;
                z-index: var(--pretty-z-index-back);
                display: block;
                width: var(--pretty-box-size);
                height: var(--pretty-box-size);
                content: "";
                background-color: transparent;
                border: 1px solid transparent;
                border-radius: 0;
                transform: translateY(-50%);
            }

            &::before {
                border-color: var(--pretty-border-color);
            }
        }
    }

    &.p-svg {
        .state {
            .svg {
                position: absolute;
                top: 50%;
                left: 0;
                z-index: var(--pretty-z-index-between);
                width: var(--pretty-box-size);
                height: var(--pretty-box-size);
                font-size: 1em;
                line-height: normal;
                text-align: center;
                border: 1px solid transparent;
                opacity: 0;
                transform: translateY(-50%);
            }

            svg {
                display: flex;
                flex: 1;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                margin: 0;
                line-height: 1;
                text-align: center;
            }
        }
    }

    &.p-curve {
        .state label {
            &::before,
            &::after {
                border-radius: 20%;
            }
        }
    }

    input:checked ~ .state {
        .svg {
            opacity: 1;
        }

        &.p-primary {
            label::after {
                background-color: var(--c-primary);
            }

            .icon,
            .svg {
                color: #fff;
                stroke: #fff;
            }
        }
    }

    &.p-switch.p-slim input:checked ~ .state.p-primary::before {
        background-color: var(--c-green-70);
        border-color: var(--c-green-70);
    }

    &.p-animation:not(.p-default) {
        input:checked + .state {
            .icon,
            .svg,
            img,
            label::before,
            label::after {
                opacity: 1;

                // TODO: придумать как динамически присваивать функцию анимации
                animation: jelly 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }
        }
    }
}

@keyframes zoom {
    0% {
        opacity: 0;
        transform: scale(0);
    }
}

@keyframes tada {
    0% {
        opacity: 0;
        transform: scale(7);
        animation-timing-function: ease-in;
    }

    38% {
        opacity: 1;
        transform: scale(1);
        animation-timing-function: ease-out;
    }

    55% {
        transform: scale(1.5);
        animation-timing-function: ease-in;
    }

    72% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }

    81% {
        transform: scale(1.24);
        animation-timing-function: ease-in;
    }

    89% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }

    95% {
        transform: scale(1.04);
        animation-timing-function: ease-in;
    }

    100% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
}

@keyframes jelly {
    0% {
        transform: scale3d(1, 1, 1) translateY(-50%);
    }

    30% {
        transform: scale3d(0.75, 1.25, 1) translateY(-50%);
    }

    40% {
        transform: scale3d(1.25, 0.75, 1) translateY(-50%);
    }

    50% {
        transform: scale3d(0.85, 1.15, 1) translateY(-50%);
    }

    65% {
        transform: scale3d(1.05, 0.95, 1) translateY(-50%);
    }

    75% {
        transform: scale3d(0.95, 1.05, 1) translateY(-50%);
    }

    100% {
        transform: scale3d(1, 1, 1) translateY(-50%);
    }
}

@keyframes rotate {
    0% {
        opacity: 0;
        transform: translateZ(-200px) rotate(-45deg);
    }

    100% {
        opacity: 1;
        transform: translateZ(0) rotate(0);
    }
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 transparentize(#bdc3c7, 0);
    }

    100% {
        box-shadow: 0 0 0 1.5em transparentize(#bdc3c7, 1);
    }
}
</style>
