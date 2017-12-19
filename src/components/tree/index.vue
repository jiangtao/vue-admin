<style>
    .item {
        cursor: pointer;
    }

    .bold {
        font-weight: bold;
    }
    ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
    }
    .tree__item--noChild {
        padding-left: 16px;
    }
    .tree__checkdbox {
        width: 16px;
        height: 16px;
        position: relative;
        top: -1px;
        margin: 0;
    }
    .tree__opend--status {
        width: 17px;
        display: inline-block;
    }
</style>


<template lang="html">
    <ul>
        <li v-for="item in model">
            <div :class="{bold: isFolder(item),'tree__item--noChild':!isFolder(item)}">
                <span class="tree__opend--status" v-if="isFolder(item)" @click="toggle(item)">[{{item.opened ? '-' : '+'}}]</span>
                <label @dblclick="toggle(item)">
                    <input v-if="checkbox" class="tree__checkdbox" type="checkbox" v-model="item.checked"
                           @change="checkdChange(item)" @click.stop>
                    {{item[textField]}}
                </label>
            </div>
            <ul v-if="isFolder(item)" v-show="item.opened">
                <tree class="item" :textField="textField" :childrenField="childrenField" :checkbox="checkbox"
                      :model="item[childrenField]"></tree>
            </ul>
        </li>
    </ul>
</template>

<script type="text/javascript">
    import Vue from 'vue'
    export default {
      name: 'tree',
      props: {
        model: {
          type: Array
        },
        idField: {
          type: String,
          default: 'id'
        },
        childrenField: {
          type: String,
          default: 'children'
        },
        textField: {
          type: String,
          default: 'name'
        },
        checkbox: {
          type: Boolean,
          default: false
        },
        cascadeCheck: {
          type: Boolean,
          default: true
        }
      },
      data() {
        return {}
      },
      computed: {},
      methods: {
        isFolder: function(item) {
          return item[this.childrenField] && item[this.childrenField].length
        },
        toggle: function(item) {
          if (this.isFolder(item)) {
            if (item.opened !== undefined) {
              this.$set(item, 'opened', !item.opened)
            } else {
              this.$set(item, 'opened', true)
            }
          }
        },
        changeType: function() {
          if (!this.isFolder) {
            Vue.set(this.model, this.childrenField, [])
            this.addChild()
            this.open = true
          }
        },
        checkdChange(item) {
          if (item && this.cascadeCheck) {
            changeAllChild(item, item.checked, this.childrenField)
          }
          this.$nextTick(() => {
            if (this.$parent.$options._componentTag.toLowerCase() !== 'tree') {
              this.$emit('check', this.model, getChecked(this.model, this.childrenField))
            } else {
              this.$parent.checkdChange()
            }
          })

          function changeAllChild(data, checked, childrenField) {
            if (data[childrenField] && data[childrenField].length) {
              for (let child of data[childrenField]) {
                Vue.set(child, 'checked', checked)
                changeAllChild(child, checked, childrenField)
              }
            }
          }
        }
      },
      mounted() {

      }
    }
    function getChecked(data, childrenField) {
      let arr = []
    find(data)
      return arr

      function find(data) {
        for (let item of data) {
          if (item.checked) {
            arr.push(item)
          }
          if (item[childrenField] && item[childrenField].length) {
            find(item[childrenField])
          }
        }
      }
    }
</script>
