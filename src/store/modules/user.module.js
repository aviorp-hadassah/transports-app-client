import { getField , updateField } from 'vuex-map-fields';

const state = {
    currentUser: "TEST",
};

const getters = {
    getField
};

const mutations = {
    updateField
};

const actions = {};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}




