<template lang="html">
    <Layout>
        <Tree class="" :treeData="data"></Tree>
    </Layout>
</template>

<script>
import Tree from 'components/tree'

export default {
  data() {
    return {
      list: {
        name: 'Tree',
        children: [
          { name: '你大爷' },
          {
            name: '你妹',
            children: [
              {name: '江涛'},
              {name: '江涛媳妇'}
            ]
          }
        ]
      }
    }
  },
  components: {
    Tree
  }
}
</script>

<style lang="css">
</style>
