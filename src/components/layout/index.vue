<style src="./style.css" scoped></style>
<template src="./template.html"></template>

<script>
    import { Menus, Item, Submenu } from 'vt-menu/dist/index'
    export default {
      data() {
        return {
          vo: {
            sidebarIsOpen: true
          }
        }
      },
      methods: {
        toggle() {
          this.vo.sidebarIsOpen = !this.vo.sidebarIsOpen
        }
      },
      components: {
        Menus,
        Item,
        Submenu
      }
    }
</script>