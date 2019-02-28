<template>
  <div>
    <input v-model='test'>
    {{test }}
  </div>
</template>

<script>
//to bring the test form test
import Test from './Display'
import Users from './Form'
export default {
  name: 'HelloWorld',
  components:{
    
  },
  data()
  {
    return {
      test: 'Hello there'
    }
  },
  watch: {
    test: {
      immediate: true,
      handler(val)
      {
        console.log(val)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
