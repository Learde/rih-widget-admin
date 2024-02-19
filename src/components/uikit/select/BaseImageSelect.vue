<script setup>
import { useVModel } from "@vueuse/core";
import { isArray } from "lodash";
import { ref, reactive } from "vue";

import { uploadImage } from "@/api";
import { BaseSelect } from "@/components";
import { IconPicture, IconDelete } from "@/icones";

const props = defineProps({
    modelValue: {
        type: Array,
        default: () => [],
    },
});
const emit = defineEmits(["update:modelValue"]);

const media = useVModel(props, "modelValue", emit);

const fileDialog = ref(null);
let idIncrement = 0;
const roles = [
    {
        title: "Фото или другой медиафайл",
        id: 4,
    },
    {
        title: "Аватар, обложка",
        id: 70,
    },
];

const openFileDialog = function () {
    fileDialog.value.click();
};

const hasAvatar = function () {
    return media.value.some((img) => img.dictId === 70);
};

const handleFileSelect = async function (e) {
    const formData = new FormData();

    formData.append("file", e.target.files[0]);

    const image = reactive({
        id: ++idIncrement,
        isLoading: true,
        src: null,
        resourceId: null,
        dictId: null,
        orderId: 0,
    });

    image.dictId = hasAvatar() ? 4 : 70;

    if (!isArray(media.value)) {
        media.value = [image];
    } else {
        media.value.push(image);
    }

    const res = await uploadImage(formData);

    image.id = res.id;
    image.resourceId = res.resourceId;
    image.src = res.src;
    image.isLoading = false;
};

const changeDictId = async function (image) {
    if (Number(image.dictId) === 70) {
        const prevAvatar = media.value.find((img) => img.dictId === 70 && img.id !== image.id);

        prevAvatar.dictId = 4;
    }
};

const deleteImage = function (image) {
    media.value = media.value.filter((img) => img.id !== image.id);
};
</script>

<template>
    <div class="image-select-wrapper">
        <div
            class="image-selected"
            :class="{ loading: image.isLoading }"
            v-for="image in media"
            :key="image.id"
        >
            <div class="image-selected-img-wrapper">
                <div
                    :style="{
                        backgroundImage: 'url(https://media.rentinhand.ru/' + image.src + ')',
                    }"
                    class="image-selected-img"
                />
            </div>
            <BaseSelect
                class="image-selected-type"
                :options="roles"
                v-model="image.dictId"
                @select="changeDictId(image)"
                :disabled="image.isLoading"
            />
            <div class="image-selected-actions">
                <IconDelete class="image-selected-delete" @click="deleteImage(image)" />
            </div>
        </div>
        <div class="image-select" @click="openFileDialog">
            <IconPicture class="icon" />
            <label class="label">Добавить изображение</label>
        </div>
        <input type="file" ref="fileDialog" accept="image/*" @change="handleFileSelect" />
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/skeleton";

.image-select-wrapper {
    input[type="file"] {
        display: none;
    }

    .image-selected {
        display: flex;
        gap: 18px;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 24px;

        .image-selected-delete {
            width: auto;
            height: 20px;
            color: var(--c-red);
            cursor: pointer;
        }

        .image-selected-img-wrapper {
            padding: 3px;
            border: 1px solid var(--c-gray-3);
            border-radius: 10px;
        }

        .image-selected-img {
            width: 95px;
            height: 60px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
        }

        &.loading {
            .image-selected-img-wrapper,
            .image-selected-type:deep(.base-select),
            .image-selected-actions {
                @include skeleton;
            }

            .image-selected-actions {
                height: 30px;
                width: 30px;
            }

            .image-selected-type:deep(.select-icon) {
                display: none;
            }

            .image-selected-img {
                background: none !important;
            }
        }
    }

    .image-select {
        display: flex;
        gap: 15px;
        align-items: center;
        cursor: pointer;
    }

    .icon {
        width: 24px;
        height: 24px;
        color: var(--c-primary);
    }

    .label {
        font-size: 15px;
        line-height: 20px;
        cursor: pointer;
    }
}
</style>
