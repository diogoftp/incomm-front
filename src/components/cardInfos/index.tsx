import React from 'react';

const CardInfos = (props: { icon: JSX.Element, title: string, text: string, color?: string }): JSX.Element => {
  return (
    <li style={{ listStyleType: 'none' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        {props.icon}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold' }}>{props.title}</span>
          <span style={{ color: props.color }}>{props.text}</span>
        </div>
      </div>
    </li>
  );
}

export default CardInfos;
