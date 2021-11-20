export default {
    methods: {
        triggerNotification(type, message) {
            this.$q.notify({
                type,
                message,
            })
        },
    }
};