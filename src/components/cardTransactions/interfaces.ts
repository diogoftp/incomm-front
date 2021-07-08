export enum TRANSACTION_TYPES {
  activation = 'Ativação',
  reload = 'Recarga',
  redeem = 'Resgate',
  cancellation = 'Cancelamento'
}

export const TransactionTypes: Record<string, string> = {
  activation: 'Ativação',
  reload: 'Recarga',
  redeem: 'Resgate',
  cancellation: 'Cancelamento'
}

export interface ITransaction {
  key: number,
  transaction_type: TRANSACTION_TYPES,
  transaction_date: string,
  transaction_value: number,
  store_identification: string
}
