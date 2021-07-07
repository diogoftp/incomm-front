export enum TransactionTypes {
  activation = 'Ativação',
  recharge = 'Recarga',
  withdrawl = 'Resgate',
  cancellation = 'Cancelamento'
}

export interface ITransaction {
  key: number,
  type: TransactionTypes,
  date: string,
  value: number,
  identification: string
}
