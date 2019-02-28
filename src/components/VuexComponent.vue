<template>
  <div>
    Count is: {{ count }}
    <button @click="$store.dispatch('increment', count)">Increment</button>
    <button @click="decrement(count)">Decrement</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      count: "count"
    })
  },
  methods: {
    decrement(count) {
      this.$store.dispatch("decrement", --count);
    }
  }
};
</script>
