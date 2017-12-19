<style src="./style.css" scoped></style>
<template>
    <div v-show="open" class="dialog__warp" @mousemove.passive="move($event)" @mouseup="moveUp">
        <div class="dialog" :style="pos">
            <div class="dialog__header" v-if="title||closable" @mousedown="moveDown($event)">
                {{title}}
                <span v-if="closable" class="dialog__close" @click="close()"> </span>
            </div>
            <div class="dialog__content">
                <slot></slot>
            </div>
            <div class="dialog__footer" v-show="showFooter">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      data: function() {
        return {
          open: false,
          closable: false,
          showFooter: true,
          moveEnabled: false,
          pos: {
            top: '20%',
            left: '35%'
          },
          mouse: {
            x: 0,
            y: 0,
            top: window.innerHeight * 0.2,
            left: window.innerWidth * 0.35
          }

        }
      },
      props: {
        title: String,
        opend: {
          type: Boolean,
          default: false
        },
        modal: {
          type: Boolean,
          default: true
        }
      },
      components: {},
      methods: {
        close() {
          this.open = false
          this.$emit('close')
        },
        moveDown(e) {
          this.moveEnabled = true
          this.mouse.x = e.clientX
          this.mouse.y = e.clientY
        },
        moveUp() {
          this.moveEnabled = false
          if (this.pos.top != '20%') {
            this.mouse.top = Number.parseInt(this.pos.top)
            this.mouse.left = Number.parseInt(this.pos.left)
          }
        },
        move(e) {
          if (e.target.className.indexOf('dialog__header') > -1 && this.moveEnabled) {
            this.pos.top = `${(e.clientY - this.mouse.y + this.mouse.top)}px`
            this.pos.left = `${(e.clientX - this.mouse.x + this.mouse.left)}px`
          }
        }
      },
      mounted: function() {
        this.open = this.opend
        let closableStr = this.$el.getAttribute('closable')
        this.closable = (closableStr !== 'false')
        if (!this.$slots.footer) {
          this.showFooter = false
        }
      },
      watch: {
        opend: function(val) {
          this.open = val
          if (!val) {
            this.$emit('close')
          }
        }
      },
      filters: {}
    }
</script>