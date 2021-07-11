import React, { useState, useEffect } from 'react';
import { message, Spin, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { ITransaction, TRANSACTION_TYPES, TransactionTypes } from './interfaces';
import { tableColorNumber } from '../../utils/printStyle';
import api from '../../services/api';

const CardTransactions = (props: { origin: 'internal' | 'external' }): JSX.Element => {
  const [loadingTransactions, setLoadingTransactions] = useState<boolean>(true);
  const [transactionsData, setTransactionsData] = useState<Array<ITransaction> | undefined>(undefined);

  useEffect(() => {
    let isMounted: boolean = true;
    let endpoint: string;
    if (props.origin === 'external') endpoint = '/transactions/external';
    else endpoint = '/transactions';
    api.get(endpoint).then((response: any) => {
      if (!isMounted) return;
      if (response && response.success) {
        setTransactionsData(response.data.transactions_data);
      }
      else {
        if (response && response.message) message.error(response.message);
      }
      setLoadingTransactions(false);
    });
    return () => { isMounted = false }
  }, [props.origin]);

  const transactionsCol: ColumnsType<ITransaction> = [
    {
      title: 'Tipo da transação',
      dataIndex: 'transaction_type',
      key: 'transaction_type',
      filters: [
        {
          text: TRANSACTION_TYPES.activation,
          value: 'activation'
        },
        {
          text: TRANSACTION_TYPES.reload,
          value: 'reload'
        },
        {
          text: TRANSACTION_TYPES.redeem,
          value: 'redeem'
        },
        {
          text: TRANSACTION_TYPES.cancellation,
          value: 'cancellation'
        }
      ],
      onFilter: (value: string | number | boolean, record: ITransaction) => record.transaction_type === value,
      render: (text: TRANSACTION_TYPES) => TransactionTypes[text]
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
      <Table rowKey="key" dataSource={transactionsData} columns={transactionsCol} pagination={{ position: ['bottomCenter'], defaultPageSize: 10 }} scroll={{ x: 400 }} />
    </Spin>
  );
}

export default CardTransactions;
