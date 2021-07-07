export interface ITransaction {
  key: string,
  type: string,
  date: string,
  value: number,
  identification: string
}

export interface ICardData {
  number: number,
  message: string,
  balance: number,
  expiration: string
}
