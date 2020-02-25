export default interface IBorrowable {
  id: string // a uuid
  title: string
  thumbnailUrl: string // to a url
  primaryImageUrl: string // to a url
  loanedTo: string
  loanedDate: Date
  isBorrowed(): boolean
}
