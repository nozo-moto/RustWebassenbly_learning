<template>
<div class="MiningJS">
    <p>{{ msg }}</p>
    <input v-model="a" placeholder="input a" style="text-align: center; border: 1px">
    <input v-model="b" placeholder="input b" style="text-align: center">
    <p><button type="submit" @click="submitRust">submitRust</button></p>
    <p><button type="submit" @click="submitJS">submitJS</button></p>
</div>
</template>

<script>
export default {
  name: 'MiningJS',
  data () {
    return {
      a: '',
      b: '',
      msg: ''
    }
  },
  methods: {
    submitRust: function () {
      const self = this
      const startTime = new Date()
      fetch('static/sum.wasm')
        .then((response) => response.arrayBuffer())
        .then((bytes) => WebAssembly.instantiate(bytes, {}))
        .then((results) => {
          const startTime2 = new Date()
          const instance = results.instance
          self.msg = instance.exports.sum(self.a, self.b)
          const endTime = new Date()
          self.msg = self.msg + ' :\t' + (endTime - startTime + 'ms') + ' :\t' + (endTime - startTime2 + 'ms')
        })
    },
    submitJS: function () {
      const self = this
      const startTime = new Date()
      self.msg = self.a + self.b
      const endTime = new Date()
      self.msg = self.msg + ' :\t' + (endTime - startTime + 'ms')
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
