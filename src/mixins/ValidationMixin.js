export default {
    data() {
        return {
            requiredRule: val => val && val.length > 0 || 'שדה חובה.',
        }
    },
};