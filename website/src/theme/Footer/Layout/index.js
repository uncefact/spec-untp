import React from 'react';
import clsx from 'clsx';
import './footer.scss';

export default function FooterLayout({style, links, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="footer__container">
        {copyright}
        {links}
      </div>
    </footer>
  );
}
