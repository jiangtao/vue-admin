<style src='./style.css' scoped></style>
<template src='./template.html'></template>

<script>
    import Pagination from 'vt-pagination'
    
    export default {
      props: {},
      methods: {
        countChange(currentPage) {
          console.log('count change', currentPage)
        },
        currentChange(currentPage, oldPage) {
          console.log('current change', currentPage, oldPage)
        }
      },
      components: {
        Pagination
      }
    }
</script>
