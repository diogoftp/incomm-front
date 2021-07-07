import React from 'react';
import { Row, Col, Divider, Typography } from 'antd';
import CardTransactions from '../../components/cardTransactions';
import CardData from '../../components/cardData';

const Info = (): JSX.Element => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <Row>
          <Col sm={24} md={6} style={{ padding: '1em' }}>
            <Typography.Title style={{ textAlign: 'center' }}>Meu Gift Card</Typography.Title>
            <CardData />
          </Col>
          <Divider type="vertical" style={{ height: '100%' }} />
          <Col sm={24} md={17} style={{ padding: '1em' }}>
            <Divider>Transações</Divider>
            <CardTransactions />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Info;
