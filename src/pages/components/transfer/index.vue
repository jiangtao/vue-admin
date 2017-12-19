<template>
    <Layout>
        <Transfer @change="change" @target-change="targetChange" :dataSource="mockData" showField="title"></Transfer>
    </Layout>
</template>
<script>
    import Transfer from 'vt-transfer'
    export default {
      data() {
        return {
          mockData: []
        }
      },
      created() {
        let i = 0
        for (; i < 10; i++) {
          this.mockData.push({
            title: `选项${i + 1}`,
            id: `_id${i + 1}`,
            des: `描述${i + 1}`,
            checked: i % 2 == 0
          })
        }
      },
      components: {
        Transfer
      },
      methods: {
        change(selected, sources, targets) {
          console.log(selected, sources, targets)
        },
        targetChange(selected, sources, targets) {
          console.log(selected, sources, targets)
        }
      }
    }
</script>