import React from 'react';
import MenuSvgIconsSprite from './svgSprite';

export default function Root({children}) {
  return <>
    {children}
    <MenuSvgIconsSprite/>
  </>;
}
