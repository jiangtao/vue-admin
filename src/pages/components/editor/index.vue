<style>
    .vt-editor__wrapper{
        width:600px;
        height:500px;
    }
</style>
<template>
    <div class="vt-editor__wrapper">
    </div>
</template>
<script>
    export default{
      mounted() {
        let wangEditor = require('wangeditor')
        let editor = new wangEditor(this.$el)
        editor.create()
      }
    }
</script>