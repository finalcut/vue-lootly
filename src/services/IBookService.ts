import IBook from '@/models/IBook'

export default interface IBookService{
  get(id: string): Promise<IBook>
  put(model: IBook): Promise<IBook>
  post(model: IBook): Promise<IBook>
  createItem() : IBook
}
