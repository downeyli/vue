<template>
  <v-navigation-drawer
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
    v-model="drawer"
  >
    <v-img
      :src="image"
      :gradient="gradient"
      height="100%"
    >
      <v-list-tile
        v-for="(m, i) in menus"
        :key="i"
        :to="m.to"
        :active-class="color"
        avatar
        class="v-list-item"
      >
        <v-list-tile-action>
          <v-icon>{{ m.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title
          v-text="m.text"
        />
      </v-list-tile>
    </v-img>
  </v-navigation-drawer>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: "Drawer",
    data: () => ({
      menus: [
        {
          to: '/test',
          icon: 'mdi-view-dashboard',
          text: '主页'
        },
        {
          to: '/dashboard',
          icon: 'mdi-settings',
          text: '设置'
        }
      ]
    }),
    computed: {
      ...mapState('app', ['image', 'color']),
      drawer: {
        get() {
          return this.$store.state.app.drawer
        },
        set(val) {
          this.setDrawer(val)
        }
      },
      gradient() {
        return `${this.$store.state.app.sidebarBackgroundColor}, ${this.$store.state.app.sidebarBackgroundColor}`
      }
    },
    methods: {
      ...mapMutations('app', ['setDrawer', 'toggleDrawer'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
