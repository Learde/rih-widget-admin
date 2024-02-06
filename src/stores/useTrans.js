import { defineStore } from "pinia";
import { ref } from "vue";

export const useTrans = defineStore("trans", () => {
    const validationMessages = ref({
        required: "Поле обязательно для заполнения",
    });

    return { validationMessages };
});
