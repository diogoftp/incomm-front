import React, { useState, useEffect } from 'react';
import { Row, Col, Divider, Table, Tag, Spin, Typography, message } from 'antd';
import { MessageOutlined, DollarCircleOutlined, CalendarOutlined } from '@ant-design/icons';
import { tableColorNumber, colorFromNumber } from '../../utils/printStyle';
import CardInfos from '../../components/cardInfos';
import giftCard from '../../giftCard.svg';
import { ColumnsType } from 'antd/lib/table/interface';
import { ITransaction, ICardData } from './interfaces';
import api from '../../services/api';

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
  const [loadingTransactions, setLoadingTransactions] = useState(true);
  const [transactionsData, setTransactionsData] = useState<Array<ITransaction> | undefined>(undefined);
  const [cardData, setCardData] = useState<ICardData | null>(null);

  useEffect(() => {
    api.get('/info').then((response: any) => {
      if (response && response.success) {
        setCardData(response.data.card_data);
      }
      else {
        if (response && response.message) message.error(response.message);
      }
    });
  }, []);

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
      render: (text: number) => tableColorNumber(text),
    },
    {
      title: 'Identificação',
      dataIndex: 'identification',
      key: 'identification',
      render: (text: string) => text ? (<Tag>{text}</Tag>) : '-',
    },
  ];

  let balanceColor: string;
  let cardMessage: string;
  let cardBalance: string;
  let cardExpiration: string;
  if (cardData) {
    balanceColor = colorFromNumber(cardData.balance);
    cardMessage = cardData.message;
    cardBalance = 'R$ ' + cardData.balance.toLocaleString('pt-br');
    cardExpiration = cardData.expiration;
  }
  else {
    balanceColor = 'inherit';
    cardMessage = '-';
    cardBalance = '-';
    cardExpiration = '-';
  }
  return (
    <div className="container-wrapper">
      <div className="container">
        <Row>
          <Col sm={24} md={6} style={{ padding: '1em' }}>
            <Typography.Title style={{ textAlign: 'center' }}>Meu Gift Card</Typography.Title>
            <img src={giftCard} style={{ width: '100%' }} alt="gift card"></img>
            <Spin spinning={!cardData}>
              <ul>
                <CardInfos icon={<MessageOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Mensagem do Presente" text={cardMessage} />
                <CardInfos icon={<DollarCircleOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Saldo" color={balanceColor} text={cardBalance} />
                <CardInfos icon={<CalendarOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Validade" text={cardExpiration} />
              </ul>
            </Spin>
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
