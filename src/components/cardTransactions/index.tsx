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
      dataIndex: 'type',
      key: 'type',
      filters: [
        {
          text: TransactionTypes.activation,
          value: TransactionTypes.activation
        },
        {
          text: TransactionTypes.recharge,
          value: TransactionTypes.recharge
        },
        {
          text: TransactionTypes.withdrawl,
          value: TransactionTypes.withdrawl
        },
        {
          text: TransactionTypes.cancellation,
          value: TransactionTypes.cancellation
        }
      ],
      onFilter: (value: string | number | boolean, record: ITransaction) => record.type === value,
      // TODO: resolve type issue
      //render: (text: TransactionTypes) => Object.values(TransactionTypes).includes(text) ? TransactionTypes[text as TransactionTypes] : '-'
      //render: (text: TransactionTypes) => TransactionTypes[text]
      render: (text: TransactionTypes) => text
    },
    {
      title: 'Data da transação',
      dataIndex: 'date',
      key: 'date',
      sorter: (a: ITransaction, b: ITransaction) => new Date(a.date) > new Date(b.date) ? 1 : -1
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
      sorter: {
        compare: (a: ITransaction, b: ITransaction) => a.value - b.value
      },
      render: (text: number) => tableColorNumber(text)
    },
    {
      title: 'Identificação',
      dataIndex: 'identification',
      key: 'identification',
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
