<template>
    <Upload @change="change"></Upload>
</template>
<script>
    import Upload from 'vt-upload'
    export default {
      methods: {
        change() {
          console.log(arguments)
        }
      },
      components: {
        Upload
      }
    }
</script>