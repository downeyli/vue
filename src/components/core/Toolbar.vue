<template>
  <v-toolbar
    flat
    style="background: #eee;"
  >
    <v-toolbar-title>
      <v-btn
        dark
        icon
        @click.stop="onClick"
      >
        <v-icon>mdi-view-list</v-icon>
      </v-btn>
      title
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
      onClick() {
        this.setDrawer(!this.$store.state.app.drawer)
      }
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
</style>
