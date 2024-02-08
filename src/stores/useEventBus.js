import { defineStore } from "pinia";
import { ref } from "vue";

export const useEventBus = defineStore("eventBus", () => {
    const handlers = ref({});

    const addEventListener = function (event, handler) {
        const handlersList = handlers.value[event];

        if (!handlersList) {
            handlers.value[event] = [handler];
        } else {
            handlersList.push(handler);
        }
    };

    const clearEventListeners = function (event) {
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

    return { addEventListener, clearEventListeners, emit, handlers };
});
