import { ref, computed } from "vue";

export const useEntityStore = function ({
    getEntities,
    getEntity,
    addEntity,
    deleteEntity,
    deleteEntities,
    editEntity,
}) {
    const listData = ref([]);
    const singleData = ref({});
    const isManyLoading = ref(false);
    const isOneLoading = ref(false);
    const meta = ref({
        total: 0,
        page: 1,
    });
    const permissions = ref({});
    const prevPaginationParams = ref({});
    const prevFilters = ref({});

    const hasUnloadedOptions = computed(() => {
        return meta.value.total === 0 || meta.value.total !== listData.value.length;
    });

    async function fetchMany(
        paginationParams = prevPaginationParams.value,
        filters = prevFilters.value,
        options = {},
    ) {
        try {
            isManyLoading.value = true;

            const fetchResponse = await getEntities(paginationParams, filters, options);

            listData.value = fetchResponse.data;
            meta.value = fetchResponse.meta;
            permissions.value = fetchResponse.permissions;
        } finally {
            isManyLoading.value = false;
            prevPaginationParams.value = paginationParams;
            prevFilters.value = filters;
        }
    }

    async function getOne(id) {
        try {
            isOneLoading.value = true;

            singleData.value = await getEntity(id);

            return singleData.value;
        } finally {
            isOneLoading.value = false;
        }
    }

    async function editOne(id, data) {
        try {
            isOneLoading.value = true;

            singleData.value = await editEntity(id, data);

            return singleData.value;
        } finally {
            isOneLoading.value = false;
        }
    }

    async function addOne(data) {
        try {
            isOneLoading.value = true;

            singleData.value = await addEntity(data);

            return singleData.value;
        } finally {
            isOneLoading.value = false;
        }
    }

    async function deleteOne(id) {
        try {
            isManyLoading.value = true;
            isOneLoading.value = true;

            await deleteEntity(id);
        } finally {
            isManyLoading.value = false;
            isOneLoading.value = false;
        }
    }

    async function deleteMany(ids) {
        try {
            isManyLoading.value = true;
            isOneLoading.value = true;

            await deleteEntities(ids);
        } finally {
            isManyLoading.value = false;
            isOneLoading.value = false;
        }
    }

    function setManyLoading(value) {
        isManyLoading.value = value;
    }

    return {
        listData,
        singleData,
        isManyLoading,
        isOneLoading,
        meta,
        permissions,
        fetchMany,
        deleteOne,
        deleteMany,
        getOne,
        editOne,
        addOne,
        setManyLoading,
        hasUnloadedOptions,
    };
};
