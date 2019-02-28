
export const SET_COUNT = 'SET_COUNT';

const state = {
    count: 0,
};

const mutations = {
    [SET_COUNT](state, payload) {
        state.count = payload;
    },
};

const actions = {
    increment(context, num) {
        context.commit(SET_COUNT, ++num);
    },
    decrement(context, num) {
        context.commit(SET_COUNT, --num);
    }
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
    count: state => state.count,
};

/*
|--------------------------------------------------------------------------
| Export the module
|--------------------------------------------------------------------------
*/
export default {
    state,
    mutations,
    actions,
    getters
}
