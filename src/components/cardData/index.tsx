import React, { useState, useEffect } from 'react';
import { message, Spin } from 'antd';
import { CalendarOutlined, DollarCircleOutlined, MessageOutlined } from '@ant-design/icons';
import api from '../../services/api';
import { ICardData } from './interfaces';
import { colorFromNumber } from '../../utils/printStyle';
import CardInfos from '../cardInfos';
import CardImage from '../cardImage';

const CardData = (): JSX.Element => {
  const [cardData, setCardData] = useState<ICardData | null>(null);

  useEffect(() => {
    let isMounted: boolean = true;
    api.get('/info').then((response: any) => {
      if (!isMounted) return;
      if (response && response.success) {
        setCardData(response.data.card_data);
      }
      else {
        if (response && response.message) message.error(response.message);
      }
    });
    return () => { isMounted = false }
  }, []);

  let balanceColor: string;
  let cardMessage: string;
  let cardBalance: string;
  let cardExpiration: string;
  let cardNumber: string;
  if (cardData) {
    balanceColor = colorFromNumber(cardData.balance);
    cardMessage = cardData.message;
    cardBalance = 'R$ ' + cardData.balance.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    cardExpiration = cardData.expiration;
    cardNumber = cardData.number.toString();
  }
  else {
    balanceColor = 'inherit';
    cardMessage = '-';
    cardBalance = '-';
    cardExpiration = '-';
    cardNumber = '-';
  }
  return (
    <Spin spinning={!cardData} size="large">
      <CardImage>{cardNumber}</CardImage>
      <ul>
        <CardInfos icon={<MessageOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Mensagem do Presente" text={cardMessage} />
        <CardInfos icon={<DollarCircleOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Saldo" color={balanceColor} text={cardBalance} />
        <CardInfos icon={<CalendarOutlined style={{ fontSize: '25px', padding: '1em' }} />} title="Validade" text={cardExpiration} />
      </ul>
    </Spin>
  );
}

export default CardData;
