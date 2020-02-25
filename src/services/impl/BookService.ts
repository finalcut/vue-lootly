import axios from 'axios'
import { injectable } from 'inversify-props'
import IBookService from '@/services/IBookService'
import IBook from '@/models/IBook'

@injectable()
export default class BookService implements IBookService {
  protected readonly API_URL: string | undefined = process.env.VUE_APP_API_URL
  protected readonly END_POINT: string = 'books'

  public async get (id: string): Promise<IBook> {
    const url = `${this.API_URL}/${this.END_POINT}/${id}`
    const httpResponse = await axios.get<IBook>(url)
    const model = httpResponse.data
    return model
  }

  put (model: IBook): Promise<IBook> {
    throw new Error('Method not implemented.')
  }

  post (model: IBook): Promise<IBook> {
    throw new Error('Method not implemented.')
  }

  createItem (): IBook {
    throw new Error('Method not implemented.')
  }
}
