import React from 'react';


/**
 * Component for displaying Gift Card informations.
 */
const CardInfos = (props: {
  /** Icon of the information */
  icon: JSX.Element,
  /** Title of the information */
  title: string,
  /** Text of the information */
  text: string,
  /** Color of the information text */
  color?: string
}): JSX.Element => {
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
