import React, { useState, useEffect } from 'react';
import { MessageOutlined } from '@ant-design/icons';

interface ITransaction {
  key: string,
  type: string,
  date: string,
  value: number,
  identification: string
}

const CardInfos = (props: {icon: JSX.Element, title: string, text: string}): JSX.Element => {

return (
  <li>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
      {props.icon}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontWeight: 'bold' }}>{props.title}</span>
        <span>{props.text}</span>
      </div>
    </div>
  </li>
);
}

export default CardInfos;
