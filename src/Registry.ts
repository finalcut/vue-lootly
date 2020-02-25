export interface IRegistry {
  [name: string]: symbol;
}

export const Registry: IRegistry = {
  IBookService: Symbol('IBookService')
}
