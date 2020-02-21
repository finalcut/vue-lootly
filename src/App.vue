<!-- single file component; has template at the top, and logic/script at the bottom -->
<template>
  <div id="main">
    <h1>{{ AppTitle }}</h1>
  </div>
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
