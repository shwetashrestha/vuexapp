<template>
  <div>
    Count is: {{ count }}
    <button @click="$store.dispatch('increment', count)">Increment</button>
    <button @click="decrement(count)">Decrement</button>
    <br>
    <button @click="getPosts">List Posts</button>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <post></post>
        <post-lists></post-lists>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostLists from "./Posts";
import Post from "./SinglePost";
export default {
  components: {
    PostLists,
    Post
  },
  created() {},
  computed: {
    ...mapGetters({
      count: "count"
    })
  },
  methods: {
    decrement(count) {
      this.$store.dispatch("decrement", --count);
    },
    getPosts() {
      this.$store.dispatch("getPosts");
    }
  }
};
</script>
