import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
 
const features = [
  {
    title: 'Tutorial',
    image: '/img/undraw_docusaurus_mountain.svg',
    description:
      'Learn how to use and customize your website with step-by-step tutorials.',
    link: '/docs/intro',
  },
  {
    title: 'Documentation',
    image: '/img/undraw_docusaurus_react.svg',
    description:
      'Find technical information, instructions, and resources in one place.',
    link: '/docs',
  },
  {
    title: 'Blog',
    image: '/img/undraw_docusaurus_tree.svg',
    description:
      'Explore articles, updates, and ideas about projects and development.',
    link: '/blog',
  },
];
 
function Feature({ title, image, description, link }) {
  return (
<div className="col col--4">
<div className={styles.feature}>
<img
          src={image}
          alt=""
          className={styles.featureImage}
        />
 
        <Heading as="h3" className={styles.featureTitle}>
          {title}
</Heading>
 
        <p className={styles.featureDescription}>
          {description}
</p>
 
        <Link to={link} className={styles.featureLink}>
          Explore {title} →
</Link>
</div>
</div>
  );
}
 
function HomepageFeatures() {
  return (
<section className={styles.features}>
<div className="container">
<div className="row">
          {features.map((feature) => (
<Feature key={feature.title} {...feature} />
          ))}
</div>
</div>
</section>
  );
}
 
export default function Home() {
  return (
<Layout
      title="Anushree Test Space"
      description="Welcome to my website"
>
<header className={styles.heroBanner}>
<div className="container">
<Heading as="h1" className={styles.heroTitle}>
            Hello, welcome to Anushree's site!
</Heading>
 
          <p className={styles.heroSubtitle}>
            Explore my website. I'm glad you're here!
</p>
 
          <div className={styles.buttons}>
<Link
              className={styles.heroButton}
              to="/docs/intro"
>
              Explore My Website ⏱️
</Link>
</div>
</div>
</header>
 
      <main>
<HomepageFeatures />
</main>
</Layout>
  );
}