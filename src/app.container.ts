import 'reflect-metadata'
import { container } from 'inversify-props'
import { Registry } from './Registry'

import IBookService from './services/IBookService'
import BookService from './services/impl/BookService'

export default function buildDependencyContainer (): void {
  container.bind<IBookService>(Registry.IBookService).to(BookService)
}
