<template>
  <div class="container">
    <div class="list-group" style="width: 40%">
      <a
        class="list-group-item list-group-item-action flex-column align-items-start"
        v-for="post in posts"
        :key="post.id"
        @click="viewPost(post.id)"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ post.title }}</h5>
        </div>
        <p class="mb-1">{{post.body}}</p>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["posts"])
  },
  methods: {
    viewPost(postId) {
      this.$store.dispatch("getPost", postId);
    }
  }
};
</script>