<!-- single file component; has template at the top, and logic/script at the bottom -->
<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    />

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">{{ AppTitle }}</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      />
    </v-content>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app>
</template>
<script lang="ts">
// these decorators are used all over the place in our typescript app.
import { Component, Vue } from 'vue-property-decorator'

    // almost everything we create will be a component
    // vue apps are components made up of other components
    @Component({
      name: 'lootly'
    })

export default class extends Vue {
  // this is a property getter.  Typescript lets us say what type of
  // value will be returned (string).  It's used up in the template as {{ AppTitle }}
  get AppTitle (): string { return 'lootly' }
}
</script>
