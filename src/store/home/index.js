import { reqCatagoryList } from "@/api";

const state = {
    categorylist: [],
};

const mutations = {
    CATEGORYLIST(state, categorylist) {
        state.categorylist = categorylist;
    }
};

const actions = {
    async categorylist({ commit }) {
        let result = await reqCatagoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    }
};

const getters = {};


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}