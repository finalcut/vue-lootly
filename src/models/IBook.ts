import IBorrowable from './IBorrowable'

export default interface IBook extends IBorrowable {
  isbn: string
  author: string
  genre: string
}
