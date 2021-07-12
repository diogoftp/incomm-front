import React from 'react';
import { Row, Col, Divider, Typography, Tabs } from 'antd';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import CardTransactions from '../../components/cardTransactions';
import CardData from '../../components/cardData';


/**
 * Main page for displaying Gift Card data and transactions.
 */
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
            <Tabs
              defaultActiveKey="1"
              destroyInactiveTabPane={true}
            >
              <Tabs.TabPane
                tab={
                  <span>
                    <FullscreenExitOutlined />
                    API Interna
                  </span>
                }
                key="1"
              >
                <CardTransactions origin="internal" />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span>
                    <FullscreenOutlined />
                    API Externa
                  </span>
                }
                key="2"
              >
                <CardTransactions origin="external" />
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Info;
