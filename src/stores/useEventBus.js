import { defineStore } from "pinia";
import { ref } from "vue";

export const useEventBus = defineStore("eventBus", () => {
    const handlers = ref({});

    const addHandler = function (event, handler) {
        const handlersList = handlers.value[event];

        if (!handlersList) {
            handlers.value[event] = [handler];
        }
    };

    const clearHandlers = function (event) {
        if (handlers.value[event]) {
            handlers.value[event] = [];
        }
    };

    const emit = function (event) {
        const handlersList = handlers.value[event];

        if (handlersList) {
            for (const handler of handlersList) {
                handler();
            }
        }
    };

    return { addHandler, clearHandlers, emit };
});
