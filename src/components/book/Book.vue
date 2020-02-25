<template>
  <div>
    <h1 v-if="model">
      {{ model.title }}
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import IBook from '@/models/IBook'

@Component({
  name: 'book'
})
export default class extends Vue {
  @Prop(Object) readonly model!: IBook

  mounted () {
    console.log('book component')
    console.log(this.model)
  }
};
</script>
