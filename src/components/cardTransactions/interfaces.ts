export enum TransactionTypes {
  activation = 'Ativação',
  recharge = 'Recarga',
  withdrawl = 'Resgate',
  cancellation = 'Cancelamento'
}

export interface ITransaction {
  key: string,
  type: TransactionTypes,
  date: string,
  value: number,
  identification: string
}
