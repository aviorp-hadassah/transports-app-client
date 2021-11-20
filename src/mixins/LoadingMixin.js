import { QSpinnerOval } from 'quasar';

export default {
    data() {
        return {
            condition: false,
            spinnerOptions: {
                spinner: QSpinnerOval,
                spinnerColor: 'secondary',
                spinnerSize: 64,
                backgroundColor: '',
                message: 'הדף בטעינה..',
                messageColor: 'accent'
            }

        }
    },
    methods: {
        toggleLoading() {
            this.condition = !this.condition;
            this.condition ? this.$q.loading.show(this.spinnerOptions) : this.$q.loading.hide();
        },

    },
}
