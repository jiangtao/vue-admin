<template>
    <Layout>
        <Breadcrumb separator="/">
            <Item :to="{path: '/'}">首页</Item>
            <Item>短信管理</Item>
            <Item>添加模板</Item>
            <Item>模板管理</Item>
        </Breadcrumb>
    </Layout>
</template>
<script>
    import { Breadcrumb, Item } from 'vt-breadcrumb/dist/index.js'
    export default {
      components: {
        Breadcrumb,
        Item
      }
    }
</script>
