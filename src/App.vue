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
      <v-app-bar-nav-icon />
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
      >
        <book :model="book" />
      </v-container>
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
// we want to inject the service into this file
import { inject } from 'inversify-props'
import { Registry } from './Registry'
import IBookService from './services/IBookService'
import Book from './components/book/Book.vue'
import IBook from './models/IBook'

// almost everything we create will be a component
// vue apps are components made up of other components
@Component({
  name: 'lootly',
  components: {
    book: Book
  }
})
export default class extends Vue {
  // this is a property getter.  Typescript lets us say what type of
  // value will be returned (string).  It's used up in the template as {{ AppTitle }}
  get AppTitle (): string { return process.env.VUE_APP_TITLE }

  @inject(Registry.IBookService)
  private bookService!: IBookService

  // some bogus properties to act as placeholders for the layout we're starting with
  private drawer: boolean = false
  private dialog: boolean = false

  private book: IBook | null = null

  async created (): Promise<void> {
    await this.bookService.get('1').then((result) => {
      this.book = result
      console.log(this.book)
    })
  }
}
</script>
