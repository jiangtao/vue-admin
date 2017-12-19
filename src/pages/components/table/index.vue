<style src=./style.css scoped></style>
<template src=./template.html></template>

<script>
    import { login } from 'apis/account'

    export default {
      data() {
        return {
          test1: false,
          abc: '123',
          abc2: '',
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            balance: 10000
          }, {
            date: '2016-05-022',
            name: '王小虎2',
            balance: 100002
          }, {
            date: '2016-05-022',
            name: '王小虎2',
            balance: 1000021111
          }, {
            date: '2016-05-022',
            name: '王小虎2',
            balance: 1000021111
          }, {
            date: '2016-05-022',
            name: '王小虎2',
            balance: 1000021111
          }, {
            date: '2016-05-022',
            name: '王小虎2',
            balance: 1000021111
          }, {
            date: '2016-05-022',
            name: '王小虎2',
            balance: 1000021111
          }]
        }
      },
      mounted() {
        login({loginName: 'xiaodou', loginPwd: '123456'})
          .then(data => console.log(data))
          .catch(e => {
            e && this.$alert({text: e.message})
          })
      },
      computed: {
        computedA() {
          return this.abc
        }
      },
      validators: {
        backcard: {
          message: '{{name}}的长度必须等于{{backcard}}',
          handler(val, element, rule) {
            return (val || '').toString().length === Number(rule)
          }
        }
      },
      methods: {
        edit(index, data) {
          console.log(index, data)
        },
        a(data) {
          console.log(data)
        },
        b(action, field) {
          console.log(action, field)
        },
        c(action, field) {
          console.log(action, field)
        },
        dropdownCallback(item) {
          console.log(item)
        },
        validA() {
          return 1
        },
        submitform(err, e) {
          console.log(err, e)
        },
        validate1(element) {
          console.log(element)
        },
        validated1(err, element) {
          console.log(err, element)
        }
      }
    }
</script>