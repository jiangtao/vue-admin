<template>
    <Layout>
        <ul>
            <li v-for="item in vo">
            <Checkboxs v-model="item.checked">{{item.name}} {{item.checked}}</Checkboxs>
                </li>
            <br>
        </ul>
        
            <Checkboxs></Checkboxs>
    </Layout>
</template>
<script>
    import Checkboxs from 'vt-checkbox'
    export default {
      data() {
        return {
          vo: [{
            checked: true,
            checked2: false,
            name: 't1'
          }, {
            checked: true,
            checked2: false,
            name: 't2'
          }, {
            checked: true,
            checked2: true,
            name: 't3'
          }, {
            checked: true,
            checked2: true,
            name: 't4'
          }]
        }
      },
      mounted() {
        setTimeout(() => {
          this.vo = [{
            checked: true,
            checked2: false,
            name: 't4'
          }, {
            checked: true,
            checked2: false,
            name: 't3'
          }, {
            checked: false,
            checked2: false,
            name: 't2'
          }, {
            checked: false,
            checked2: false,
            name: 't1'
          }]
        }, 1000)
      },
      components: {
        Checkboxs
      }
    }
</script>