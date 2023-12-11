import React from 'react';
import clsx from 'clsx';

const FeatureList = [
  {
    title: 'Regulators',
    Svg: require('@site/static/img/regulators.svg').default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </>
    ),
  },
  {
    title: 'Industry',
    Svg: require('@site/static/img/industry.svg').default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </>
    ),
  },
  {
    title: 'Software Providers',
    Svg: require('@site/static/img/software-providers.svg').default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </>
    ),
  },
  {
    title: 'Certifiers',
    Svg: require('@site/static/img/certifiers.svg').default,
    description: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3 home-feature')}>
      <div className="home-feature__content">
        <div className="home-feature__head">
          <div className="home-feature__image">
            <Svg className="home-feature__icon" role="img" />
          </div>
          <h3 className="home-feature__title">{title}</h3>
        </div>
        <p className="home-feature__description">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className="home-features">
      <div className="home-features__container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
