import React, { useState, useEffect } from 'react';
import { message, Spin, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { ITransaction, TransactionTypes } from './interfaces';
import { tableColorNumber } from '../../utils/printStyle';
import api from '../../services/api';

const CardTransactions = (): JSX.Element => {
  const [loadingTransactions, setLoadingTransactions] = useState<boolean>(true);
  const [transactionsData, setTransactionsData] = useState<Array<ITransaction> | undefined>(undefined);

  useEffect(() => {
    api.get('/transactions').then((response: any) => {
      if (response && response.success) {
        setTransactionsData(response.data.transactions_data);
      }
      else {
        if (response && response.message) message.error(response.message);
      }
      setLoadingTransactions(false);
    });
  }, []);

  const transactionsCol: ColumnsType<ITransaction> = [
    {
      title: 'Tipo da transação',
      dataIndex: 'transaction_type',
      key: 'transaction_type',
      filters: [
        {
          text: TransactionTypes.activation,
          value: TransactionTypes.activation
        },
        {
          text: TransactionTypes.reload,
          value: TransactionTypes.reload
        },
        {
          text: TransactionTypes.redeem,
          value: TransactionTypes.redeem
        },
        {
          text: TransactionTypes.cancellation,
          value: TransactionTypes.cancellation
        }
      ],
      onFilter: (value: string | number | boolean, record: ITransaction) => record.transaction_type === value,
      // TODO: resolve type issue
      //render: (text: TransactionTypes) => Object.values(TransactionTypes).includes(text) ? TransactionTypes[text as TransactionTypes] : '-'
      //render: (text: TransactionTypes) => TransactionTypes[text]
      render: (text: TransactionTypes) => text
    },
    {
      title: 'Data da transação',
      dataIndex: 'transaction_date',
      key: 'transaction_date',
      sorter: (a: ITransaction, b: ITransaction) => new Date(a.transaction_date) > new Date(b.transaction_date) ? 1 : -1
    },
    {
      title: 'Valor',
      dataIndex: 'transaction_value',
      key: 'transaction_value',
      sorter: {
        compare: (a: ITransaction, b: ITransaction) => a.transaction_value - b.transaction_value
      },
      render: (text: number) => tableColorNumber(text)
    },
    {
      title: 'Identificação',
      dataIndex: 'store_identification',
      key: 'store_identification',
      render: (text: string) => text ? (<Tag>{text}</Tag>) : '-'
    },
  ];

  return (
    <Spin spinning={loadingTransactions}>
      <Table rowKey="key" dataSource={transactionsData} columns={transactionsCol} pagination={{ position: ['bottomCenter'] }} />
    </Spin>
  );
}

export default CardTransactions;
