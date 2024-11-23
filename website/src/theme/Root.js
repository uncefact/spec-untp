import React from 'react';
import ScrollToHash from '../components/ScrollToHash';
import MenuSvgIconsSprite from './svgSprite';

export default function Root({children}) {
  return (
    <>
      <ScrollToHash />
      {children}
      <MenuSvgIconsSprite />
    </>
  );
}
