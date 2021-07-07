import React, { useState, useEffect } from 'react';
import { Spin, Table, Tag } from 'antd';
import { ITransaction, TransactionTypes } from './interfaces';
import { ColumnsType } from 'antd/lib/table/interface';
import { tableColorNumber } from '../../utils/printStyle';

const data = [
  {
    key: '1',
    type: TransactionTypes.withdrawl,
    date: '06/07/2021',
    value: 500,
    identification: 'E-Commerce'
  },
  {
    key: '2',
    type: TransactionTypes.activation,
    date: '05/07/2021',
    value: -100,
    identification: 'Loja Shopping'
  },
  {
    key: '3',
    type: TransactionTypes.cancellation,
    date: '22/06/2021',
    value: -100,
    identification: 'Loja Shopping'
  }
];

const CardTransactions = (): JSX.Element => {
  const [loadingTransactions, setLoadingTransactions] = useState<boolean>(true);
  const [transactionsData, setTransactionsData] = useState<Array<ITransaction> | undefined>(undefined);

  useEffect(() => {
    setTransactionsData(data);
    setLoadingTransactions(false);
  }, []);

  const transactionsCol: ColumnsType<ITransaction> = [
    {
      title: 'Tipo da transação',
      dataIndex: 'type',
      key: 'type',
      filters: [
        {
          text: TransactionTypes.activation,
          value: TransactionTypes.activation,
        },
        {
          text: TransactionTypes.recharge,
          value: TransactionTypes.recharge,
        },
        {
          text: TransactionTypes.withdrawl,
          value: TransactionTypes.withdrawl,
        },
        {
          text: TransactionTypes.cancellation,
          value: TransactionTypes.cancellation,
        },
      ],
      onFilter: (value: string | number | boolean, record: ITransaction) => record.type === value,
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
        compare: (a: ITransaction, b: ITransaction) => a.value - b.value,
      },
      render: (text: number) => tableColorNumber(text),
    },
    {
      title: 'Identificação',
      dataIndex: 'identification',
      key: 'identification',
      render: (text: string) => text ? (<Tag>{text}</Tag>) : '-',
    },
  ];

  return (
    <Spin spinning={loadingTransactions}>
      <Table rowKey="key" dataSource={transactionsData} columns={transactionsCol} pagination={{ position: ['bottomCenter'] }} />
    </Spin>
  );
}

export default CardTransactions;
