import React from 'react';

const CardImage = (props: { children: string }): JSX.Element => {
  return (
    <svg viewBox="0 0 455 455" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlSpace="preserve">
      <g>
        <title>Layer 1</title>
        <g id="svg_1">
          <path d="m0,69.889l0,108.263l160.468,0c-1.89,-5.039 -2.931,-10.49 -2.931,-16.182c0,-25.482 20.731,-46.213 46.214,-46.213c11.529,0 22.607,4.303 31.194,12.116l0.177,0.164l47.378,44.529l47.554,-44.693c8.587,-7.813 19.665,-12.116 31.194,-12.116c25.482,0 46.214,20.731 46.214,46.213c0,5.691 -1.041,11.142 -2.931,16.182l50.469,0l0,-108.263l-455,0z" id="svg_2" />
          <path d="m361.986,178.152c8.598,-0.388 15.477,-7.49 15.477,-16.182c0,-8.94 -7.273,-16.213 -16.214,-16.213c-4.012,0 -7.889,1.504 -10.929,4.237l-29.959,28.157l41.625,0l0,0.001z" id="svg_3" />
          <path d="m327.5,315.757l-30,0l0,-107.601c-8.814,-0.002 -21.186,-0.002 -30,0l0,67.601l-30,0l0,-67.595l-237.5,-0.01l0,176.958l455,0l0,-176.957l-127.5,0.01l0,107.594z" id="svg_4" />
          <path d="m244.639,178.152l-29.959,-28.157c-3.04,-2.733 -6.917,-4.237 -10.929,-4.237c-8.94,0 -16.214,7.273 -16.214,16.213c0,8.692 6.879,15.794 15.477,16.182l41.625,0l0,-0.001z" id="svg_5" />
        </g>
        <path stroke="#000" id="svg_6" d="m2.47747,329.33418l0,0c0,-5.2366 23.13662,-9.48171 51.67708,-9.48171l23.48959,0l0,0l112.75001,0l211.40621,0c13.70565,0 26.84991,0.99896 36.54126,2.77713c9.69129,1.77817 15.13585,4.18988 15.13585,6.70458l0,23.70427l0,0l0,14.22256l0,0c0,5.23661 -23.1366,9.48171 -51.67709,9.48171l-211.40621,0l-113.29397,0.10978l0.54396,-0.10978l-23.48959,0c-28.54046,0 -51.67708,-4.2451 -51.67708,-9.48171l0,0l0,-14.22256l0,0l-0.00002,-23.70427z" strokeWidth="0" fill="#ffffff" />
        <text fontStyle="normal" fontWeight="normal" fill="#000000" stroke="#000" strokeWidth="0" x="35" y="365" id="svg_7" fontSize="43" fontFamily="'Arial'" textAnchor="start" xmlSpace="preserve">{props.children}</text>
      </g>

    </svg>
  );
}

export default CardImage;
