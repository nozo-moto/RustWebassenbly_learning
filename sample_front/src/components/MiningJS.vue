<template>
<div class="MiningJS">
    <p>{{ msg }}</p>
    <input v-model="msg" placeholder="input">
    <button type="submit" @click="submit">submit</button>
</div>
</template>

<script>
export default {
  name: 'MiningJS',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    submit: function () {
      const self = this
      console.log(self.msg)
    }
  }
}
</script>

<style scoped>
h1,
h2 {
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
