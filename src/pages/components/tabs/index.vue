<template>
    <Layout>
        <Tabs @change="change">
            <TabItem v-for="(menu,index) in vo.menus" :active="idx == index">
                <span class="tabs-title" slot="title">{{menu.name}}</span>
                <p>{{menu.content}} {{index}}</p>
            </TabItem>
        </Tabs>
    </Layout>
</template>
<script>
    import { Tabs, TabItem } from 'vt-tabs'
    export default {
      methods: {
        change(idx) {
          this.idx = idx
          console.log(idx)
        }
      },
      mounted() {
        setTimeout(() => this.change(++this.idx), 1000)
      },
      data() {
        return {
          vo: {
            menus: [
              {name: '尾巴1', content: '姜鹏很帅'},
              {name: '尾巴2', content: '姜鹏很酷'},
              {name: '尾巴3', content: '你们都很帅'}
            ]
          },
          idx: 0
        }
      },
      components: {
        Tabs,
        TabItem
      }
    }
</script>
