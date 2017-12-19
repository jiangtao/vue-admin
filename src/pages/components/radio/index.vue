<template>
    <Layout>
        <Radio v-model="opt" val="1">input radio 1</Radio>
        <Radio v-model="opt" val="2">input radio 2</Radio>
        <Radio v-model="opt" val="3">input radio 3</Radio>
        <Radio v-model="opt" val="4">input radio 4</Radio>        
    </Layout>
</template>
<script>
    import Radio from 'vt-radio'
    export default {
      data() {
        return {
          opt: 2
        }
      },
      mounted() {
        setTimeout(() => this.opt = 3, 1000)
      },
      components: {
        Radio
      }
    }
</script>
