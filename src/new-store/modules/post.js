
export const SET_POSTS = 'SET_POSTS';
export const SET_POST = 'SET_POST';

import $api from 'axios';

const state = {
    posts: [],
    post: null
};

const mutations = {
    [SET_POSTS](state, payload) {
        state.posts = payload;
    },
    [SET_POST](state, payload) {
        state.post = payload;
    },
};

const actions = {
    getPosts(context) {
        let url = `https://jsonplaceholder.typicode.com/posts`;
        $api.get(url).then(res => {
            console.log(res.data)
            context.commit(SET_POSTS, res.data);
        })
    },
    getPost(context, postId) {
        let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        $api.get(url).then(res => {
            context.commit(SET_POST, res.data);
        })
    }
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
    posts: state => state.posts,
    post: state => state.post
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
