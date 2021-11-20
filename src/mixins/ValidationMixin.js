export default {
    data() {
        return {
            required: val => val && val.length > 0 || 'שדה חובה.',
        }
    },
};