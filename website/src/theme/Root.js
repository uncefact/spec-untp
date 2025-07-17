import React from 'react';
import ScrollToHash from '../components/ScrollToHash';
import WebsiteNotice from '../components/WebsiteNotice';
import MenuSvgIconsSprite from './svgSprite';

export default function Root({children}) {
  return (
    <>
      <WebsiteNotice />
      <ScrollToHash />
      {children}
      <MenuSvgIconsSprite />
    </>
  );
}
