<template src="./template.html"></template>

<script>
    import Buttons from 'vt-button'
    export default {
      props: {},
      methods: {
        clickMe() {
          console.log('~~')
          alert('点我')
        }
      },
      mounted() {},
      components: {
        Buttons
      }
    }
</script>
