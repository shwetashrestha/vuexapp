<template>
  <div class="container">
    <div v-if="post !== null">
      Title: {{ post.title}},
      Body: {{ post.body}}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["post"])
  }
};
</script>