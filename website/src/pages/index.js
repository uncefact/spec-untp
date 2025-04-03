import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Pledges from '@site/src/components/Pledges';
import Layout from '@theme/Layout';
import React from 'react';
import extensions from '../../extensions';
import {
  certifierImplementationPledges,
  industryImplementationPledges,
  registerImplementationPledges,
  regulatorImplementationPledges,
  softwareImplementationPledges,
} from '../../implementations';

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="home-hero">
      <div className="home-hero__container">
        <div className="home-hero__content">
          <h1 className="home-hero__title">{siteConfig.title}</h1>
          <p className="home-hero__description">{siteConfig.tagline}</p>
          <div className="home-hero__buttons">
            <Link
              className="button button--primary button--lg"
              to={siteConfig.themeConfig.slackLink}>
              Join our chat channel
            </Link>
            <Link
              className="button button--primary button--lg"
              to={siteConfig.themeConfig.mailingListLink}>
              Join our mailing list
            </Link>
          </div>
        </div>
        <div className="home-hero__image-wrapper">
          <img src={siteConfig.themeConfig.heroImage} className="home-hero__image" alt={siteConfig.themeConfig.heroImageAlt} />
        </div>
      </div>
    </header>
  );
}

const implementationPledges = [
  ...extensions,
  ...regulatorImplementationPledges,
  ...certifierImplementationPledges,
  ...registerImplementationPledges,
  ...industryImplementationPledges,
  ...softwareImplementationPledges,
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className="homepage-content">
        <HomepageHero />
        <HomepageFeatures />
        <div className="homepage-content__pledges">
          <Pledges implementations={implementationPledges} />
        </div>
      </main>
    </Layout>
  );
}
