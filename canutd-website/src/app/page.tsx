import Image from 'next/image'
import Layout from './layout'; // Adjust the path if necessary
import styles from './page.module.css';

export default function Page() {
  return (
    <Layout>
      <div className={styles.logoContainer}>
        <Image src="/canutd-logo.png" alt="My Logo" width={300} height={300} />
        <h1 className={styles.welcomeText}>Welcome To The Home of Candace United</h1>
        <h2 className={styles.descText}>Here we will be showcasing our stats and analysis from Seasons 1-3</h2>
      </div>
    </Layout>
  );
}

