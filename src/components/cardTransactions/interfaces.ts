export enum TransactionTypes {
  activation = 'Ativação',
  reload = 'Recarga',
  redeem = 'Resgate',
  cancellation = 'Cancelamento'
}

export interface ITransaction {
  key: number,
  transaction_type: TransactionTypes,
  transaction_date: string,
  transaction_value: number,
  store_identification: string
}
