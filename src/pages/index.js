import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Anushree Test Space">
      <main className={styles.heroBanner}>
        <div className="container">
          <Heading as="h1">Welcome to My Site</Heading>
          <p className="hero__subtitle">Docusaurus are cool! 🎉</p>
          <p>Anushree Test Space</p>
        </div>
      </main>
    </Layout>
  );
}