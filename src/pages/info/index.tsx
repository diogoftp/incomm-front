import React, { useEffect } from 'react';
import { Row, Col, Divider, Table, Tag, Spin, Typography } from 'antd';
import { MessageOutlined, DollarCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { colorNumber } from '../../utils/printStyle';
import CardInfos from '../../components/cardInfos';
import giftCard from '../../giftCard.svg';
import './style.css';
import { ColumnsType } from 'antd/lib/table/interface';
import { ITransaction } from './interfaces';

const data = [
  {
    key: '1',
    type: 'Resgate',
    date: '06/07/2021',
    value: 500,
    identification: 'E-Commerce'
  },
  {
    key: '2',
    type: 'Ativação',
    date: '05/07/2021',
    value: -100,
    identification: 'Loja Shopping'
  }
];

const Info = (): JSX.Element => {
  const [loadingTransactions, setLoadingTransactions] = React.useState(true);
  const [transactionsData, setTransactionsData] = React.useState<Array<ITransaction> | undefined>(undefined);

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
          text: 'Resgate',
          value: 'Resgate',
        },
        {
          text: 'Ativação',
          value: 'Ativação',
        },
      ],
      onFilter: (value: any, record: ITransaction) => record.type === value,
    },
    {
      title: 'Data da transação',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Valor',
      dataIndex: 'value',
      key: 'value',
      sorter: {
        compare: (a: ITransaction, b: ITransaction) => a.value - b.value,
      },
      render: (text: number) => colorNumber(text),
    },
    {
      title: 'Identificação',
      dataIndex: 'identification',
      key: 'identification',
      render: (text: string) => text ? (<Tag>{text}</Tag>) : '-',
    },
  ];

  return (
    <div className="main-container-2">
      <div className="container-wrapper">
        <Row>
          <Col sm={24} md={6} style={{ padding: '1em' }}>
            <Typography.Title style={{ textAlign: 'center' }}>Meu Gift Card</Typography.Title>
            <img src={giftCard} style={{ width: '100%' }} alt="gift card"></img>
            <ul className="dotless-list">
              <CardInfos icon={<MessageOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Mensagem do Presente" text="Mensagem" />
              <CardInfos icon={<DollarCircleOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Saldo" text="Mensagem" />
              <CardInfos icon={<CalendarOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Validade" text="Mensagem" />
            </ul>
          </Col>
          <Divider type="vertical" style={{ height: '100%' }} />
          <Col sm={24} md={17} style={{ padding: '1em' }}>
            <Divider>Transações</Divider>
            <Spin spinning={loadingTransactions}>
              <Table dataSource={transactionsData} columns={transactionsCol} pagination={{ position: ['bottomCenter'] }} />
            </Spin>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Info;
