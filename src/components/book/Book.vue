<template>
  <div v-if="model">
    <h1>{{ model.title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { inject } from 'inversify-props'
import { Registry } from '@/Registry'
import IBook from '@/models/IBook'
import IBookService from '@/services/IBookService'

@Component({
  name: 'book'
})
export default class extends Vue {
  @Prop(Object) readonly model!: IBook

  @inject(Registry.IBookService)
  private bookService!: IBookService
};
</script>
