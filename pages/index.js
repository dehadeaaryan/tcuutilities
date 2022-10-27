import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TCU Utilities</title>
        <meta name="description" content="Web App with several utilities for TCU students." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Utilities for <a href="https://tcu.edu">Frogs</a>
        </h1>

        <br /><br /><br /><br />

        <div className={styles.grid}>
          <Link href="/math-symbols">
            <a className={styles.card}>
              <h2>Math Symbol List &infin;</h2>
              <p>Click here to see a list of symbols in mathematics to paste in your document.</p>
            </a>
          </Link>

          <Link href="/statistics">
            <a className={styles.card}>
              <h2>Statistics %</h2>
              <p>Click here to Create graphs and charts for your statistics class.</p>
            </a>
          </Link>

          <Link href="/budget-calculator">
            <a className={styles.card}>
              <h2>Budget Calculator $</h2>
              <p>Click here to calculate the recommended budget for you.</p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h2>About &#9787;</h2>
              <p>Click here to learn more about my creator and find other similar projects.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>This application is not owned or funded by TCU</p>
      </footer>
    </div>
  )
}
